import re

path = 'C:/Users/aabaa/.gemini/antigravity/playground/obsidian-meteorite/recipe-book.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    r"cat: 'Ch \d+: Appetizers'": r"cat: 'Appetizers'",
    r"cat: 'Ch \d+: Beef & Lamb'": r"cat: 'Mains'",
    r"cat: 'Ch \d+: Mains'": r"cat: 'Mains'",
    r"cat: 'Ch \d+: Chicken & Pork'": r"cat: 'Mains'",
    r"cat: 'Ch \d+: Pasta & Rice'": r"cat: 'Mains'",
    r"cat: 'Ch \d+: Pizzas & Sides'": r"cat: 'Sides & Bread'",
    r"cat: 'Ch \d+: Sauces'": r"cat: 'Sauces & Jams'",
    r"cat: 'Ch \d+: Desserts'": r"cat: 'Desserts'"
}

for old, new in replacements.items():
    content = re.sub(old, new, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Categories updated successfully.')
