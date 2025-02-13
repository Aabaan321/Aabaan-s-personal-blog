// Dark Mode Toggle & Customization
const themeSwitch = document.getElementById('theme-switch');
const fontSizeSelect = document.getElementById('font-size');
const themeColorPicker = document.getElementById('theme-color');
const settingsPanel = document.getElementById('settings-panel');
const settingsIcon = document.getElementById('settings-icon');
const saveSettingsBtn = document.getElementById('save-settings');

// Load user preferences
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem('darkMode') === 'enabled';
    const savedFontSize = localStorage.getItem('fontSize') || '18px';
    const savedThemeColor = localStorage.getItem('themeColor') || '#ff9800';

    document.body.style.fontSize = savedFontSize;
    document.documentElement.style.setProperty('--primary-color', savedThemeColor);

    if (savedTheme) {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }
});

// Save user preferences
saveSettingsBtn.addEventListener('click', function () {
    localStorage.setItem('darkMode', themeSwitch.checked ? 'enabled' : 'disabled');
    localStorage.setItem('fontSize', fontSizeSelect.value);
    localStorage.setItem('themeColor', themeColorPicker.value);

    document.body.style.fontSize = fontSizeSelect.value;
    document.documentElement.style.setProperty('--primary-color', themeColorPicker.value);
});

// Toggle Settings Panel
settingsIcon.addEventListener('click', function () {
    settingsPanel.classList.toggle('show');
});

// Smooth Scroll & Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.id = "back-to-top";
backToTopBtn.innerHTML = "↑";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// Like Button Functionality
document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", function () {
        let count = parseInt(this.dataset.count || 0);
        count++;
        this.dataset.count = count;
        this.innerHTML = `❤️ ${count}`;
    });
});

// Search Functionality
document.getElementById("search-btn").addEventListener("click", function () {
    let searchQuery = document.getElementById("search-input").value.toLowerCase();
    let posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        let title = post.querySelector("h3").textContent.toLowerCase();
        let content = post.querySelector("p").textContent.toLowerCase();

        if (title.includes(searchQuery) || content.includes(searchQuery)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});
