import os
import sys

def replace_secrets(file_path):
    print(f"Processing {file_path}...")
    
    # Check if file exists
    if not os.path.exists(file_path):
        print(f"Error: File not found: {file_path}")
        # List files in current directory to help debug
        print(f"Current directory contents: {os.listdir('.')}")
        sys.exit(1)

    # Get secrets
    openai_key = os.environ.get('OPENAI_KEY')
    deepgram_key = os.environ.get('DEEPGRAM_KEY')

    if not openai_key:
        print(f"Error: OPENAI_KEY environment variable is empty/missing.")
        sys.exit(1)
    if not deepgram_key:
        print(f"Error: DEEPGRAM_KEY environment variable is empty/missing.")
        sys.exit(1)

    try:
        # Try reading with utf-8, fallback to latin-1 if encoding fails
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            print(f"Warning: UTF-8 decode failed for {file_path}, trying latin-1...")
            with open(file_path, 'r', encoding='latin-1') as f:
                content = f.read()

        # Perform replacement
        new_content = content.replace('%%OPENAI_API_KEY%%', openai_key)
        new_content = new_content.replace('%%DEEPGRAM_API_KEY%%', deepgram_key)
        
        # Verify replacement
        if '%%OPENAI_API_KEY%%' in new_content:
             print(f"Error: Placeholder %%OPENAI_API_KEY%% still present in {file_path} after replacement!")
             sys.exit(1)

        if content == new_content:
            print(f"Warning: No changes made to {file_path}. Placeholders might be missing.")
        else:
             with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
             print(f"Successfully replaced secrets in {file_path}")

    except Exception as e:
        print(f"Critical Error processing {file_path}: {e}")
        sys.exit(1)

if __name__ == "__main__":
    print(f"Current Working Directory: {os.getcwd()}")
    print("Starting secret replacement...")
    replace_secrets('main.js')
    replace_secrets('recipe-book.html')
    print("Finished secret replacement.")
