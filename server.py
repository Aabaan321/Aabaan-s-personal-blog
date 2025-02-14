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
        response = requests.post("sk-865b41c4aa454252a2ed754b5bd20610", json=payload, headers=headers)
        response_data = response.json()

        return jsonify({"response": response_data["choices"][0]["message"]["content"]})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
