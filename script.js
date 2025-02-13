// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});

// Font Customization
const fontSizeSelector = document.getElementById("font-size-selector");
const fontStyleSelector = document.getElementById("font-style-selector");

fontSizeSelector.addEventListener("change", function() {
    document.body.style.fontSize = fontSizeSelector.value + "px";
});

fontStyleSelector.addEventListener("change", function() {
    document.body.style.fontFamily = fontStyleSelector.value;
});

// Lazy Loading for Images
document.querySelectorAll('img').forEach((img) => {
    img.setAttribute('loading', 'lazy');
});

// Scroll to Top Button
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

// Comment Section Functionality
const submitCommentBtn = document.getElementById("submit-comment");
const commentText = document.getElementById("comment-text");
const commentsList = document.getElementById("comments-list");

submitCommentBtn.addEventListener("click", function () {
    const comment = commentText.value.trim();
    if (comment) {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.textContent = comment;
        commentsList.appendChild(commentDiv);
        commentText.value = ""; // Clear text area
    }
});
