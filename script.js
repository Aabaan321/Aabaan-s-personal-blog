// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, null, `#${targetId}`); // Update URL without refreshing
            }
        });
    });

    // Read More functionality (expands content instead of alert)
    document.querySelectorAll(".read-more").forEach(button => {
        button.addEventListener("click", function () {
            const post = this.parentElement;
            const fullText = post.querySelector(".full-content");

            if (fullText.style.display === "none" || fullText.style.display === "") {
                fullText.style.display = "block";
                this.textContent = "Show Less";
            } else {
                fullText.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });

    // Optional: Dark Mode Toggle (if you want it)
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Toggle Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.bottom = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px 15px";
    darkModeToggle.style.background = "#ff9800";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.color = "white";
    darkModeToggle.style.cursor = "pointer";
    darkModeToggle.style.borderRadius = "5px";
    
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

});
