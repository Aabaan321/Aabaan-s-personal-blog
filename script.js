// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Read more button functionality
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            alert("Full blog post feature coming soon!");
        });
    });
});
