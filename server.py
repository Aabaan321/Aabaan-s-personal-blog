import os
import requests
import json
from flask import Flask, request, jsonify
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")  # Store API key in .env file
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")  # Store OpenRouter API key in .env file

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get("input", "")
    api_choice = data.get("api", "deepseek")  # Default to DeepSeek if not provided

    if not user_input:
        return jsonify({"error": "No input provided"}), 400

    if api_choice == "deepseek":
        # Call the DeepSeek API
        return get_deepseek_response(user_input)
    elif api_choice == "openrouter":
        # Call the OpenRouter API
        return get_openrouter_response(user_input)
    else:
        return jsonify({"error": "Invalid API choice"}), 400

def get_deepseek_response(user_input):
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

def get_openrouter_response(user_input):
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "<YOUR_SITE_URL>",  # Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "<YOUR_SITE_NAME>",  # Optional. Site title for rankings on openrouter.ai.
    }

    payload = {
        "model": "deepseek/deepseek-r1-distill-qwen-1.5b",
        "messages": [
            {
                "role": "user",
                "content": user_input
            }
        ],
    }

    try:
        response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, data=json.dumps(payload))
        
        # Log response for debugging
        print(f"OpenRouter API Response Status Code: {response.status_code}")
        response_data = response.json()

        # Check if the response contains message content
        if "choices" in response_data and response_data["choices"]:
            return jsonify({"response": response_data["choices"][0]["message"]["content"]})
        else:
            return jsonify({"error": "Invalid response from OpenRouter API"}), 500

    except requests.exceptions.RequestException as e:
        # Log exception error
        print(f"Error: {str(e)}")
        return jsonify({"error": "Failed to contact the OpenRouter API"}), 500

if __name__ == '__main__':
    app.run(port=8080, debug=True)
