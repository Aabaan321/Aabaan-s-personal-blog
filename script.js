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
        if (userInput.trim()) {
            getAIResponse(userInput);
        } else {
            const aiMessage = document.createElement("div");
            aiMessage.textContent = "Bot: Please enter a message!";
            aiMessage.classList.add("bot-message");
            chatMessages.appendChild(aiMessage);
        }
    }

    async function getAIResponse(userInput) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo", // or "gpt-4"
                    messages: [{ role: "user", content: userInput }],
                    max_tokens: 100,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                const aiMessage = document.createElement("div");
                aiMessage.textContent = "Bot: " + data.choices[0].message.content.trim();
                aiMessage.classList.add("bot-message");
                document.getElementById("chat-messages").appendChild(aiMessage);
            } else {
                console.error('Error from API:', data);
                alert('Failed to get response from the bot.');
            }
        } catch (error) {
            console.error('Error making API request:', error);
            alert('Error making the request.');
        }
    }
});
