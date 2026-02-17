import os
import openai
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Access the OpenAI API key from environment variables
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# Set the OpenAI API key
openai.api_key = OPENAI_API_KEY

# Function to call the OpenAI API
def get_openai_response(user_input):
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",  # Or any other OpenAI model of your choice
            prompt=user_input,
            max_tokens=100
        )

        return response.choices[0].text.strip()

    except Exception as e:
        print(f"Error: {e}")
        return "An error occurred while communicating with the OpenAI API."

if __name__ == '__main__':
    user_input = input("Ask me something: ")
    print(get_openai_response(user_input))
