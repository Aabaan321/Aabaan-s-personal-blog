import os
import sys

def debug_env():
    print("--- DEBUGGING ENVIRONMENT ---")
    print(f"CWD: {os.getcwd()}")
    
    openai_key = os.environ.get('OPENAI_KEY')
    deepgram_key = os.environ.get('DEEPGRAM_KEY')
    
    if openai_key:
        print(f"OPENAI_KEY found: Yes (Length: {len(openai_key)})")
        # Check for weird characters
        if '\n' in openai_key:
            print("WARNING: OPENAI_KEY contains newlines!")
        if ' ' in openai_key:
            print("WARNING: OPENAI_KEY contains spaces!")
        if openai_key.startswith('sk-'):
            print("OPENAI_KEY starts with 'sk-' (Correct)")
        else:
            print(f"WARNING: OPENAI_KEY starts with '{openai_key[:3]}...' (Unexpected)")
    else:
        print("OPENAI_KEY found: NO")

    if deepgram_key:
        print(f"DEEPGRAM_KEY found: Yes (Length: {len(deepgram_key)})")
    else:
        print("DEEPGRAM_KEY found: NO")

    print("--- END DEBUG ---")

if __name__ == "__main__":
    debug_env()
