require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    const userInput = req.body.input;

    // Check if the input exists
    if (!userInput || userInput.trim() === '') {
        return res.status(400).json({ error: 'Input is required' });
    }

    try {
        // DeepSeek API request
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,  // Use DeepSeek API key
            },
            body: JSON.stringify({
                model: 'deepseek-chat',  // Adjust if necessary
                messages: [{ role: "user", content: userInput }],
                max_tokens: 100,
            }),
        });

        const data = await response.json();

        // Log the API response for debugging purposes
        console.log("DeepSeek API Response:", data);

        if (data.choices && data.choices.length > 0) {
            res.json({ response: data.choices[0].message.content.trim() });
        } else {
            res.status(500).json({ error: 'Invalid response from DeepSeek API' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to get a response from DeepSeek API" });
    }
});

// Start server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
