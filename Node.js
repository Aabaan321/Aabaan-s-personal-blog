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
        const response = await fetch('sk-svcacct-CPwOcBBY_elAW4iWMfnI0zJqj7R7iiPN8UB52c_QdCa4ePtqEFTmnmltValtsT3BlbkFJkprPxylm1Z7JOOj6ij4G3QC3PMXdIVqyMB24Ha2a-Grr2fPvugB_wHMhaz8ZAA', {
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

        if (data.choices && data.choices.length > 0) {
            res.json({ response: data.choices[0].text.trim() });
        } else {
            res.status(500).json({ error: 'Invalid response from OpenAI API' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error while calling OpenAI API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
