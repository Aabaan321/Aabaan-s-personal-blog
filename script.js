document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Toggle settings panel
    const settingsIcon = document.getElementById("settings-icon");
    const settingsPanel = document.getElementById("settings-panel");

    settingsIcon.addEventListener("click", function () {
        settingsPanel.classList.toggle("show");
    });

    // Theme switch
    const themeSwitch = document.getElementById("theme-switch");
    themeSwitch.addEventListener("change", function () {
        if (themeSwitch.checked) {
            document.body.style.background = "var(--background-light)";
            document.body.style.color = "var(--text-light)";
        } else {
            document.body.style.background = "var(--background-dark)";
            document.body.style.color = "var(--text-dark)";
        }
    });

    // Font size change
    const fontSizeSelect = document.getElementById("font-size");
    fontSizeSelect.addEventListener("change", function () {
        document.body.style.fontSize = fontSizeSelect.value;
    });

    // Theme color change
    const themeColor = document.getElementById("theme-color");
    themeColor.addEventListener("input", function () {
        document.documentElement.style.setProperty("--primary-color", themeColor.value);
    });

    // Save settings
    document.getElementById("save-settings").addEventListener("click", function () {
        alert("Settings saved!");
        settingsPanel.classList.remove("show");
    });

    // Comment section using LocalStorage
    document.getElementById('submit-comment').addEventListener('click', function () {
        const commentInput = document.getElementById('comment-input');
        const commentText = commentInput.value.trim();
        if (commentText) {
            let comments = JSON.parse(localStorage.getItem('comments')) || [];
            comments.push(commentText);
            localStorage.setItem('comments', JSON.stringify(comments));

            commentInput.value = '';
            displayComments();
        }
    });

    function displayComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        const commentsList = document.getElementById('comments-list');
        commentsList.innerHTML = comments.map(comment => `<p>${comment}</p>`).join('');
    }

    window.onload = displayComments;

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            backToTopButton.classList.remove("hidden");
        } else {
            backToTopButton.classList.add("hidden");
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
