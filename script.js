// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Read more button functionality (opens new pages)
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            const postTitle = this.previousElementSibling.innerText;
            let pageURL = "";

            if (postTitle.includes("Culinary Arts")) {
                pageURL = "culinary-journey.html";
            } else if (postTitle.includes("Exploring New Destinations")) {
                pageURL = "travel-experiences.html";
            }

            if (pageURL) {
                window.open(pageURL, "_blank");
            } else {
                alert("This blog post is not available yet.");
            }
        });
    });

    // Add hover animation to social icons
    document.querySelectorAll(".social-icons a").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.1)";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });
});
