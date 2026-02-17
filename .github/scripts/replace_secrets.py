import os
import sys
import traceback

def replace_secrets(file_path):
    print(f"Processing {file_path}...")
    try:
        if not os.path.exists(file_path):
            print(f"Warning: File not found: {file_path}")
            return False # Return failure status

        # Read content
        content = ""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            print(f"Utf-8 decode failed for {file_path}, trying latin-1")
            with open(file_path, 'r', encoding='latin-1') as f:
                content = f.read()

        # Get keys from potentially multiple env vars
        openai_key = (
            os.environ.get('OPENAI_KEY') or 
            os.environ.get('OPENAI_API_KEY') or 
            os.environ.get('OPENAI_KEY_1') or 
            os.environ.get('OPENAI_KEY_2') or 
            os.environ.get('OPENAI_KEY_3') or 
            os.environ.get('OPENAI_KEY_4')
        )
        deepgram_key = (
            os.environ.get('DEEPGRAM_KEY') or 
            os.environ.get('DEEPGRAM_API') or 
            os.environ.get('DEEPGRAM_KEY_1') or 
            os.environ.get('DEEPGRAM_KEY_2') or 
            os.environ.get('DEEPGRAM_KEY_3')
        )

        # Check for missing keys
        missing_keys = []
        if not openai_key: missing_keys.append("OPENAI_KEY")
        if not deepgram_key: missing_keys.append("DEEPGRAM_KEY")

        if missing_keys:
            print(f"CRITICAL: Missing environment variables: {missing_keys}")
            # Decide here: Do you want to stop if keys are missing?
            # return False 

        # Replace
        new_content = content
        if openai_key:
            new_content = new_content.replace('%%OPENAI_API_KEY%%', openai_key)
        if deepgram_key:
            new_content = new_content.replace('%%DEEPGRAM_API_KEY%%', deepgram_key)
        
        # Write back
        if content != new_content:
             with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
             print(f"Successfully replaced secrets in {file_path}")
        else:
            print(f"No placeholders changed in {file_path}")
            
        return True

    except Exception:
        print(f"FAILED to process {file_path}")
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = True
    try:
        print(f"CWD: {os.getcwd()}")
        
        # Track success of each operation
        if not replace_secrets('main.js'): success = False
        if not replace_secrets('recipe-book.html'): success = False
        
        print("Finished.")
    except Exception:
        print("CRITICAL SCRIPT FAILURE")
        traceback.print_exc()
        success = False
    
    # Exit with error code if something failed, so the build stops
    sys.exit(0 if success else 1)
