// ===== FIREBASE AUTH & FIRESTORE UI INIT =====
function initAuthUI() {
    const loginBtn = document.getElementById('login-btn');
    const avatar = document.getElementById('user-avatar');
    const dropdown = document.getElementById('user-dropdown');

    loginBtn.addEventListener('click', async () => {
        try { await window._fbSignInWithPopup(window._fbAuth, window._fbProvider); }
        catch (e) {
            console.error(e);
            if (window.showToast) window.showToast('Sign-in failed: ' + e.message);
        }
    });

    avatar.addEventListener('click', () => dropdown.classList.toggle('open'));

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.auth-area')) dropdown.classList.remove('open');
    });

    document.getElementById('dd-signout').addEventListener('click', async () => {
        await window._fbSignOut(window._fbAuth);
        dropdown.classList.remove('open');
        if (window.showToast) window.showToast('Signed out');
    });

    document.getElementById('dd-saved').addEventListener('click', () => {
        dropdown.classList.remove('open');
        window.showFavsOnly = true;
        window.showCustomOnly = false;
        const favFilterBtn = document.getElementById('fav-filter-btn');
        if (favFilterBtn) favFilterBtn.classList.add('active');
        if (window.renderGrid) window.renderGrid();
        const detailOverlay = document.getElementById('detail-overlay');
        if (detailOverlay && detailOverlay.classList.contains('open') && window.closeDetail) {
            window.closeDetail();
        }
    });

    document.getElementById('dd-custom').addEventListener('click', () => {
        dropdown.classList.remove('open');
        window.showCustomOnly = !window.showCustomOnly;
        window.showFavsOnly = false;
        const favFilterBtn = document.getElementById('fav-filter-btn');
        if (favFilterBtn) favFilterBtn.classList.remove('active');
        if (window.renderGrid) window.renderGrid();
        const detailOverlay = document.getElementById('detail-overlay');
        if (detailOverlay && detailOverlay.classList.contains('open') && window.closeDetail) {
            window.closeDetail();
        }
        if (window.showToast) {
            if (window.showCustomOnly) window.showToast('Showing your custom recipes');
            else window.showToast('Showing all recipes');
        }
    });

    window._fbOnAuthStateChanged(window._fbAuth, async (user) => {
        window.currentUser = user; // Export to global for other scripts
        if (user) {
            loginBtn.style.display = 'none';
            avatar.style.display = 'block';
            avatar.src = user.photoURL || '';
            document.getElementById('dd-name').textContent = user.displayName || 'User';
            document.getElementById('dd-email').textContent = user.email || '';

            // Load saved recipes from Firestore
            try {
                const snap = await window._fbGetDocs(window._fbCollection(window._fbDb, 'users', user.uid, 'savedRecipes'));
                const firestoreSaves = {};
                snap.forEach(d => { firestoreSaves[d.id] = true; });

                // Migrate localStorage saves
                const localSaves = JSON.parse(localStorage.getItem('savedRecipes') || '{}');
                for (const id of Object.keys(localSaves)) {
                    if (!firestoreSaves[id]) {
                        await window._fbSetDoc(window._fbDoc(window._fbDb, 'users', user.uid, 'savedRecipes', id), { savedAt: Date.now() });
                        firestoreSaves[id] = true;
                    }
                }
                window.savedRecipes = firestoreSaves;
                localStorage.setItem('savedRecipes', JSON.stringify(window.savedRecipes));
                if (window.renderGrid) window.renderGrid();
            } catch (e) {
                console.error('Firestore load error:', e);
            }

            // Load custom recipes from Firestore
            if (window.loadCustomRecipes) {
                await window.loadCustomRecipes(user.uid);
            }
        } else {
            loginBtn.style.display = 'flex';
            avatar.style.display = 'none';
            window.currentUser = null;
            window.savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '{}');
            if (window.renderGrid) window.renderGrid();
        }
    });
}

// Wait for Firebase global module to load
if (window._fbReady) {
    initAuthUI();
} else {
    window.addEventListener('firebase-ready', initAuthUI);
}
