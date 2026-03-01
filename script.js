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

    // Set initial theme on page load based on checkbox status
    if (themeSwitch.checked) {
        document.body.style.background = "var(--background-light)";
        document.body.style.color = "var(--text-light)";
    } else {
        document.body.style.background = "var(--background-dark)";
        document.body.style.color = "var(--text-dark)";
    }

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

    // Chatbot functionality
    document.getElementById("send-button").addEventListener("click", sendMessage);

    function sendMessage() {
        const userInput = document.getElementById("user-input").value;
        const chatMessages = document.getElementById("chat-messages");

        // Display user message
        const userMessage = document.createElement("div");
        userMessage.textContent = "You: " + userInput;
        userMessage.classList.add("user-message");
        chatMessages.appendChild(userMessage);

        // Clear input field
        document.getElementById("user-input").value = "";

        // Show loading message while waiting for response
        const loadingMessage = document.createElement("div");
        loadingMessage.textContent = "Bot: Typing...";
        loadingMessage.classList.add("bot-message", "loading");
        chatMessages.appendChild(loadingMessage);

        // Call AI for response from Python backend
        if (userInput.trim()) {
            getAIResponse(userInput);
        } else {
            // Clear the "typing" message and show prompt for empty input
            chatMessages.removeChild(loadingMessage);
            const aiMessage = document.createElement("div");
            aiMessage.textContent = "Bot: Please enter a message!";
            aiMessage.classList.add("bot-message");
            chatMessages.appendChild(aiMessage);
        }
    }

    async function getAIResponse(userInput) {
        try {
            const response = await fetch('http://localhost:5000/chat', {  // <-- Calls your Python backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: userInput }),
            });

            const data = await response.json();
            const chatMessages = document.getElementById("chat-messages");
            const loadingMessage = document.querySelector(".loading");
            
            if (loadingMessage) chatMessages.removeChild(loadingMessage); // Remove typing indicator

            if (response.ok) {
                const aiMessage = document.createElement("div");
                aiMessage.textContent = "Bot: " + data.response;
                aiMessage.classList.add("bot-message");
                chatMessages.appendChild(aiMessage);
            } else {
                console.error('Error from backend:', data);
                alert('Failed to get response from the bot.');
            }
        } catch (error) {
            console.error('Error making API request:', error);
            alert('Error connecting to the server.');
        }
    }
});
