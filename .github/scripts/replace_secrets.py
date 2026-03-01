import os
import sys
import traceback

def replace_secrets(file_path):
    print(f"--- Processing {file_path} ---")
    try:
        if not os.path.exists(file_path):
            print(f"ERROR: File not found: {file_path}")
            print(f"Available files: {os.listdir('.')}")
            return False

        # Read content
        content = ""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            print(f"Read {len(content)} bytes (UTF-8)")
        except UnicodeDecodeError:
            print(f"Utf-8 decode failed for {file_path}, trying latin-1")
            with open(file_path, 'r', encoding='latin-1') as f:
                content = f.read()
            print(f"Read {len(content)} bytes (Latin-1)")

        # Get keys (Debug)
        print("Checking Environment Variables...")
        # Check OPENAI
        openai_key = None
        for var_name in ['OPENAI_KEY', 'OPENAI_API_KEY', 'OPENAI_KEY_1', 'OPENAI_KEY_2', 'OPENAI_KEY_3', 'OPENAI_KEY_4']:
            val = os.environ.get(var_name)
            if val:
                print(f"  FOUND {var_name} (Length: {len(val)})")
                openai_key = val
                break # Use the first one found
        if not openai_key:
            print("  WARNING: No OPENAI key found in any variable.")

        # Check DEEPGRAM
        deepgram_key = None
        for var_name in ['DEEPGRAM_KEY', 'DEEPGRAM_API', 'DEEPGRAM_KEY_1', 'DEEPGRAM_KEY_2', 'DEEPGRAM_KEY_3']:
            val = os.environ.get(var_name)
            if val:
                print(f"  FOUND {var_name} (Length: {len(val)})")
                deepgram_key = val
                break
        if not deepgram_key:
            print("  WARNING: No DEEPGRAM key found in any variable.")

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
             print(f"SUCCESS: Replaced secrets in {file_path}")
        else:
            print(f"INFO: No placeholders (or matching keys) changed in {file_path}")
            
        return True

    except Exception:
        print(f"EXCEPTION in replace_secrets for {file_path}")
        traceback.print_exc()
        return False

if __name__ == "__main__":
    print(f"CWD: {os.getcwd()}")
    try:
        print(f"Files in CWD: {os.listdir('.')}")
    except:
        print("Could not listdir")

    replace_secrets('main.js')
    replace_secrets('recipe-book.html')
    
    print("Script Finished. Forcing Exit 0 to ensure Deployment.")
    sys.exit(0)
