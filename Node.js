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
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', { // Fixed URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`, // Corrected header
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: userInput,
                max_tokens: 100,
            }),
        });

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            res.json({ response: data.choices[0].text.trim() });
        } else {
            res.status(500).json({ error: 'Invalid response from API' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error while calling API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
