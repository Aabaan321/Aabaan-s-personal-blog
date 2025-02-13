// backend.js (Node.js server)

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    const userInput = req.body.input;

    try {
        // Make the request to OpenAI API
        const response = await fetch('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', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`,  // Replace with your actual OpenAI API key
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: userInput,
                max_tokens: 100,
            }),
        });

        const data = await response.json();

        // Send the response back to the frontend
        res.json(data);
    } catch (error) {
        res.status(500).send("Error while calling the OpenAI API");
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
