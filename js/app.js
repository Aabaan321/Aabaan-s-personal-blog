// ===== STATE =====
let currentFilter = 'all';
let searchResults = [];
let savedRecipes = [];
let customRecipes = [];
let isEditing = false;
let currentRecipe = null;
let currentRecipeIndex = 0;
let isCooking = false;
let currentCookStep = 0;
let cookTimer = null;
let timerSeconds = 0;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupTheme();
    setupAuthListeners();
    setupEventListeners();

    // Initial Render with Skeleton
    renderSkeleton();

    // Delay real render to show off the premium loader & skeleton
    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
        renderGrid();
        setupObserverAnimations();
    }, 1500);
}

// ===== AUTH & UI SYNC =====
function setupAuthListeners() {
    window.addEventListener('firebase-ready', () => {
        window._fbOnAuthStateChanged(window._fbAuth, async (user) => {
            const loginBtn = document.getElementById('login-btn');
            const avatar = document.getElementById('user-avatar');

            if (user) {
                loginBtn.style.display = 'none';
                avatar.style.display = 'block';
                avatar.src = user.photoURL || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
                setupUserDropdown(user);
                await loadUserData(user.uid);
            } else {
                loginBtn.style.display = 'flex';
                avatar.style.display = 'none';
                savedRecipes = [];
                customRecipes = [];
                renderGrid();
            }
        });
    });
}

function setupUserDropdown(user) {
    const avatar = document.getElementById('user-avatar');
    const dropdown = document.getElementById('user-dropdown');
    const nameEl = document.getElementById('dd-name');
    const emailEl = document.getElementById('dd-email');

    nameEl.textContent = user.displayName || 'Chef';
    emailEl.textContent = user.email;

    avatar.onclick = (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    };

    document.addEventListener('click', () => dropdown.classList.remove('show'));

    document.getElementById('dd-signout').onclick = () => window._fbSignOut(window._fbAuth);
}

async function loadUserData(uid) {
    try {
        const querySnapshot = await window._fbGetDocs(window._fbCollection(window._fbDb, `users/${uid}/saved`));
        savedRecipes = querySnapshot.docs.map(doc => doc.id);

        const customSnapshot = await window._fbGetDocs(window._fbCollection(window._fbDb, `users/${uid}/custom`));
        customRecipes = customSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        renderGrid();
    } catch (e) {
        console.error("Error loading user data:", e);
    }
}

// ===== GRID & RENDERING =====
function renderSkeleton() {
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        grid.innerHTML += `
            <div class="recipe-card skeleton">
                <div class="card-img" style="height: 200px;"></div>
                <div class="card-body">
                    <div style="height: 24px; width: 60%; background: #eee; border-radius: 4px; margin-bottom: 12px;"></div>
                    <div style="height: 16px; width: 90%; background: #eee; border-radius: 4px; margin-bottom: 8px;"></div>
                </div>
            </div>
        `;
    }
}

function renderGrid() {
    const grid = document.getElementById('recipe-grid');
    const noResults = document.getElementById('no-results');
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase();

    // Combine original and custom
    const allAvailable = [...recipes, ...customRecipes];

    const filtered = allAvailable.filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(query) ||
            r.ingredients.some(i => i.toLowerCase().includes(query));
        const matchesCategory = currentFilter === 'all' || r.category === currentFilter;
        return matchesSearch && matchesCategory;
    });

    grid.innerHTML = '';

    if (filtered.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        filtered.forEach((recipe, idx) => {
            const isFav = savedRecipes.includes(recipe.id || recipe.title);
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.style.animation = `fadeUpCard 0.5s ease forwards ${idx * 0.05}s`;

            card.innerHTML = `
                <div class="card-img-wrap">
                    <img src="${recipe.img || recipe.image}" class="card-img" alt="${recipe.title}" loading="lazy">
                    <div class="card-category">${recipe.category}</div>
                    <button class="card-fav-btn ${isFav ? 'active' : ''}" data-id="${recipe.id || recipe.title}">
                        <i class="fa${isFav ? 's' : 'r'} fa-heart"></i>
                    </button>
                    ${recipe.isCustom ? '<div class="card-badge"><i class="fas fa-pen-fancy"></i> Custom</div>' : ''}
                </div>
                <div class="card-body">
                    <h3 class="card-title">${recipe.title}</h3>
                    <div class="card-meta">
                        <span><i class="far fa-clock"></i> ${recipe.time}</span>
                        <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
                    </div>
                </div>
            `;

            card.onclick = (e) => {
                if (!e.target.closest('.card-fav-btn')) {
                    openDetail(recipe);
                }
            };

            const favBtn = card.querySelector('.card-fav-btn');
            favBtn.onclick = (e) => {
                e.stopPropagation();
                toggleFavorite(recipe.id || recipe.title, favBtn);
            };

            grid.appendChild(card);
        });
    }
}

// ===== DETAIL OVERLAY =====
function openDetail(recipe) {
    currentRecipe = recipe;
    const overlay = document.getElementById('detail-overlay');
    const content = document.getElementById('detail-content');
    const title = document.getElementById('detail-topbar-title');
    const favBtn = document.getElementById('detail-fav-btn');

    title.textContent = recipe.title;
    content.innerHTML = renderDetailHTML(recipe);

    // Fav button state
    const isFav = savedRecipes.includes(recipe.id || recipe.title);
    favBtn.innerHTML = `<i class="fa${isFav ? 's' : 'r'} fa-heart"></i>`;
    favBtn.classList.toggle('active', isFav);
    favBtn.onclick = () => toggleFavorite(recipe.id || recipe.title, favBtn);

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    window.dispatchEvent(new CustomEvent('recipe-opened', { detail: recipe }));
}

function renderDetailHTML(recipe) {
    const ingredientsHTML = recipe.ingredients.map(ing => `
        <li class="checklist-item" tabindex="0">
            <div class="check-box"><i class="fas fa-check"></i></div>
            <span>${ing}</span>
        </li>
    `).join('');

    const stepsHTML = recipe.steps.map((step, i) => `
        <div class="step-card">
            <div class="step-number">${i + 1}</div>
            <p>${step}</p>
        </div>
    `).join('');

    return `
        <div class="detail-hero">
            <img src="${recipe.img || recipe.image}" alt="${recipe.title}">
            <div class="detail-hero-content">
                <h1>${recipe.title}</h1>
                <div class="detail-tags">
                    <span><i class="fas fa-tag"></i> ${recipe.category}</span>
                    <span><i class="far fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-user-friends"></i> ${recipe.servings} servings</span>
                </div>
            </div>
        </div>
        <div class="detail-grid">
            <div class="ingredients-section">
                <h3>Ingredients <span style="font-size:0.8rem; font-weight:normal; opacity:0.6">(Tap to cross off)</span></h3>
                <ul class="checklist">
                    ${DOMPurify.sanitize(ingredientsHTML)}
                </ul>
            </div>
            <div class="steps-section">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem">
                    <h3>Instructions</h3>
                    <button class="cook-mode-btn" id="start-cook-mode">
                        <i class="fas fa-fire"></i> Cooking Mode
                    </button>
                </div>
                ${DOMPurify.sanitize(stepsHTML)}
            </div>
        </div>
    `;
}

// ===== FAVORITES & SOCIAL =====
async function toggleFavorite(recipeId, btn) {
    if (!window._fbAuth.currentUser) {
        showToast("Please sign in to save favorites!", "warning");
        return;
    }

    const uid = window._fbAuth.currentUser.uid;
    const isFav = savedRecipes.includes(recipeId);

    try {
        if (isFav) {
            await window._fbDeleteDoc(window._fbDoc(window._fbDb, `users/${uid}/saved`, recipeId));
            savedRecipes = savedRecipes.filter(id => id !== recipeId);
            showToast("Removed from favorites");
        } else {
            await window._fbSetDoc(window._fbDoc(window._fbDb, `users/${uid}/saved`, recipeId), { savedAt: Date.now() });
            savedRecipes.push(recipeId);
            showToast("Saved to favorites!");
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#E8652A', '#F7B733', '#ffffff']
            });
        }

        // Update both UI versions
        btn.classList.toggle('active');
        btn.querySelector('i').className = `fa${!isFav ? 's' : 'r'} fa-heart`;
        renderGrid();
    } catch (e) {
        console.error("Favorite toggle failed:", e);
        showToast("Error saving favorite", "error");
    }
}

// ===== COOKING MODE =====
function startCookingMode() {
    isCooking = true;
    currentCookStep = 0;

    // Create overlay if not exists
    let cookOverlay = document.getElementById('cooking-mode-overlay');
    if (!cookOverlay) {
        cookOverlay = document.createElement('div');
        cookOverlay.id = 'cooking-mode-overlay';
        cookOverlay.className = 'cooking-mode-overlay';
        cookOverlay.innerHTML = `
            <div class="cook-topbar">
                <span id="cook-recipe-name"></span>
                <button id="cook-exit">Exit Mode <i class="fas fa-times"></i></button>
            </div>
            <div class="cook-progress-bar">
                <div id="cook-progress-fill"></div>
            </div>
            <div class="cook-content">
                <div id="cook-step-text"></div>
                <div id="cook-timer-ui" style="display:none">
                    <div id="cook-timer-display">00:00</div>
                    <button id="cook-timer-start-btn">Start Timer</button>
                </div>
            </div>
            <div class="cook-controls">
                <button id="cook-prev" aria-label="Previous step"><i class="fas fa-chevron-left"></i></button>
                <div style="font-family:'Outfit'; font-weight:600" id="cook-step-counter">Step 1 of 5</div>
                <button id="cook-next" aria-label="Next step"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
        document.body.appendChild(cookOverlay);

        // Bind controls
        document.getElementById('cook-exit').onclick = exitCookingMode;
        document.getElementById('cook-prev').onclick = () => moveCookStep(-1);
        document.getElementById('cook-next').onclick = () => moveCookStep(1);
    }

    document.getElementById('cook-recipe-name').textContent = currentRecipe.title;
    cookOverlay.classList.add('open');
    updateCookStep();
}

function moveCookStep(dir) {
    const nextStep = currentCookStep + dir;
    if (nextStep >= 0 && nextStep < currentRecipe.steps.length) {
        currentCookStep = nextStep;
        updateCookStep();
    } else if (nextStep === currentRecipe.steps.length) {
        showToast("Chef, you've finished the recipe! 🥳");
        confetti({ particleCount: 150, spread: 100 });
        setTimeout(exitCookingMode, 2000);
    }
}

function updateCookStep() {
    const stepText = currentRecipe.steps[currentCookStep];
    const textEl = document.getElementById('cook-step-text');
    const counterEl = document.getElementById('cook-step-counter');
    const progressFill = document.getElementById('cook-progress-fill');

    textEl.innerHTML = DOMPurify.sanitize(stepText);
    counterEl.textContent = `Step ${currentCookStep + 1} of ${currentRecipe.steps.length}`;
    progressFill.style.width = `${((currentCookStep + 1) / currentRecipe.steps.length) * 100}%`;

    // Search for time keywords (e.g., "15 minutes")
    const timeMatch = stepText.match(/(\d+)\s*(minutes|min|mins|hour|hr)/i);
    const timerUI = document.getElementById('cook-timer-ui');

    if (timeMatch) {
        clearInterval(cookTimer);
        let mins = parseInt(timeMatch[1]);
        if (timeMatch[2].toLowerCase().startsWith('h')) mins *= 60;

        timerSeconds = mins * 60;
        updateTimerDisplay();
        timerUI.style.display = 'flex';

        const startBtn = document.getElementById('cook-timer-start-btn');
        startBtn.textContent = "Start Timer";
        startBtn.onclick = toggleCookTimer;
    } else {
        timerUI.style.display = 'none';
        clearInterval(cookTimer);
    }
}

function toggleCookTimer() {
    const btn = document.getElementById('cook-timer-start-btn');
    if (cookTimer) {
        clearInterval(cookTimer);
        cookTimer = null;
        btn.textContent = "Resume Timer";
    } else {
        btn.textContent = "Pause Timer";
        cookTimer = setInterval(() => {
            timerSeconds--;
            updateTimerDisplay();
            if (timerSeconds <= 0) {
                clearInterval(cookTimer);
                cookTimer = null;
                playAlarm();
            }
        }, 1000);
    }
}

function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    document.getElementById('cook-timer-display').textContent =
        `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function playAlarm() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.connect(ctx.destination);
    osc.start();
    setTimeout(() => osc.stop(), 500);
    showToast("Timer Finished! ⏰", "info");
}

function exitCookingMode() {
    document.getElementById('cooking-mode-overlay').classList.remove('open');
    clearInterval(cookTimer);
    isCooking = false;
}

// ===== UTILS & UI =====
function setupTheme() {
    const toggle = document.getElementById('theme-toggle');
    const current = localStorage.getItem('recipe-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', current);
    updateThemeIcon(current);

    toggle.onclick = () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('recipe-theme', next);
        updateThemeIcon(next);
    };
}

function updateThemeIcon(theme) {
    const i = document.querySelector('#theme-toggle i');
    i.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function setupEventListeners() {
    // Search
    document.getElementById('search-input').oninput = renderGrid;

    // Filters
    document.querySelectorAll('.filter-pill').forEach(btn => {
        btn.onclick = () => {
            document.querySelector('.filter-pill.active').classList.remove('active');
            btn.classList.add('active');
            currentFilter = btn.dataset.cat;
            renderGrid();
        };
    });

    // Detail Back
    document.getElementById('detail-back').onclick = () => {
        document.getElementById('detail-overlay').classList.remove('open');
        document.body.style.overflow = 'auto';
    };

    // User Manual Accordion (ResizeObserver approach)
    const manualHeader = document.getElementById('manual-header');
    const manualContent = document.getElementById('manual-content');

    manualHeader.onclick = () => {
        const isOpen = manualHeader.getAttribute('aria-expanded') === 'true';
        manualHeader.setAttribute('aria-expanded', !isOpen);

        if (!isOpen) {
            manualContent.style.height = manualContent.scrollHeight + 'px';
            manualContent.style.opacity = '1';
        } else {
            manualContent.style.height = '0';
            manualContent.style.opacity = '0';
        }
    };

    // Global click for ingredient checklist
    document.addEventListener('click', (e) => {
        const item = e.target.closest('.checklist-item');
        if (item) {
            item.classList.toggle('checked');
        }

        if (e.target.closest('#start-cook-mode')) {
            startCookingMode();
        }
    });

    // Back to top
    const btt = document.getElementById('back-to-top');
    window.onscroll = () => {
        if (window.scrollY > 500) {
            btt.classList.add('visible');
        } else {
            btt.classList.remove('visible');
        }
    };
    btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupObserverAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.manual-card, .footer-section').forEach(el => observer.observe(el));
}

function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = `toast show ${type}`;
    setTimeout(() => toast.className = 'toast', 3000);
}

// Draggable Logic for Chats
function makeDraggable(id) {
    const win = document.getElementById(id);
    const header = win.querySelector('.chat-header');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    header.onmousedown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        win.style.top = (win.offsetTop - pos2) + "px";
        win.style.left = (win.offsetLeft - pos1) + "px";
        win.style.bottom = 'auto'; // Break from fixed bottom
        win.style.right = 'auto';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

makeDraggable('chat-window-main');
makeDraggable('chat-window-custom');
