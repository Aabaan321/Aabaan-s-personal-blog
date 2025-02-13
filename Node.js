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
        const response = await fetch('sk-svcacct-GnjNRAyezWCvllVc_nVK-YMBNU56b6XEnw3WWg4Wbtr7mozuIwk2rEZPUpzxcT3BlbkFJKhG_RYp-THQtQPSc5IJWX4JG6ZRObjqwYR9clMy4y_Tw1vGIJqW__Y5e08WAA', {
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
