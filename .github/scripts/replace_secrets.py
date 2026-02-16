import os

def replace_secrets(file_path):
    openai_key = os.environ.get('OPENAI_KEY')
    deepgram_key = os.environ.get('DEEPGRAM_KEY')

    if not openai_key:
        print(f"Error: OPENAI_KEY environment variable not set.")
        return
    if not deepgram_key:
        print(f"Error: DEEPGRAM_KEY environment variable not set.")
        return

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content.replace('%%OPENAI_API_KEY%%', openai_key)
        new_content = new_content.replace('%%DEEPGRAM_API_KEY%%', deepgram_key)
        
        # Also handle potential URL encoded versions if any (though unlikely for these specific placeholders)
        
        if content == new_content:
            print(f"Warning: No placeholders found in {file_path}")
        else:
             with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
             print(f"Successfully replaced secrets in {file_path}")

    except FileNotFoundError:
        print(f"Error: File not found: {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    print("Starting secret replacement...")
    replace_secrets('main.js')
    replace_secrets('recipe-book.html')
    print("Finished secret replacement.")
