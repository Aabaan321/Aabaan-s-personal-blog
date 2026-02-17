import os
import sys

def find_key_in_env(partial_name):
    # Search for any env var containing the partial name (case insensitive)
    for key, val in os.environ.items():
        if partial_name.upper() in key.upper():
            return val
    return None

def replace_secrets(file_path):
    print(f"Processing {file_path}...")
    
    if not os.path.exists(file_path):
        print(f"Warning: File not found: {file_path}")
        return

    # Try to find keys even if mapped incorrectly
    openai_key = os.environ.get('OPENAI_KEY') or find_key_in_env('OPENAI')
    deepgram_key = os.environ.get('DEEPGRAM_KEY') or find_key_in_env('DEEPGRAM')

    if not openai_key:
        print(f"WARNING: Could not find any OPENAI key in environment variables!")
    else:
        print(f"Found OPENAI key (length: {len(openai_key)})")

    if not deepgram_key:
        print(f"WARNING: Could not find any DEEPGRAM key in environment variables!")
    else:
        print(f"Found DEEPGRAM key (length: {len(deepgram_key)})")

    try:
        # Read content
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            with open(file_path, 'r', encoding='latin-1') as f:
                content = f.read()

        # Perform replacement if keys exist
        new_content = content
        if openai_key:
            new_content = new_content.replace('%%OPENAI_API_KEY%%', openai_key)
        if deepgram_key:
            new_content = new_content.replace('%%DEEPGRAM_API_KEY%%', deepgram_key)
        
        if content != new_content:
             with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
             print(f"Successfully replaced secrets in {file_path}")
        else:
            print(f"No placeholders changed in {file_path}")

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        # Do not exit(1) so deployment continues

if __name__ == "__main__":
    print(f"CWD: {os.getcwd()}")
    print(f"Files: {os.listdir('.')}")
    
    # Updated to handle the new variable structure in main.js
    # Replaces '%%OPENAI_API_KEY%%' which is now part of a ternary operator
    replace_secrets('main.js')
    replace_secrets('recipe-book.html')
    print("Finished (Permissive Mode).")
