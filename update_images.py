import re

path = 'C:/Users/aabaa/.gemini/antigravity/playground/obsidian-meteorite/recipe-book.html'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

images_map = {
    'Butter Chicken (Fusion)': 'recipe pictures/Chicken-butter Masala-scaled.jpg',
    'Pan-Seared Lamb Chops': 'recipe pictures/Pan-Seared-Lamb-Chops-.jpg',
    'The Perfect Pan-Seared Steak': 'recipe pictures/Pan-SearedSteak.jpg',
    'Tandoori Fried Chicken': 'recipe pictures/Tandoori-Chicken-Recipe.jpg',
    'Beef Wellington': 'recipe pictures/beef wellington.jpg',
    'Breaded Fried Shrimp': 'recipe pictures/breaded fried shrimps.jpg',
    'Buffalo Chicken Wings': 'recipe pictures/buffalo wings.jpg',
    'Homemade Chicken Nuggets': 'recipe pictures/chacken nuggets.jpg',
    'Golden Cheese Sticks': 'recipe pictures/chees stickes.jpg',
    'Creamy Alfredo White Sauce Pasta': 'recipe pictures/chicken alfredo.jpg',
    'Classic Chicken Parmesan': 'recipe pictures/chicken parmazone.jfif',
    'Crispy Fried Chicken Tenders': 'recipe pictures/chicken tenders.jpg',
    'Molten Chocolate Lava Cake': 'recipe pictures/chocolate lava cake.jfif',
    'Creamy Chicken Corn Soup': 'recipe pictures/corn soup.webp',
    'Classic Fried Chicken': 'recipe pictures/fried chicken.jpg',
    'Soft Garlic Naan': 'recipe pictures/garlic naan.jfif',
    'Hearty Meat Lasagna': 'recipe pictures/lasagna.jfif',
    'Italian-Style Margherita Pizza': 'recipe pictures/margherita pizza.avif',
    'Fluffy Classic Mashed Potatoes': 'recipe pictures/mashed potatoes.jfif',
    'Classic New York Cheesecake': 'recipe pictures/new-york-style-cheesecake-square.jpg',
    'Classic Onion Rings': 'recipe pictures/onion rings.jfif',
    'Classic Pepperoni Pizza': 'recipe pictures/pepperoni pizza.jfif',
    'Pistachio-Crusted Rack of Lamb': 'recipe pictures/pistachio crusted lamb.jfif',
    'Classic Tiramisu': 'recipe pictures/tiramisu.jpg',
    'Rich & Creamy Tomato Risotto': 'recipe pictures/tomato risotto.jfif'
}

for title, img_path in images_map.items():
    # Regex to find title followed by img attribute and replace the img value
    pattern = r"(title:\s*'" + re.escape(title) + r"',\s*img:\s*)'[^']+'"
    replacement = r"\g<1>'" + img_path + "'"
    text = re.sub(pattern, replacement, text, count=1)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated images in recipe-book.html')
