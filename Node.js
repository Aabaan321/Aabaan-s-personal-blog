require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.post('/chat', async (req, res) => {
    const userInput = req.body.input;

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: userInput,
                max_tokens: 100,
            }),
        });

        const data = await response.json();
        res.json({ response: data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error while calling OpenAI API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
