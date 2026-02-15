require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.post('/chat', async (req, res) => {
    const userInput = req.body.input;

    if (!userInput) {
        return res.status(400).json({ error: 'Input is required' });
    }

    try {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'deepseek-chat', // Assuming DeepSeek uses 'deepseek-chat' or another model name
                messages: [{ role: 'user', content: userInput }], // Adjusted this to use 'messages'
                max_tokens: 100,
            }),
        });

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            res.json({ response: data.choices[0].message.content.trim() });
        } else {
            res.status(500).json({ error: 'No valid choices returned from the API' });
        }
    } catch (error) {
        console.error('Error occurred:', error.message);
        res.status(500).json({ error: 'Error while calling API: ' + error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
