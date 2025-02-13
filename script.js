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

        // Call AI for response
        getAIResponse(userInput);
    }

    async function getAIResponse(userInput) {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: userInput,
                max_tokens: 100,
            }),
        });

        const data = await response.json();
        const aiMessage = document.createElement("div");
        aiMessage.textContent = "Bot: " + data.choices[0].text.trim();
        aiMessage.classList.add("bot-message");
        document.getElementById("chat-messages").appendChild(aiMessage);
    }
});
