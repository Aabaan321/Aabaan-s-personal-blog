import os
import requests
from flask import Flask, request, jsonify
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")  # Store API key in .env file

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get("input", "")

    if not user_input:
        return jsonify({"error": "No input provided"}), 400

    headers = {
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "deepseek-chat",
        "messages": [{"role": "user", "content": user_input}],
        "max_tokens": 100
    }

    try:
        response = requests.post("https://api.deepseek.com/v1/chat/completions", json=payload, headers=headers)
        
        # Log response for debugging
        print(f"DeepSeek API Response Status Code: {response.status_code}")
        response_data = response.json()

        # Check if the response contains choices
        if "choices" in response_data and response_data["choices"]:
            return jsonify({"response": response_data["choices"][0]["message"]["content"]})
        else:
            return jsonify({"error": "Invalid response from DeepSeek API"}), 500

    except requests.exceptions.RequestException as e:
        # Log exception error
        print(f"Error: {str(e)}")
        return jsonify({"error": "Failed to contact the DeepSeek API"}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
