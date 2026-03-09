import re

path = 'C:/Users/aabaa/.gemini/antigravity/playground/obsidian-meteorite/recipe-book.html'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
matches = re.findall(r"title:\s*'([^']+)'", text)
for m in matches:
    print('- ' + m)
