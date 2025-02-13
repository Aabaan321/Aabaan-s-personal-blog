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
        const response = await fetch('sk-svcacct-WlOtIAyujCmpOe_RQ6t15ZCSnHRT2bFXl_hThK9pLHEpsvE2fKSIDJtvj2YaATYT3BlbkFJUlIFMHj7EZ8mBNSw1sCeqzHpKW5eJn2yaXf0VwRe8ztkx3e50YtOCHKWsLUnfAA', {
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
