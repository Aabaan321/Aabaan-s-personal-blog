const recipes = [

    // CHAPTER 1: Appetizers
    {
        id: 'buffalo-wings', cat: 'Appetizers', title: 'Buffalo Chicken Wings',
        img: 'recipe pictures/buffalo wings.jpg',
        intro: 'The secret to legendary buffalo wings lies in three critical elements: bone-dry skin before coating, precise oil temperature for maximum crispiness, and the perfect sauce ratio that coats without making wings soggy. This technique produces wings with an audibly crispy exterior that shatters with each bite.',
        outcome: 'Perfect buffalo wings have a deep golden-brown, crispy exterior that audibly crunches when bitten. The sauce should glisten without pooling on the plate, and the meat should be juicy and easily pull away from the bone.',
        meta: ['15m Prep', '25m Cook', '4-6 Servings'],
        ing: [
            '1 kg chicken wings, separated into flats (wingettes) and drumettes',
            '1 cup all-purpose flour (provides the structure for the crust)',
            '1 tsp paprika (adds color and subtle smokiness)',
            '1 tsp garlic powder',
            '1/2 tsp cayenne pepper (heat that builds gradually)',
            '1 tsp chilli powder',
            'Salt and black pepper to taste',
            'Vegetable oil (peanut recommended for high heat stability)',
            'Sauce: 1/2 cup hot sauce (Frank\'s RedHot is traditional)',
            'Sauce: 3 tbsp unsalted butter (melted - creates emulsion and richness)',
            'Sauce: 1/2 cup honey (balances heat with sweetness)'
        ],
        ins: [
            '<strong>1. Prepare the Wings (The Foundation of Crispiness)</strong><br>Remove wings from packaging and pat them COMPLETELY dry with paper towels. This is the single most important step—any moisture will steam the wings instead of frying them. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Professional restaurants often dry wings overnight in the refrigerator (uncovered) for maximum skin tightness.</span>',
            '<strong>2. Create the Seasoned Flour Coating</strong><br>In a large bowl, whisk together the flour, paprika, garlic powder, cayenne pepper, chilli powder, salt, and pepper. Add your dried wings to the flour mixture and toss vigorously. Let them rest on a wire rack for 10-15 minutes to hydrate the flour.',
            '<strong>3. Heat the Oil (Critical Step)</strong><br>Heat oil in a heavy-bottomed pot to exactly 180°C (350°F). Use a thermometer. At this temp, the wings cook through while developing a golden crust.',
            '<strong>4. Fry in Batches</strong><br>Carefully lower 5-6 wings into the oil. Do not overcrowd. Fry for 10-12 minutes until deep golden brown (Internal temp 74°C/165°F). Remove to a wire rack. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Listen for the sound—when the aggressive bubbling subsides to a gentle sizzle, they are nearly done.</span>',
            '<strong>5. The Signature Sauce</strong><br>Whisk together melted butter, hot sauce, and honey until emulsified and glossy. The butter helps the sauce cling.',
            '<strong>6. Toss and Serve</strong><br>Immediately toss the hot wings in the sauce. The residual heat helps the sauce adhere. Serve immediately.'
        ]
    },
    {
        id: 'fried-shrimp', cat: 'Appetizers', title: 'Breaded Fried Shrimp',
        img: 'recipe pictures/breaded fried shrimps.jpg',
        intro: 'The difference between rubbery, greasy shrimp and succulent, crispy ones is speed and the "Standard Breading Procedure". We use Panko (Japanese breadcrumbs) for a jagged, airy texture that stays crispy longer than fine crumbs.',
        outcome: 'The shrimp should stand straight when held by the tail (if left on). The coating should be jagged and golden, not oily. The bite should be an audible "crunch" followed by the snap of perfectly cooked shrimp.',
        meta: ['20m Prep', '10m Cook', '4 Servings'],
        ing: [
            '500g large shrimp (peeled and deveined, tails left on for handle)',
            '1 cup all-purpose flour (the dry anchor)',
            '2 large eggs, beaten with 1 tbsp water (the glue)',
            '1.5 cups Panko breadcrumbs (the crunch)',
            'Spices: Salt, black pepper, red chilli flakes, smoked paprika, garlic powder',
            'Neutral oil for frying'
        ],
        ins: [
            '<strong>1. The 3-Station Setup</strong><br>Set up three shallow bowls: 1) Flour mixed with spices. 2) Beaten eggs. 3) Panko breadcrumbs mixed with more spices. This "Standard Breading Procedure" ensures the coating never falls off.',
            '<strong>2. Dry and Dredge</strong><br>Pat shrimp dry. Dust in flour, shake off excess. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Shake off almost ALL the flour; you only need a microscopic layer to hold the egg.</span>',
            '<strong>3. Egg and Panko</strong><br>Dip in egg wash, then press firmly into Panko. Ensure the shrimp is fully buried in crumbs.',
            '<strong>4. Flash Fry</strong><br>Heat oil to 175°C (350°F). Fry in small batches for only 2-3 minutes. Shrimp cook incredibly fast; the moment they curl and the crust is golden, pull them out.',
            '<strong>5. Drain</strong><br>Drain on a wire rack or paper towel-lined plate to wick away excess oil immediately.'
        ]
    },
    {
        id: 'nuggets', cat: 'Appetizers', title: 'Homemade Chicken Nuggets',
        img: 'recipe pictures/chacken nuggets.jpg',
        intro: 'Forget the drive-thru. Real nuggets are about texture contrast: a flavorful, sturdy crust protecting a steamy, tender interior. We use breast meat cut against the grain for tenderness.',
        outcome: 'Uniformly golden brown. The crust should not detach from the chicken. The interior should be moist and white, not stringy.',
        meta: ['20m Prep', '15m Cook', '4 Servings'],
        ing: [
            '500g chicken breast, cut into 1-inch bite-sized chunks',
            '1 cup all-purpose flour',
            '2 large eggs, beaten',
            '1 cup dry breadcrumbs or Panko (for texture)',
            'Seasoning: Salt, pepper, paprika, garlic powder (be generous)'
        ],
        ins: [
            '<strong>1. Season the Meat Directly</strong><br>Season the chicken chunks with salt and pepper BEFORE breading. This ensures the meat itself is tasty, not just the crust.',
            '<strong>2. Standard Breading</strong><br>Coat in flour, dip in egg, roll in breadcrumbs. Press the crumbs on hard.',
            '<strong>3. Shallow Fry Technique</strong><br>Heat 1 inch of oil in a skillet (you don\'t need a deep fryer). Heat to medium-high. <span class="pro-tip"><strong>💡 Pro Tip:</strong> If the oil isn\'t hot enough, the breading will soak it up like a sponge. Test with a crumb; it should sizzle immediately.</span>',
            '<strong>4. Cook</strong><br>Fry 3-4 minutes per side. Do not constantly flip; let the crust set.'
        ]
    },
    {
        id: 'tenders', cat: 'Appetizers', title: 'Crispy Fried Chicken Tenders',
        img: 'recipe pictures/chicken tenders.jpg',
        intro: 'The "Tender" is the filet mignon of the chicken. The secret here is a buttermilk marinade, which contains enzymes and acids that break down proteins for impossible tenderness, while creating a craggy surface for the flour to cling to.',
        outcome: 'The coating should be "craggy" and uneven (that\'s a good thing!), providing maximum surface area for crunch.',
        meta: ['4h Marinate', '12m Cook', '4 Servings'],
        ing: [
            '500g chicken tenders (the tenderloin muscle)',
            '2 cups buttermilk (acidic tenderizer)',
            '1.5 cups all-purpose flour',
            '1 tbsp cornstarch (adds shatter-crispiness)',
            'Spices: Smoked paprika, salt, pepper, onion powder, garlic powder, red chilli powder'
        ],
        ins: [
            '<strong>1. The Buttermilk Soak</strong><br>Marinate tenders in buttermilk for at least 30 minutes, ideally 4 hours. This tenderizes the meat profoundly.',
            '<strong>2. The Spice Blend</strong><br>Whisk flour, cornstarch, and spices. The cornstarch inhibits gluten formation, making the crust crisp rather than tough.',
            '<strong>3. The "Drip" Technique</strong><br>Lift chicken from buttermilk, let excess drip for a second, then bury in flour. Press down. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Drizzle a little extra buttermilk into the flour bowl and mix it with your fingers to create small dough clumps. These fry up into extra-crunchy bits.</span>',
            '<strong>4. Deep Fry</strong><br>Fry at 175°C (350°F) for 5-7 minutes. Do not overload the fryer.'
        ]
    },
    {
        id: 'cheese-sticks', cat: 'Appetizers', title: 'Golden Cheese Sticks',
        img: 'recipe pictures/chees stickes.jpg',
        intro: 'The tragedy of homemade cheese sticks is "The Blowout"—when cheese leaks out before the shell cooks. The professional solution is the "Double Dip" and the "Deep Freeze".',
        outcome: 'A solid golden shell that holds its shape. When pulled apart, the cheese should stretch for feet without breaking (the "cheese pull").',
        meta: ['1h Freeze', '5m Cook', '4 Servings'],
        ing: [
            '250g block of low-moisture mozzarella (not fresh mozzarella, it\'s too watery)',
            '1 cup Italian-style breadcrumbs (pre-seasoned)',
            '1/2 cup flour',
            '2 large eggs, beaten',
            'Oil for frying'
        ],
        ins: [
            '<strong>1. Mise en Place</strong><br>Cut mozzarella into uniform sticks. Uniformity equals even cooking.',
            '<strong>2. The Double Dip (Mandatory)</strong><br>Flour -> Egg -> Breadcrumbs. Then... BACK into Egg -> BACK into Breadcrumbs. This thick armor is the only thing standing between you and a cheese explosion.',
            '<strong>3. The Deep Freeze</strong><br>Place breaded sticks on a tray and freeze for at least 1 hour. <span class="pro-tip"><strong>💡 Pro Tip:</strong> You are frying ice-cold cheese. This allows the shell to brown in the hot oil BEFORE the cheese completely liquefies and leaks.</span>',
            '<strong>4. Flash Fry</strong><br>Hot oil (180°C). Fry fast (1-2 minutes). Remove the second they turn golden.'
        ]
    },
    {
        id: 'onion-rings', cat: 'Appetizers', title: 'Classic Onion Rings',
        img: 'recipe pictures/onion rings.jfif',
        intro: 'Great onion rings require a batter that puffs up and stays crispy, not a heavy dough. We use baking powder for lift and buttermilk for tang. The contrast between the sweet, steamed onion and the savory, salty batter is key.',
        outcome: 'Puffy, golden-brown rings. The onion should bite through cleanly rather than pulling out of the batter in one long string (a sign of undercooking or tough membrane).',
        meta: ['15m Prep', '15m Cook', '4-6 Servings'],
        ing: [
            '2 large sweet onions (Vidalia or Walla Walla)',
            '1.5 cups all-purpose flour',
            '1 cup buttermilk (or club soda for an airy, tempura-style ring)',
            '1 large egg',
            '1 tsp baking powder (chemical leavener for puffiness)',
            '1 tsp salt',
            'Oil for frying'
        ],
        ins: [
            '<strong>1. Prep Onions</strong><br>Slice thick (1/2 inch). <span class="pro-tip"><strong>💡 Pro Tip:</strong> Peel the thin, papery membrane off the inside of each ring if you catch it—this prevents the "onion pull" problem.</span>',
            '<strong>2. The Batter</strong><br>Whisk flour, baking powder, and salt. Whisk in buttermilk and egg until just combined (lumps are okay).',
            '<strong>3. The Dry-Wet Method</strong><br>Heat oil to 190°C (375°F). Dredge onion in PLAIN flour first (helps batter stick), then dip in batter.',
            '<strong>4. Fry</strong><br>Drop into oil. Fry 2-3 minutes, flipping once. Drain on a wire rack to keep them crisp.'
        ]
    },
    {
        id: 'corn-soup', cat: 'Appetizers', title: 'Creamy Chicken Corn Soup',
        img: 'recipe pictures/corn soup.webp',
        intro: 'A classic comfort food that relies on the "Egg Ribbon" technique. This Chinese-style soup thickens with cornstarch and creamed corn, offering a silky texture broken up by strands of egg.',
        outcome: 'A glossy, slightly thickened broth. The egg ribbons should be delicate and floating, not clumped. The flavor is a balance of savory chicken and sweet corn.',
        meta: ['10m Prep', '25m Cook', '4 Servings'],
        ing: [
            '2 chicken breasts, cooked and shredded (poached is best for softness)',
            '1 tbsp butter',
            '1 small onion, diced',
            '2 cloves garlic, minced',
            '4 cups high-quality chicken broth',
            '1 can cream-style corn (provides the body)',
            '1 can whole kernel corn (drained, provides texture)',
            '1 egg, beaten well',
            'Sesame oil (optional finish)',
            'Fresh parsley or green onions'
        ],
        ins: [
            '<strong>1. Build the Base</strong><br>Sauté onion and garlic in butter until soft and aromatic. This builds the flavor foundation.',
            '<strong>2. Simmer</strong><br>Add broth, creamed corn, whole corn, and chicken. Simmer for 15 minutes to marry the flavors.',
            '<strong>3. The Egg Drop (Technique)</strong><br>Turn off the heat. Stir the soup in a gentle, continuous circular motion to create a whirlpool. Slowly drizzle the beaten egg into the moving soup. <span class="pro-tip"><strong>💡 Pro Tip:</strong> The heat of the soup cooks the egg instantly into thin, silky ribbons. If you dump it in, you get scrambled eggs.</span>',
            '<strong>4. Season</strong><br>Finish with salt, white pepper (for that authentic taste), and a drop of sesame oil.'
        ]
    },

    // CHAPTER 2: Beef & Lamb
    {
        id: 'wellington', cat: 'Mains', title: 'Beef Wellington',
        img: 'recipe pictures/beef wellington.jpg',
        intro: 'The Mount Everest of home cooking. Beef Wellington is a study in moisture management. The goal is a medium-rare tenderloin inside a crispy, flaky pastry shell, without the dreaded "soggy bottom". We achieve this with a barrier of crêpes and a bone-dry mushroom duxelles.',
        outcome: 'When sliced, the pastry should shatter. The cross-section should reveal distinct layers: golden pastry, green herbs/crêpe, dark mushroom duxelles, and a wall-to-wall pink center (medium-rare).',
        meta: ['1h Prep', '25m Cook', 'Special Occasion'],
        ing: [
            '750g center-cut beef tenderloin (fillet mignon), trimmed of silverskin',
            '500g puff pastry (all-butter is best), thawed but cold',
            '400g mushrooms (chestnut or cremini), finely chopped',
            '1 shallot and 2 cloves garlic, minced',
            'Fresh thyme leaves (1 tbsp)',
            '12 slices of Beef Bresaola or Beef Bacon (adds saltiness and a moisture barrier)',
            'Dijon mustard (for brushing the beef)',
            'Egg wash: 2 egg yolks beaten with 1 tsp water',
            'Salt and freshly ground black pepper'
        ],
        ins: [
            '<strong>1. The Sear</strong><br>Season beef heavily. Sear in a screaming hot pan with oil for 1 minute per side until brown. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Do not cook it; just color it. Remove and brush immediately with Dijon mustard while hot (pores are open). Let it cool completely.</span>',
            '<strong>2. The Duxelles (Moisture Control)</strong><br>Cook mushrooms, shallots, garlic, and thyme in a dry pan. Cook until ALL moisture has evaporated and the mixture looks like a dark paste. This prevents a soggy pastry.',
            '<strong>3. The Assembly Layer</strong><br>Lay out a large sheet of plastic wrap. Arrange bresaola slices in a rectangle. Spread the mushroom duxelles thinly over the slices. Place the cooled beef in the center.',
            '<strong>4. The Tight Roll</strong><br>Use the plastic wrap to roll the bresaola/mushroom mix tightly around the beef. Twist the ends like a candy wrapper to compress it into a log. Chill for 15 mins to set shape.',
            '<strong>5. Pastry Encasement</strong><br>Roll out puff pastry. Unwrap the beef log and place it in the center. Brush pastry edges with egg wash. Roll up tight, seal seams, and trim excess. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Chill the entire Wellington again for 15 mins. Cold pastry hits hot oven = maximum puff.</span>',
            '<strong>6. Bake</strong><br>Brush with egg wash. Score decorative patterns. Bake at 200°C (400°F) for 20-25 mins until golden. Internal temp should be 52°C (125°F) for medium-rare. Rest 10 mins before slicing.'
        ]
    },
    {
        id: 'lamb-rack', cat: 'Mains', title: 'Pistachio-Crusted Rack of Lamb',
        img: 'recipe pictures/pistachio crusted lamb.jfif',
        intro: 'A rack of lamb is elegant, but a pistachio crust adds texture and a visual "wow" factor. We sear the meat first to render fat, then roast it gently. The mustard acts as the glue for the crust.',
        outcome: 'The meat should be blushing pink (medium-rare) with a vibrant green, crunchy crust that stays attached when sliced.',
        meta: ['20m Prep', '30m Cook', '4 Servings'],
        ing: [
            '2 racks of lamb (frenched - bones scraped clean)',
            'Salt and pepper',
            '2 tbsp Dijon mustard (the glue)',
            'Crust: 1/2 cup shelled pistachios (unsalted)',
            'Crust: 1/2 cup Panko breadcrumbs',
            'Crust: 2 cloves garlic, fresh parsley, 2 tbsp olive oil'
        ],
        ins: [
            '<strong>1. Fat Rendering</strong><br>Score the fat cap in a diamond pattern. Season well. Sear fat-side down in a cold pan, bringing heat up slowly to render the fat (5-8 mins). Flip and sear the bottom briefly.',
            '<strong>2. The Glue</strong><br>Remove lamb from heat. Brush the rendered fat side generously with Dijon mustard.',
            '<strong>3. The Crust</strong><br>Pulse pistachios, breadcrumbs, herbs, and oil in a processor until it looks like wet sand. Press this mixture firmly onto the mustard-slathered lamb.',
            '<strong>4. Roast</strong><br>Roast at 200°C (400°F) for 15-20 mins. Pull at 52°C (125°F) internal temp.',
            '<strong>5. Rest</strong><br>Rest for 10 minutes. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Carver between the bones. Do not saw back and forth; use long, clean strokes to keep the crust intact.</span>'
        ]
    },
    {
        id: 'lamb-chops', cat: 'Mains', title: 'Pan-Seared Lamb Chops',
        img: 'recipe pictures/Pan-Seared-Lamb-Chops-.jpg',
        intro: 'Lamb loin chops are like mini T-bone steaks. They cook fast and love garlic and rosemary. The key is the "Butter Baste" (Arrosé) technique at the end to cook the inside gently while flavoring the crust.',
        outcome: 'Deep brown crust, juicy pink center. The fat strip on the edge should be rendered and crisp, not chewy.',
        meta: ['35m Prep', '10m Cook', '2-4 Servings'],
        ing: [
            '8 lamb loin chops (at least 1 inch thick)',
            'Salt and freshly ground black pepper',
            '2 cloves garlic, smashed but whole',
            'Fresh rosemary and thyme sprigs',
            '3 tbsp unsalted butter (cold)',
            '1 tbsp olive oil'
        ],
        ins: [
            '<strong>1. Tempering</strong><br>Take chops out of fridge 30 mins before cooking. Cold meat cooks unevenly.',
            '<strong>2. The Sear</strong><br>Get skillet smoking hot with oil. Lay chops in. Press down. Sear 3-4 mins undisturbed until a hard crust forms.',
            '<strong>3. Render the Edge</strong><br>Hold chops with tongs and press the fatty edge into the pan to crisp it up.',
            '<strong>4. The Butter Baste (Arrosé)</strong><br>Flip chops. Toss in butter, garlic, and herbs. Tilt the pan so butter pools. Spoon foaming butter over the meat repeatedly for 2-3 mins. <span class="pro-tip"><strong>💡 Pro Tip:</strong> This basting cooks the meat from the top down with hot, flavored fat.</span>'
        ]
    },
    {
        id: 'steak', cat: 'Mains', title: 'The Perfect Pan-Seared Steak',
        img: 'recipe pictures/Pan-SearedSteak.jpg',
        intro: 'You don\'t need a grill for steakhouse quality. You need a cast-iron skillet and the courage to use high heat. We start with oil to sear, then finish with butter to flavor.',
        outcome: 'Wall-to-wall medium-rare (no grey band). A dark mahogany crust that is salty and savory.',
        meta: ['5m Prep', '10m Cook', '2 Servings'],
        ing: [
            '2 thick-cut Ribeye or New York Strip steaks (1.5 inches thick)',
            'Kosher salt (large grains adhere better)',
            'Coarse black pepper',
            '2 tbsp high-smoke point oil (Avocado or Grapeseed)',
            '3 tbsp unsalted butter',
            '3 cloves garlic, crushed',
            'Fresh thyme or rosemary'
        ],
        ins: [
            '<strong>1. Dry and Season</strong><br>Pat steak BONE DRY. Moisture is the enemy of the crust. Season aggressively with salt and pepper on all sides.',
            '<strong>2. Smoke Point</strong><br>Heat cast-iron until it literally smokes. Add oil. Lay steak away from you to avoid splash.',
            '<strong>3. The Crust</strong><br>Flip every minute (method: frequent flipping cooks more evenly than once). aim for a deep brown char.',
            '<strong>4. Butter Baste</strong><br>When steak is 10 degrees from target temp, kill the heat. Add butter/herbs. Baste for the final minute.',
            '<strong>5. The Rest</strong><br>Rest for 10 minutes on a warm plate. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Cutting early spills the juices. Resting lets the fibers relax and reabsorb liquid.</span>'
        ]
    },

    {
        id: 'lasagna', cat: 'Mains', title: 'Hearty Meat Lasagna',
        img: 'recipe pictures/lasagna.jfif',
        intro: 'Lasagna is about structural integrity and flavor balance. We use a rich Bolognese (meat sauce) and a creamy cheese Binder. The key is letting it rest so it slices like a cake, not a soup.',
        outcome: 'Distinct layers defined by pasta. The top should be blistered cheese. It should hold its square shape on the plate.',
        meta: ['40m Prep', '1h Cook', '8 Servings'],
        ing: [
            'Meat Sauce: 500g ground beef, 1 onion, 2 cloves garlic, 1 jar high-quality marinara, 1 tsp Italian herbs',
            'Cheese Filling: 400g ricotta (drained), 1 egg (binder), 1/2 cup parmesan, fresh parsley, pinch of nutmeg',
            'Pasta: Oven-ready lasagna sheets (or boiled noodles)',
            '2 cups shredded mozzarella cheese'
        ],
        ins: [
            '<strong>1. The Sauce</strong><br>Brown beef heavily. Add veg, cook down. Add marinara. Simmer 20 mins to thicken. <span class="pro-tip"><strong>💡 Pro Tip:</strong> A watery sauce makes a watery lasagna. Reduce it well.</span>',
            '<strong>2. The Cheese Binder</strong><br>Mix ricotta, egg, parmesan, and herbs. The egg ensures this layer sets firmly.',
            '<strong>3. The Architecture</strong><br>Small spoon of sauce on bottom (prevents sticking). Layer: Noodles -> Cheese Mix -> Meat Sauce -> Mozzarella. Repeat 3-4 times.',
            '<strong>4. Bake</strong><br>Cover with foil (prevents burning). Bake 25 mins at 190°C. Uncover. Bake 20 mins until bubbly.',
            '<strong>5. The Patience Test</strong><br>Let it rest for at least 15-20 minutes. If you cut it hot, it collapses. If you wait, it sets perfect squares.'
        ]
    },
    {
        id: 'birria', cat: 'Birria', title: 'Authentic Mexican Beef Birria',
        img: 'recipe pictures/Authentic Mexican Beef Birria.webp',
        intro: 'A deeply flavorful, traditional Mexican stew. The secret is toasting a blend of dried chiles for the base and deeply searing the meat to build a rich, complex consommé. Perfect served as a stew or used for legendary Quesabirria tacos.',
        outcome: 'The meat should be fall-apart tender, swimming in a deep red, slightly oily, rich, and mildly spicy consommé.',
        meta: ['45m Prep', '4h Cook', '8 Servings'],
        ing: [
            'Meat: 900g beef chuck roast (cubed), 450g bone-in short ribs, 450g oxtail',
            'Chiles (Crucial): 5 Guajillo, 4 Ancho, 1-2 Pasilla, 2-3 Chile de árbol',
            'Aromatics & Base: 1 medium onion, 10 cloves garlic, 1 tbsp tomato paste',
            'Spices: 1 cinnamon stick, 3 bay leaves, 1 tsp peppercorns, 1 tsp coriander seeds, 1/2 tsp cumin seeds, 2 whole cloves, 1/2 tsp Mexican oregano',
            'Liquids: 2-2.5 L rich beef stock, 1 tbsp white vinegar',
            '2 tbsp neutral oil and salt to taste'
        ],
        ins: [
            '<strong>1. Toast and Soften Chiles</strong><br>Heat a dry pan on medium-low. Toast all chiles for 20–30 seconds per side until fragrant but not burnt. Transfer to a bowl, cover with hot water, and soak 15–20 minutes until soft.',
            '<strong>2. Deeply Sear the Meat (Most Important)</strong><br>Pat meat dry and season generously with salt. Heat 2 tbsp oil in a heavy Dutch oven on medium-high. Sear meat in batches until a very dark brown crust forms (3-4 mins per side). Do not rush. Remove meat; leave the dark fond in the pot.',
            '<strong>3. Aromatics</strong><br>In the same pot with the browned bits, add chopped onion and cook 4–5 mins. Add tomato paste, cook until darkened. Add garlic and cook 30 seconds.',
            '<strong>4. Blend Chile Sauce</strong><br>In a blender, combine softened chiles, 1.5–2 cups beef stock, the cooked aromatics, coriander seeds, cumin seeds, and oregano. Blend until very smooth. Strain through a fine sieve into the pot.',
            '<strong>5. Build the Birria</strong><br>Add the strained chile sauce, remaining beef stock, cinnamon stick, bay leaves, peppercorns, cloves, and vinegar to the pot. Stir well. Return the seared meat to the pot. The liquid should reach about ¾ up the meat.',
            '<strong>6. Slow Braise</strong><br>Bring to a gentle simmer. Cover and cook on very low heat for 3.5 to 4 hours, until the meat falls apart easily.',
            '<strong>7. Shred and Finish</strong><br>Remove meat, discard bones, and shred with forks. Return a portion of the meat to the broth. Taste the consommé and adjust salt and vinegar. It should be deep red, rich, and mildly spicy.'
        ]
    },

    // CHAPTER 3: Chicken
    {
        id: 'butter-chicken', cat: 'Ch 3: Chicken', title: 'Butter Chicken (Fusion)',
        img: 'recipe pictures/Chicken-butter Masala-scaled.jpg',
        intro: 'This is not the overly sweet, bright red restaurant version. This is the authentic "Murgh Makhani" with a smoky undertone. The secret is grilling the chicken first to get a char (mimicking the Tandoor) before simmering it in the silky, tomato-fenugreek sauce.',
        outcome: 'A velvet-smooth, orange-gold sauce that clings to the spoon. The chicken should have charred edges but remain juicy. The smoky aroma of Kasuri Methi (dried fenugreek) should be prominent.',
        meta: ['4h Marinate', '30m Cook', '4-6 Servings'],
        ing: [
            '750g boneless, skinless chicken thighs (never breast; thighs stay juicy)',
            'Marinade: 1 cup yogurt, 2 tbsp ginger-garlic paste, 1 tbsp lemon juice, spices',
            'Spices: 2 tsp garam masala, 1 tsp turmeric, 1 tsp kashmiri chilli (color), salt',
            'Gravy: 500g fresh tomatoes (blended), 2 tbsp butter, 1 onion (finely chopped)',
            'Gravy Finish: 1/2 cup heavy cream, 1 tbsp sugar, 1 tbsp dried fenugreek leaves (Kasuri Methi)'
        ],
        ins: [
            '<strong>1. The Marination</strong><br>Mix chicken with yogurt, lemon, and spices. The lactic acid and lemon tenderize the meat. Marinate 4 hours to overnight.',
            '<strong>2. The Char (Tandoor Hack)</strong><br>Thread chicken on skewers. Grill on high heat or broil in oven until blackened in spots. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Do not cook it 100% through; it finishes in the sauce. The char adds the essential smoky flavor.</span>',
            '<strong>3. The Base</strong><br>Sauté onions in butter until golden. Add ginger-garlic paste. Add fresh tomato puree and cook down until oil separates from the masala (bhunoo).',
            '<strong>4. The Makhani (Buttery) Finish</strong><br>Add the charred chicken. Stir in cream and sugar. Crush fenugreek leaves between palms (releases oils) and sprinkle on top. Simmer 5 mins.'
        ]
    },
    {
        id: 'fried-chicken', cat: 'Ch 3: Chicken', title: 'Classic Fried Chicken',
        img: 'recipe pictures/fried chicken.jpg',
        intro: 'Southern-style fried chicken relies on a brine for moisture and a seasoned flour dredge for crust. We use the "6-10-14" method: 6 mins frying, 10 mins resting, 14 spices.',
        outcome: 'A dark golden brown crust that shatters. The meat closest to the bone should be fully cooked but dripping with clear juices.',
        meta: ['1h Brine', '25m Cook', '4 Servings'],
        ing: [
            '1 whole chicken (cut into 8 pieces: 2 drum, 2 thigh, 2 breast, 2 wing)',
            'Brine: 4 cups buttermilk, 2 tbsp salt, 1 tbsp pepper, garlic/onion powder',
            'Dredge: 2 cups flour, 1/4 cup cornstarch (crispness)',
            'Spices: Paprika, garlic powder, onion powder, salt, pepper, dried herbs',
            'Peanut oil or vegetable shortening for frying'
        ],
        ins: [
            '<strong>1. The Brine</strong><br>Submerge chicken in seasoned buttermilk for 1-4 hours. This seasons the meat to the bone.',
            '<strong>2. The Dredge</strong><br>Lift chicken, shake off excess liquid (but leave it damp). Press HARD into the flour mix. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Let the breaded chicken sit on a rack for 15 mins. The flour will absorb the moisture and become "sticky". This prevents the coating from falling off in the oil.</span>',
            '<strong>3. Temperature Control</strong><br>Heat oil to 165°C (325°F) - lower than wings because bone-in pieces take longer to cook.',
            '<strong>4. The Fry</strong><br>Fry dark meat (legs/thighs) for 12-14 mins. Fry white meat (breasts/wings) for 10-12 mins. Flip once.'
        ]
    },
    {
        id: 'tandoori', cat: 'Ch 3: Chicken', title: 'Tandoori Fried Chicken',
        img: 'recipe pictures/Tandoori-Chicken-Recipe.jpg',
        intro: 'A hybrid masterpiece. All the spices of India meets the crunch of the American South. The yogurt marinade ensures the chicken is tangy and tender, while the spiced flour creates a crust that bursts with flavor.',
        outcome: 'A vibrant red-orange crust. The flavor profile is explosive: cumin, coriander, and chilli hits first, followed by the sour tang of the yogurt marinade.',
        meta: ['4h Marinate', '20m Cook', '4 Servings'],
        ing: [
            '1 kg bone-in chicken pieces (scored deeply to let marinade penetrate)',
            'Marinade: 1 cup yogurt, 3 tbsp Tandoori Masala, 2 tbsp ginger-garlic, lemon juice',
            'Coating: 2 cups flour, 1 tbsp cornstarch, 1 tsp salt, 1 tsp garam masala',
            'Oil for deep frying'
        ],
        ins: [
            '<strong>1. Deep Scores</strong><br>Make 2-3 deep slashes in the thickest part of each piece. Rub the marinade into these cuts.',
            '<strong>2. The Yogurt Barrier</strong><br>Unlike buttermilk, yogurt is thick. When dredging, leave a visible layer of yogurt on the chicken. It mixes with the flour to create a thicker, crunchier "batter-like" crust.',
            '<strong>3. Fry</strong><br>Fry at 170°C (340°F). The yogurt sugars can burn fast, so manage the heat carefully. Rotate frequently.'
        ]
    },
    {
        id: 'parm', cat: 'Ch 3: Chicken', title: 'Classic Chicken Parmesan',
        img: 'recipe pictures/chicken parmazone.jfif',
        intro: 'Chicken Parm is often ruined by sogginess. Our professional approach builds it structurally: A crispy cutlet that STAYS crispy even under sauce, by using a "reservation" of sauce and high-heat broiling.',
        outcome: 'The breading under the cheese should still maximize crunch. The cheese should be spotted brown (leopard spots).',
        meta: ['20m Prep', '25m Cook', '4 Servings'],
        ing: [
            '4 chicken breasts (pounded thin to 1/2 inch)',
            'Breading: Flour -> Egg -> Panko/Parmesan Mix',
            '1.5 cups high-quality Marinara (thick, not watery)',
            '200g Low-Moisture Mozzarella (shredded)',
            'Fresh basil for finish'
        ],
        ins: [
            '<strong>1. The Pound</strong><br>Pound chicken even. Season well.',
            '<strong>2. The Crust</strong><br>Bread with Panko mixed with grated Parm. Fry in shallow oil until crispy and golden. Drain well.',
            '<strong>3. The "Anti-Sog" Assembly</strong><br>Place cutlets on baking sheet. Spoon a SMALL amount of sauce in the center (leave edges dry). Pile cheese high. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Serve extra sauce on the side or under the pasta, not drowning the chicken.</span>',
            '<strong>4. The Broil</strong><br>Bake/Broil at high heat just until cheese melts and bubbles. Finish with fresh basil.'
        ]
    },
    {
        id: 'chick-burger', cat: 'Ch 3: Chicken', title: 'The Fried Chicken Burger',
        img: 'Chicken Burger',
        intro: 'The ultimate sandwich. A boneless thigh (never breast) marinated, double-dredged for maximum cragginess, and served on a soft brioche that yields to the crunch.',
        outcome: 'The sandwich needs to hold together. The crunch should be audible across the room. The ratio of bun-to-meat-to-sauce must be balanced.',
        meta: ['1h Brine', '15m Cook', '6 Servings'],
        ing: [
            '6 boneless, skinless chicken thighs (trimmed)',
            'Brine: Buttermilk + Pickle Juice (secret weapon)',
            'Dredge: Flour + Cornstarch + Paprika/Garlic/Onion/Pepper',
            'Brioche Buns (toasted with butter)',
            'Pickles, Lettuce, Sauce (See Ch 6)'
        ],
        ins: [
            '<strong>1. Flatten</strong><br>Lightly pound thighs so they cook evenly and fit the bun.',
            '<strong>2. The Crag</strong><br>Dredge: Buttermilk -> Flour -> Buttermilk -> Flour. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Press the flour in HARD. You want loose bits of dough hanging off—these become the crispy "cornflakes" later.</span>',
            '<strong>3. Fry</strong><br>Fry 175°C (350°F) for 6-8 mins. Thighs are forgiving; they won\'t dry out if you go a minute over.',
            '<strong>4. Build</strong><br>Toast bun (mandatory). Sauce bottom. Chicken. Slaw/Lettuce. Pickles. Sauce top. Cap it.'
        ]
    },

    // CHAPTER 4: Seafood & Pasta
    {
        id: 'salmon', cat: 'Ch 4: Seafood & Pasta', title: 'Perfect Crispy Skin Salmon',
        img: 'Crispy Skin Salmon',
        intro: 'Most home cooks fear fish skin, so they discard the tastiest, healthiest part. The professional secret is "The Press". You must physically hold the fish down when it hits the pan to prevent curling, ensuring 100% skin contact for glass-like crispiness.',
        outcome: 'Skin that sounds like a cracker when tapped. Flesh that is translucent in the center (medium) and flakes in large petals.',
        meta: ['5m Prep', '10m Cook', '2 Servings'],
        ing: [
            '2 salmon fillets (170g each), center-cut, skin-on',
            '1 tbsp olive oil (not butter, butter burns before the skin crisps)',
            'Coarse salt (Kosher or Maldon) and black pepper',
            'Lemon wedges (acid cuts the fat)'
        ],
        ins: [
            '<strong>1. The Scrape</strong><br>Use a knife to scrape moisture off the skin. Then pat bone dry. Moisture = Steam = Soggy Skin.',
            '<strong>2. Cold Pan Start (Optional Hack)</strong><br>For beginners: Place fish skin-down in a COLD non-stick pan. Turn heat to medium-high. The fat renders slowly as the pan heats, guaranteeing crispiness.',
            '<strong>3. Hot Pan Method (Classic)</strong><br>Heat oil until shimmering. Place fish skin-down. IMMEDIATELY press firmly with a spatula for 10 seconds. This stops the skin from contracting and curling.',
            '<strong>4. The 90% Rule</strong><br>Cook 90% of the way on the skin side (5-6 mins). Watch the color change up the side of the fillet. Flip only for the final 30 seconds to kiss the top.'
        ]
    },
    {
        id: 'garlic-shrimp', cat: 'Ch 4: Seafood & Pasta', title: 'Classic Garlic Shrimp',
        img: 'Garlic Shrimp',
        intro: 'This is an exercise in heat management. Garlic burns in seconds. Shrimp turns to rubber in minutes. We use a "Cold Oil Infusion" start or separate the cooking times to ensure sweet, soft garlic and snappy shrimp.',
        outcome: 'Shrimp should snap, not chew. The sauce should be an emulsion of wine/lemon/butter, not separated oil.',
        meta: ['10m Prep', '10m Cook', '4 Servings'],
        ing: [
            '500g large shrimp (peeled, deveined)',
            '4 tbsp butter (cold, cubed)',
            '4 tbsp olive oil',
            '8 cloves garlic (sliced thin, not minced, for sweeter flavor)',
            '1/2 cup chicken broth (for deglazing)',
            'Juice of 1 lemon'
        ],
        ins: [
            '<strong>1. Scent the Oil</strong><br>Heat olive oil and garlic slices over LOW heat. Let garlic sizzle gently until golden. Remove garlic chips and save for garnish (prevents burning).',
            '<strong>2. High Heat Sear</strong><br>Crank heat to high. Sear shrimp in the garlic oil. 1 min per side. Remove shrimp.',
            '<strong>3. Pan Sauce</strong><br>Deglaze with broth. Reduce by half. Turn off heat. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Whisk in the COLD cubed butter. This creates a creamy emulsion (Monte au Beurre).</span>',
            '<strong>4. Combine</strong><br>Toss shrimp and garlic chips back in. Finish with lemon.'
        ]
    },
    {
        id: 'alfredo', cat: 'Ch 4: Seafood & Pasta', title: 'Creamy Alfredo White Sauce Pasta',
        img: 'recipe pictures/chicken alfredo.jpg',
        intro: 'Authentic Roman Alfredo is just butter and Parmigiano. The American version adds cream. We do a hybrid: using starchy pasta water to emulsify the heavy cream and cheese into a sauce that coats the noodles rather than sliding off.',
        outcome: 'Noodles coated in a thick, ivory glaze. No pools of cream at the bottom of the bowl.',
        meta: ['5m Prep', '15m Cook', '4 Servings'],
        ing: [
            '450g fettuccine (bronze-die cut holds sauce best)',
            '1/2 cup butter',
            '1.5 cups heavy cream (don\'t use milk, it splits)',
            '2 cups Parmigiano-Reggiano (freshly grated is non-negotiable; pre-grated has anti-caking agents)',
            'Nutmeg (freshly grated)'
        ],
        ins: [
            '<strong>1. Water is an Ingredient</strong><br>Boil pasta in salted water. Reserve 1 cup of starchy water before draining.',
            '<strong>2. The Simmer</strong><br>Melt butter. Add cream. Simmer 5 mins to reduce and thicken slightly. Add garlic if you must (it\'s not traditional, but tasty).',
            '<strong>3. The Marriage</strong><br>Turn heat to LOW. Add cooked pasta to the sauce. Sprinkle cheese in handfuls, tossing constantly with tongs.',
            '<strong>4. Emulsify</strong><br>Splash in pasta water as needed. The starch glues the oil and water together. Finish with nutmeg.'
        ]
    },
    {
        id: 'risotto', cat: 'Ch 4: Seafood & Pasta', title: 'Rich & Creamy Tomato Risotto',
        img: 'recipe pictures/tomato risotto.jfif',
        intro: 'Risotto is not a rice dish; it is a technique. We irritate the rice grains by constant agitation to release amylopectin (starch), creating a creamy sauce without adding cream. The "Mantecatura" (final beating) is the most critical step.',
        outcome: 'The "All\'onda" wave: When you tilt the plate, the risotto should ripple effectively like a slow lava flow, not sit in a stiff mound.',
        meta: ['10m Prep', '35m Cook', '4 Servings'],
        ing: [
            '1.5 cups Arborio or Carnaroli rice (essential for starch)',
            '6 cups broth (kept simmering in a separate pot)',
            '1/2 cup chicken stock (for flavor)',
            '1 cup crushed San Marzano tomatoes',
            'Finish: 2 tbsp COLD butter, 1/2 cup Parmesan'
        ],
        ins: [
            '<strong>1. Tostatura (Toasting)</strong><br>Sauté shallots in oil. Add rice. Cook 2 mins until grains are hot and translucent at edges. This protects the grain integrity.',
            '<strong>2. Deglaze</strong><br>Add the 1/2 cup chicken stock. Let it evaporate completely so the rice absorbs the flavor.',
            '<strong>3. The Ladle Work</strong><br>Add hot broth one ladle at a time. Stir constantly. Wait until liquid is absorbed before adding next. This massage releases the starch.',
            '<strong>4. Mantecatura (The Magic)</strong><br>When rice is al dente, remove from heat. Rest 1 min. Add COLD butter and cheese. Beat the risotto vigorously with a wooden spoon for 2 mins. This incorporates air and emulsifies the fat for ultimate creaminess.'
        ]
    },

    // CHAPTER 5: Pizzas, Tacos & Sides
    {
        id: 'margherita', cat: 'Sides & Bread', title: 'Italian-Style Margherita Pizza',
        img: 'recipe pictures/margherita pizza.avif',
        intro: 'Neapolitan pizza is a balance of three colors: Red (tomato), White (mozzarella), and Green (basil). The secret is high heat to char the crust while keeping the center tender (soupy).',
        outcome: 'A "leopard-spotted" crust (char bubbles). The cheese should be melted but distinct puddles, not a blanket. The center should be soft.',
        meta: ['15m Prep', '10-15m Cook', '1 Pizza'],
        ing: [
            '1 ball of pizza dough (fermented 24h is best)',
            'San Marzano tomatoes (crushed by hand, seasoned with salt only)',
            'Fresh Mozzarella di Bufala or Fior di Latte (torn, not grated)',
            'Fresh basil leaves',
            'Extra Virgin Olive Oil'
        ],
        ins: [
            '<strong>1. The Heat Strategy</strong><br>Preheat oven to MAX (250°C+). If you have a pizza stone, heat it for 1 hour. No stone? Flip a baking sheet upside down.',
            '<strong>2. The Stretch</strong><br>Push air from center to rim (cornicione). Do not use a rolling pin (it crushes air pockets).',
            '<strong>3. Less is More</strong><br>Spread sauce thinly. Scatter cheese. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Too much sauce triggers a "cheese slide". Keep it light.</span>',
            '<strong>4. The Bake</strong><br>Bake 8-10 mins. Broil for the last 2 mins to char the crust spots.',
            '<strong>5. Finish</strong><br>Add fresh basil AFTER baking (or right at the end) so it doesn\'t burn. Drizzle with oil.'
        ]
    },
    {
        id: 'pepperoni', cat: 'Sides & Bread', title: 'Classic Pepperoni Pizza',
        img: 'recipe pictures/pepperoni pizza.jfif',
        intro: 'The "NY Style" slice. We want a crust that folds without cracking and pepperoni that cups up ("ronis") due to the heat.',
        outcome: 'A golden, rigid bottom crust. Pepperoni should have crispy edges and a pool of oil in the center.',
        meta: ['10m Prep', '12-15m Cook', '1 Pizza'],
        ing: [
            '1 ball of pizza dough',
            'Cooked Marinara (thicker than Neapolitan style)',
            'Low-Moisture Mozzarella (shredded, for the "cheese pull")',
            'Beef or Turkey Pepperoni slices (natural casing curls best)',
            'Dried Oregano'
        ],
        ins: [
            '<strong>1. The Base</strong><br>Stretch dough. Place on parchment (easier transfer).',
            '<strong>2. Layering</strong><br>Sauce -> Cheese (edge to edge) -> Pepperoni (plenty of it).',
            '<strong>3. Bake</strong><br>Bake at 250°C (475°F) on a hot surface/stone. Rotate halfway for even browning.',
            '<strong>4. The Rest</strong><br>Let it sit 2 mins on a wire rack. This prevents the steam from making the bottom soggy.'
        ]
    },
    {
        id: 'tacos', cat: 'Sides & Bread', title: 'Chicken Tacos',
        img: 'Chicken Tacos',
        intro: 'A taco is a delivery system for contrast: Hot meat, cold salsa, creamy guac, corn tortilla scent. Everything must be fresh.',
        outcome: 'The tortilla should be pliable and warm, not cracking. The filling should be wet enough to flavor the bite but not drip excessively.',
        meta: ['25m Prep', '20m Cook', '4 Servings'],
        ing: [
            'Chicken: Thighs rubbed with cumin, coriander, lime, ancho chilli',
            'Pico de Gallo: Riped tomatoes, white onion, cilantro, lime juice (marinated 15 mins)',
            'Guacamole: Avocado, salt, lime (keep it simple)',
            'Tortillas: Corn (authentic) or Flour (Tex-Mex)'
        ],
        ins: [
            '<strong>1. The Sear + Shred</strong><br>Sear chicken hard. Cook through. Shred with two forks. Toss the meat back in the pan juices.',
            '<strong>2. Tortilla Maintenance</strong><br>NEVER serve cold tortillas. Toast them in a dry pan until charred spots appear and they become pliable. Keep warm in a cloth.',
            '<strong>3. Assembly</strong><br>Meat first. Guac (glue). Pico on top. Fresh cilantro.',
            '<strong>4. The Lime</strong><br>Squeeze fresh lime right before biting.'
        ]
    },
    {
        id: 'quesabirria', cat: 'Birria', title: 'Quesabirria Tacos',
        img: 'recipe pictures/Quesabirria Tacos.jfif',
        intro: 'The ultimate way to enjoy leftover Birria. Corn tortillas are dipped in the bright red fat from the top of the consommé, loaded with Oaxaca cheese and shredded beef, and pan-fried until shatteringly crisp.',
        outcome: 'A deeply golden, crispy, and red-stained taco loaded with gooey cheese and tender beef. Served with a side of hot, rich consommé for dipping.',
        meta: ['10m Prep', '10m Cook', '4 Servings'],
        ing: [
            'Prepared Birria meat (shredded)',
            'Birria consommé (reserved from making Birria)',
            'Corn tortillas',
            'Oaxacan cheese (or mozzarella/Monterey Jack), shredded',
            'Finely diced white onion and chopped fresh cilantro',
            'Neutral oil (optional, if your consommé isn\'t very fatty)'
        ],
        ins: [
            '<strong>1. The Dip</strong><br>Heat a skillet or cast iron pan over medium heat. Dip a corn tortilla into the birria consommé, making sure to lightly coat it in the red broth and fat.',
            '<strong>2. Layering</strong><br>Place the dipped tortilla in the hot pan. Add a generous layer of Oaxacan cheese over the whole tortilla.',
            '<strong>3. The Meat</strong><br>Add a portion of shredded birria meat onto one half of the tortilla. Drizzle 1–2 tablespoons of consommé directly over the meat for extra moisture.',
            '<strong>4. Fold and Crisp</strong><br>Fold the tortilla in half over the meat to form a taco. Cook 2–3 minutes per side until the tortilla is crispy, the edges are slightly browned, and the cheese is melted.',
            '<strong>5. Serve</strong><br>Serve hot alongside a small bowl of hot consommé garnished with diced onion and cilantro. Dip the taco into the consommé before eating.'
        ]
    },
    {
        id: 'birria-nachos', cat: 'Birria', title: 'Birria Nachos',
        img: 'recipe pictures/Birria Nachos.webp',
        intro: 'A towering plate of crispy tortilla chips smothered in melted cheese, tender birria meat, and a drizzle of rich consommé.',
        outcome: 'Perfectly melted cheese nachos dotted with flavorful beef and finished with fresh jalapeños, onion, and cilantro.',
        meta: ['10m Prep', '7m Cook', '4 Servings'],
        ing: [
            'Tortilla chips',
            '1–1.5 cups shredded birria meat',
            '1 cup shredded cheese (Oaxaca, mozzarella, or Monterey Jack)',
            '1 fresh jalapeño, sliced',
            '1/2 cup birria consommé',
            'Mexican crema or sour cream, diced white onion, chopped cilantro, lime wedges'
        ],
        ins: [
            '<strong>1. Prep</strong><br>Preheat oven to 200°C (400°F). Spread tortilla chips evenly on a baking tray.',
            '<strong>2. Layer</strong><br>Top evenly with shredded birria meat, cheese, and sliced jalapeños.',
            '<strong>3. Bake</strong><br>Bake for 5–7 minutes until the cheese is completely melted.',
            '<strong>4. Finish</strong><br>Remove from oven. Drizzle lightly with a few spoons of consommé. Add a drizzle of crema, then sprinkle with diced onion and cilantro. Serve immediately with lime wedges.'
        ]
    },
    {
        id: 'birria-mac', cat: 'Birria', title: 'Birria Mac & Cheese',
        img: 'recipe pictures/Birria Mac & Cheese.jfif',
        intro: 'A luxurious fusion of creamy, cheesy macaroni folded together with shredded birria and rich consommé.',
        outcome: 'A deeply savory, creamy pasta dish with pockets of tender beef and a vibrant, spiced flavor profile.',
        meta: ['10m Prep', '15m Cook', '4 Servings'],
        ing: [
            '250g macaroni pasta',
            '1 cup shredded birria meat',
            '1 cup reduced birria consommé',
            '1.5 cups cheddar or Oaxaca cheese',
            '1 cup milk',
            '1 tbsp butter, 1 tbsp flour',
            'Salt and pepper to taste'
        ],
        ins: [
            '<strong>1. Pasta</strong><br>Cook macaroni until al dente. Drain and set aside.',
            '<strong>2. The Roux</strong><br>In a saucepan, melt butter. Add flour and cook for 1 minute, stirring constantly. Slowly whisk in milk to make a creamy sauce.',
            '<strong>3. The Cheese Sauce</strong><br>Add the cheese and stir until completely melted and smooth.',
            '<strong>4. Combine</strong><br>Stir in the reduced birria consommé and shredded birria meat. Add the cooked pasta and mix well until evenly coated.',
            '<strong>5. Serve</strong><br>Serve hot, garnished optionally with fresh cilantro or chili flakes.'
        ]
    },
    {
        id: 'birria-pasta-creamy', cat: 'Birria', title: 'Creamy Birria Fusilli',
        img: 'recipe pictures/Pure Birria noodles.jfif',
        intro: 'A decadent fusion where rich, spiced birria consommé meets heavy cream and parmesan, coating every crevice of your favorite short pasta.',
        outcome: 'A silky, creamy, deeply savory pasta dish with shredded beef throughout.',
        meta: ['10m Prep', '15m Cook', '2 Servings'],
        ing: [
            '250g short pasta (fusilli, penne, or rigatoni)',
            '1 cup birria consommé',
            '1/2 cup heavy cream',
            '1 cup shredded birria meat',
            '1/2 cup freshly grated Parmesan or Grana Padano',
            'Fresh cilantro and diced white onion for garnish'
        ],
        ins: [
            '<strong>1. The Pasta</strong><br>Boil pasta in salted water until 1 minute shy of al dente. Reserve 1/2 cup pasta water and drain.',
            '<strong>2. The Base Sauce</strong><br>In a large skillet, bring the birria consommé to a gentle simmer. Add the shredded birria meat and heavy cream, stirring to combine over low heat.',
            '<strong>3. Emulsify</strong><br>Add the slightly undercooked pasta into the skillet. Toss continuously while adding handfuls of parmesan cheese.',
            '<strong>4. The Finish</strong><br>Splash in a little pasta water if the sauce gets too thick. Toss until the pasta is perfectly coated in a glossy, creamy red sauce. Garnish with onion and cilantro.'
        ]
    },
    {
        id: 'birria-noodles-stirfry', cat: 'Birria', title: 'Stir-Fried Birria Udon',
        img: 'recipe pictures/Pure Birria noodles.jfif',
        intro: 'Chewy udon noodles pan-fried in the rendered fat from the top of your birria consommé, creating a crispy, flavor-packed Mexican-Japanese fusion dish.',
        outcome: 'Sizzling, slightly charred noodles infused with chili flavors and tossed with tender beef.',
        meta: ['10m Prep', '10m Cook', '2 Servings'],
        ing: [
            '2 portions fresh or frozen Udon noodles (or thick lo mein)',
            '2 tbsp birria fat (skimmed from the top of cold consommé)',
            '1/4 cup birria consommé',
            '1.5 cups shredded birria meat',
            '1/2 cup sliced onions and bell peppers',
            'Soy sauce (just a splash for umami)',
            'Lime and fresh cilantro'
        ],
        ins: [
            '<strong>1. Noodle Prep</strong><br>If using frozen udon, blanch them in boiling water for 1 minute just to separate. Drain well.',
            '<strong>2. The Sizzle</strong><br>Heat a wok or large pan over high heat. Add the skimmed birria fat. Once shimmering, add the sliced onions and peppers and stir-fry for 2 minutes until blistered.',
            '<strong>3. The Toss</strong><br>Add the noodles and the shredded birria meat. Toss vigorously. Pour in the 1/4 cup of consommé and a splash of soy sauce.',
            '<strong>4. The Char</strong><br>Let the noodles sit undisturbed for 30 seconds to get a slight char on the bottom. Toss again and serve immediately with a squeeze of fresh lime.'
        ]
    },
    {
        id: 'birria-grilled-cheese', cat: 'Birria', title: 'Birria Grilled Cheese',
        img: 'recipe pictures/Birria Grilled Cheese.jfif',
        intro: 'The ultimate comfort sandwich. Crispy buttery bread, molten cheese, and savory shredded beef, all dunked into hot consommé.',
        outcome: 'Golden, buttery crust holding a heart of gooey cheese and meat, perfect for dipping.',
        meta: ['5m Prep', '10m Cook', '1 Sandwich'],
        ing: [
            '2 thick slices of good quality bread',
            '1 cup shredded birria meat',
            '1 cup Oaxaca or mozzarella cheese',
            'Butter for spreading',
            'Small bowl of hot birria consommé (for dipping)'
        ],
        ins: [
            '<strong>1. Prep</strong><br>Generously butter the outside of both bread slices.',
            '<strong>2. Build</strong><br>Place one slice (butter side down) in a cold pan. Layer half the cheese, the birria meat, and the remaining cheese. Top with the second bread slice (butter side up).',
            '<strong>3. Grill</strong><br>Turn heat to medium. Cook until the bottom is golden brown and crispy (about 4 mins). Carefully flip and cook until the second side is golden and the cheese is fully melted.',
            '<strong>4. Serve</strong><br>Slice in half and serve immediately alongside a bowl of hot consommé for dipping.'
        ]
    },
    {
        id: 'birria-fries', cat: 'Birria', title: 'Birria Fries',
        img: 'recipe pictures/Birria Fries.jfif',
        intro: 'Crispy french fries loaded with melted cheese, savory birria, and finished with fresh toppings and a drizzle of consommé.',
        outcome: 'The perfect late-night snack or appetizer—crispy, cheesy, meaty, and deeply flavorful.',
        meta: ['5m Prep', '20m Cook', '2-4 Servings'],
        ing: [
            '1 large portion of French fries (frozen or fresh)',
            '1 cup shredded birria meat',
            '1 cup cheese (Oaxaca or Monterey Jack)',
            'Sliced jalapeños',
            'Mexican Crema',
            '1/4 cup birria consommé'
        ],
        ins: [
            '<strong>1. The Base</strong><br>Cook the fries until golden and very crispy (bake, fry, or air-fry).',
            '<strong>2. Layering</strong><br>Spread the hot fries on an oven-safe tray or platter. Top evenly with the shredded birria meat and cheese.',
            '<strong>3. Melt</strong><br>Bake or broil briefly just until the cheese is melted and bubbly.',
            '<strong>4. Finish</strong><br>Drizzle lightly with the consommé (too much will make them soggy). Top with jalapeños and a drizzle of crema. Serve immediately.'
        ]
    },
    {
        id: 'birria-burrito', cat: 'Birria', title: 'Birria Burrito',
        img: 'recipe pictures/Birria Burrito.jfif',
        intro: 'A hearty burrito stuffed with all the classic fillings plus rich, tender birria meat, toasted to perfection.',
        outcome: 'A tightly wrapped, golden-toasted tortilla encasing rice, beans, meat, and melty cheese.',
        meta: ['10m Prep', '5m Cook', '1 Burrito'],
        ing: [
            '1 large flour tortilla',
            '1 cup shredded birria meat',
            '1/2 cup Mexican rice',
            '1/2 cup refried beans (warmed)',
            '1/2 cup shredded cheese',
            'Diced onion and fresh cilantro',
            'Birria consommé for dipping'
        ],
        ins: [
            '<strong>1. Warm Tortilla</strong><br>Briefly warm the large flour tortilla on a comal or in the microwave so it becomes pliable.',
            '<strong>2. Assemble</strong><br>Spread a layer of refried beans. Add the rice, then a generous portion of birria meat. Top with cheese, diced onion, and cilantro.',
            '<strong>3. Wrap</strong><br>Fold the sides in, then roll tightly from the bottom up to form a secure burrito.',
            '<strong>4. Toast</strong><br>Place the burrito seam-side down in a hot, lightly oiled pan. Toast until golden brown, then flip and toast the other sides.',
            '<strong>5. Serve</strong><br>Cut in half and serve with a side of hot consommé for dipping.'
        ]
    },
    {
        id: 'birria-naan', cat: 'Birria', title: 'Birria Flatbread / Naan Wrap (Fusion)',
        img: 'https://placehold.co/400x250/fc8181/ffffff?text=Birria+Fusion+Logo',
        intro: 'A brilliant Middle Eastern–Mexican fusion using warm naan bread, cooling yogurt sauce, and rich birria beef.',
        outcome: 'A perfectly balanced wrap combining the deep, slow-braised flavor of Mexican birria with fresh, crisp Mediterranean elements.',
        meta: ['10m Prep', '5m Cook', '1 Wrap'],
        ing: [
            '1 large Naan or pita bread',
            '1 cup shredded birria meat (warmed)',
            'Sliced cucumber, tomato, and red onion',
            'Yogurt sauce (Plain yogurt mixed with minced garlic, lemon juice, salt)',
            'Fresh cilantro'
        ],
        ins: [
            '<strong>1. Warm Bread</strong><br>Heat the naan or pita in a dry pan until warm and pliable.',
            '<strong>2. Sauce Base</strong><br>Spread a generous layer of the garlic-lemon yogurt sauce over the warm bread.',
            '<strong>3. Build</strong><br>Add the warm birria meat. Top with fresh cucumber, tomato, onion, and cilantro.',
            '<strong>4. Finish</strong><br>Optional: Drizzle a small spoonful of consommé inside before folding into a wrap. Serve immediately.'
        ]
    },
    {
        id: 'birria-ramen', cat: 'Birria', title: 'Birria Ramen',
        img: 'recipe pictures/Birria Ramen.jfif',
        intro: 'The ultimate culinary crossover. Instant ramen noodles elevated to gourmet status by cooking them in rich, spicy birria consommé.',
        outcome: 'A steaming, fragrant bowl of noodle soup with tender beef, a soft boiled egg, and fresh garnishes.',
        meta: ['10m Prep', '5m Cook', '1 Bowl'],
        ing: [
            '2 cups birria consommé',
            '1 portion shredded birria meat',
            '1 pack ramen noodles (discard the seasoning packet) or fresh ramen noodles',
            '1 soft boiled egg (halved)',
            'Chopped cilantro and sliced green onion',
            'Lime wedges and (optional) chili oil or sesame seeds'
        ],
        ins: [
            '<strong>1. Base Soup</strong><br>Bring the birria consommé to a simmer in a pot. Add the shredded birria meat to warm it through.',
            '<strong>2. Noodles</strong><br>In a separate pot of boiling water, cook the ramen noodles according to package instructions (usually 2-3 minutes). Drain well.',
            '<strong>3. Assemble</strong><br>Place the hot noodles into a large serving bowl. Ladle the hot birria broth and meat generously over the noodles.',
            '<strong>4. Garnish</strong><br>Top with the halved soft boiled egg, cilantro, and green onions. Squeeze fresh lime juice over the top before eating. Add chili oil if desired.'
        ]
    },
    {
        id: 'birria-bao', cat: 'Birria', title: 'Birria Stuffed Buns (Bao)',
        img: 'https://placehold.co/400x250/fc8181/ffffff?text=Birria+Buns+Logo',
        intro: 'Soft, pillowy buns stuffed with a reduced, intensely flavorful birria meat filling and gooey cheese. Can be steamed or baked.',
        outcome: 'A fluffy bread exterior giving way to a rich, cheesy, meaty center.',
        meta: ['30m Prep', '20m Cook', '8-10 Buns'],
        ing: [
            '2 cups shredded birria meat',
            '1/2 cup reduced birria consommé (thickened)',
            '8–10 dough portions (prepare using the bun recipe in this recipe book)',
            '1/2 cup shredded cheese (Oaxacan or mozzarella)',
            '2 tbsp chopped cilantro, optional diced onion and sesame seeds'
        ],
        ins: [
            '<strong>1. The Filling</strong><br>In a pan, combine shredded birria meat and the 1/2 cup of consommé. Cook until the liquid is reduced and thickened so the meat isn\'t too wet. Off the heat, fold in the cilantro and cheese. Let cool slightly.',
            '<strong>2. Prepare Dough</strong><br>Use the standard Bun recipe from the recipe book to prepare your dough and divide it into portions.',
            '<strong>3. Stuff the Buns</strong><br>Flatten each dough portion into a small circle. Place 2–3 tablespoons of the filling in the center. Pleat and fold the dough over the filling, pinching to seal fully.',
            '<strong>4. Cook (Steam or Bake)</strong><br>You can steam the buns in a steamer basket for 12–15 minutes until fluffy and risen. Alternatively, you can bake them at 180°C (350°F) for 18–20 minutes until golden brown. For the best of both worlds, try steaming them for a few minutes and then baking them!',
            '<strong>5. Serve</strong><br>Serve the hot buns alongside a small bowl of warm birria consommé for dipping.'
        ]
    },
    {
        id: 'birria-lasagna', cat: 'Birria', title: 'Birria Lasagna',
        img: 'recipe pictures/Birria-Lasagna.jpg',
        intro: 'A rich, decadent fusion of classic Italian comfort food and traditional Mexican birria. Layers of pasta, melted cheese, and tender shredded beef in a savory consommé sauce.',
        outcome: 'A bubbling, golden-brown lasagna with deeply flavorful, meat-packed layers. Delicious served with an extra bowl of hot consommé for dipping.',
        meta: ['25m Prep', '45m Cook', '6-8 Servings'],
        ing: [
            '3 cups shredded birria beef or mutton',
            '2–3 cups birria consommé',
            '12 lasagna sheets',
            '2 cups shredded mozzarella',
            '1 cup shredded Oaxaca or Monterey Jack cheese',
            '1 cup ricotta cheese',
            '½ cup grated Parmesan',
            '1 small onion (finely diced) & 2 cloves garlic (minced)',
            '2 tbsp olive oil & ½ tsp oregano',
            'Salt and pepper to taste',
            'Optional toppings: chopped cilantro, diced white onion, lime wedges'
        ],
        ins: [
            '<strong>1. Prepare Birria Sauce</strong><br>Heat a pan with olive oil on medium heat. Add diced onion and cook until soft (3–4 mins). Add garlic and cook 30 seconds. Add 2 cups birria consommé and oregano. Simmer 5–10 mins until slightly thickened to form the lasagna sauce.',
            '<strong>2. Mix the Filling</strong><br>In a bowl combine the shredded birria meat, ½ cup ricotta, and ½ cup mozzarella. Mix lightly so the meat stays shredded.',
            '<strong>3. Cook Pasta</strong><br>Boil lasagna sheets until just al dente. Drain and lightly oil them so they don’t stick.',
            '<strong>4. Assemble the Lasagna</strong><br>In a baking dish, start with a thin layer of birria sauce, then lasagna sheets. Add a layer of the birria meat mixture, then mozzarella, then sauce. Repeat layers until the dish is full, finishing the top with mozzarella and Parmesan.',
            '<strong>5. Bake</strong><br>Bake at 375°F (190°C) for 30–35 minutes until bubbling and golden. Let it rest 10–15 minutes before cutting.',
            '<strong>6. Serve</strong><br>Top with chopped cilantro, diced onion, and a small squeeze of lime. Serve with a small bowl of hot consommé for dipping, similar to tacos.'
        ]
    },
    {
        id: 'mash', cat: 'Sides & Bread', title: 'Fluffy Classic Mashed Potatoes',
        img: 'recipe pictures/mashed potatoes.jfif',
        intro: 'Gluey potatoes are caused by overworked starch and water retention. We solve this by "Drying" the potatoes after boiling and using warm dairy.',
        outcome: 'Cloud-like texture. No lumps. Buttery aroma.',
        meta: ['10m Prep', '20m Cook', '6 Servings'],
        ing: [
            '1 kg Yukon Gold (creamy) or Russet (fluffy) potatoes',
            '1/2 cup heavy cream (warmed)',
            '1/2 cup butter (room temp)',
            'Salt and white pepper'
        ],
        ins: [
            '<strong>1. The Boil</strong><br>Start in COLD salted water. Bring to boil. Cook until knife slides off easily.',
            '<strong>2. The Dry (Critical)</strong><br>Drain water. Put potatoes BACK in the hot pot. Cook on low heat for 1 minute to evaporate steam. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Wet potatoes = watery mash that requires too much cream to fix.</span>',
            '<strong>3. The Mash</strong><br>Use a Ricer or Food Mill for restaurant perfection. A hand masher is okay, but never a food processor (makes glue).',
            '<strong>4. The Fold</strong><br>Fold in butter. Then stream in WARM cream. Do not whip perfectly smooth; stop while it\'s fluffy.'
        ]
    },
    {
        id: 'naan', cat: 'Sides & Bread', title: 'Soft Garlic Naan',
        img: 'recipe pictures/garlic naan.jfif',
        intro: 'A Tandoor oven hits 900°F. Your skillet doesn\'t. We mimic the blistered texture by using high heat cast-iron and a yogurt-enriched dough that remains soft even when charred.',
        outcome: 'Large air bubbles with dark char spots. Soft and pliable, not cracker-like.',
        meta: ['1h Rise', '15m Cook', '8 Naan'],
        ing: [
            '2.5 cups flour',
            '1 tsp instant yeast + 1 tsp sugar',
            '1/4 cup yogurt (softener)',
            'Water + Oil',
            'Garlic Butter: Melted butter + minced garlic + cilantro'
        ],
        ins: [
            '<strong>1. The Dough</strong><br>Knead until smooth. Let rise 1 hour until doubled. The yogurt tenderizes the gluten.',
            '<strong>2. The Roll</strong><br>Divide into balls. Roll thin (1/4 inch).',
            '<strong>3. The Skillet Method</strong><br>Get cast-iron smoking hot. Lay dough in. Wait for bubbles to swell up like balloons (1 min). Flip. Char the other side.',
            '<strong>4. The Finish</strong><br>Brush IMMEDIATELY with garlic butter while hot. Stack them in a towel to steam each other soft.'
        ]
    },
    {
        id: 'fried-rice', cat: 'Sides & Bread', title: 'Simple & Delicious Fried Rice',
        img: 'Fried Rice',
        intro: 'The #1 Rule of Fried Rice: Use OLD rice. Fresh rice turns to mush. Day-old, refrigerated rice has dried-out grains that separate beautifully when seared.',
        outcome: 'Individual grains coated in oil/sauce, not clumps. A savory, slightly smoky aroma (Wok Hei) if your pan is hot enough.',
        meta: ['10m Prep', '10m Cook', '4 Servings'],
        ing: [
            '4 cups Day-Old cooked rice (cold)',
            '3 tbsp neutral oil',
            '2 eggs (beaten)',
            'Veg: Onion, peas, carrots, diced small',
            'Aromatics: Garlic, ginger, scallions',
            'Seasoning: Soy sauce, sesame oil, white pepper, tiny splash of vinegar'
        ],
        ins: [
            '<strong>1. Egg First</strong><br>Scramble eggs in oil. Remove. This keeps them yellow and distinct.',
            '<strong>2. Aromatics</strong><br>Sauté onion/carrots/garlic until soft.',
            '<strong>3. Rice Fry</strong><br>Crank heat. Add rice. Break up clumps. Let it sit for 30 seconds to get crispy before tossing. Repeat.',
            '<strong>4. Season</strong><br>Add soy sauce around the rim of the pan (sears the soy). Toss in eggs and peas.',
            '<strong>5. Finish</strong><br>Off heat, stir in sesame oil and scallions.'
        ]
    },

    // CHAPTER 6: Sauces
    {
        id: 'marinara', cat: 'Sauces & Jams', title: 'Classic Marinara Sauce',
        img: 'Marinara Sauce',
        intro: 'A good Marinara is not just "tomato sauce". It is the concentrated essence of tomato. We use whole peeled San Marzano tomatoes because crushed ones are often lower quality.',
        outcome: 'A deep red, thick jam-like consistency. No watery separation around the edges of the plate.',
        meta: ['5m Prep', '45m Cook', 'Makes 3 Cups'],
        ing: [
            '2 cans (28oz) Whole Peeled San Marzano Tomatoes',
            '1/4 cup Extra Virgin Olive Oil',
            '4 cloves garlic (smashed whole, then removed, or minced for stronger flavor)',
            '1 sprig fresh basil',
            '1 tsp sugar (to balance acidity)'
        ],
        ins: [
            '<strong>1. Oil Infusion</strong><br>Heat oil. Add garlic. Cook slowly until golden. <span class="pro-tip"><strong>💡 Pro Tip:</strong> If using whole cloves, remove them now for a subtle aroma. If minced, add tomatoes immediately before they burn.</span>',
            '<strong>2. The Crush</strong><br>Pour tomatoes into a bowl and crush by hand (messy but best texture). Add to pot.',
            '<strong>3. The Simmer</strong><br>Add basil sprig. Simmer gentle for 45 mins. The sauce creates its own sweetness as water evaporates.',
            '<strong>4. Finish</strong><br>Remove basil. Season with salt. If too acidic, add sugar.'
        ]
    },
    {
        id: 'burger-sauce', cat: 'Sauces & Jams', title: 'Spicy Burger & Fry Sauce',
        img: 'Spicy Sauce',
        intro: 'The "Secret Sauce" of every great burger joint. It\'s an emulsion of mayo (fat), ketchup (sweet/acid), and pickle juice (brine).',
        outcome: 'Pale orange-pink color. Tangy, creamy, with a late kick of heat.',
        meta: ['5m Prep', '0m Cook', 'Makes 1 Cup'],
        ing: [
            '1/2 cup Mayonnaise (Hellmann\'s or Dukes)',
            '2 tbsp Ketchup',
            '1 tsp Yellow Mustard',
            '1 tbsp Pickle Brine',
            '1 tsp Smoked Paprika + 1/2 tsp Cayenne'
        ],
        ins: [
            '<strong>1. Whisk</strong><br>Combine all ingredients.',
            '<strong>2. Rest</strong><br>Let sit in fridge for 30 mins to let flavors meld. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Keeps for 2 weeks. Use on everything.</span>'
        ]
    },
    {
        id: 'butter-sauce', cat: 'Sauces & Jams', title: 'Butter Chicken Burger Sauce',
        img: 'Butter Chicken Sauce',
        intro: 'A fusion condiment that brings the complex spice of India to a sandwich spread.',
        outcome: 'Golden yellow, aromatic, and savory.',
        meta: ['5m Prep', '0m Cook', 'Makes 1 Cup'],
        ing: [
            '1/2 cup Mayo',
            '1 tbsp Melted Butter (cooled)',
            '1 tsp Garam Masala',
            '1/2 tsp Turmeric',
            '1 tsp Tomato Paste'
        ],
        ins: [
            '<strong>1. Bloom Spices</strong><br>Microwave the butter with the spices for 10 seconds to wake them up.',
            '<strong>2. Emulsify</strong><br>Whisk spiced butter into the mayo/tomato paste mix.'
        ]
    },
    {
        id: 'mint-yogurt', cat: 'Sauces & Jams', title: 'Mint Yogurt Sauce',
        img: 'Mint Yogurt',
        intro: 'The cooling fire-extinguisher for spicy tandoori dishes. Fresh mint provides the high note; yogurt provides the fat.',
        outcome: 'Pale green. Thin enough to drizzle but thick enough to hold shape.',
        meta: ['5m Prep', '0m Cook', 'Makes 1 Cup'],
        ing: [
            '1 cup Plain Yogurt (whisked smooth)',
            '1/2 cup Fresh Mint leaves',
            '1/4 cup Fresh Cilantro',
            '1 Green Chilli (optional)',
            '1 tsp Cumin Powder'
        ],
        ins: [
            '<strong>1. Blitz</strong><br>Blend herbs and chilli with a splash of water until it\'s a green paste.',
            '<strong>2. Fold</strong><br>Stir the green paste into the yogurt. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Do not blend the yogurt or it will turn watery. Stir by hand.</span>'
        ]
    },
    {
        id: 'aioli', cat: 'Sauces & Jams', title: 'Garlic Aioli',
        img: 'Aioli',
        intro: 'Real Aioli is garlic and oil emulsified. We cheat by using mayo as a stable base, but we ramp up the garlic and acid to cut through fatty dishes.',
        outcome: 'Punchy garlic flavor that lingers. Thick enough to stand a spoon in.',
        meta: ['5m Prep', '0m Cook', 'Makes 1 Cup'],
        ing: [
            '1/2 cup Mayo',
            '2 cloves Garlic (grated into a paste)',
            '1 tsp Lemon Juice',
            '1 tbsp Good Olive Oil',
            'Black Pepper'
        ],
        ins: [
            '<strong>1. Paste</strong><br>Microplane the garlic. Big chunks of raw garlic are unpleasant.',
            '<strong>2. Whisk</strong><br>Combine all. The olive oil gives it a grassy, luxury finish.'
        ]
    },
    {
        id: 'pesto', cat: 'Sauces & Jams', title: 'Fresh Basil Pesto',
        img: 'Pesto',
        intro: 'Pesto means "to pound". A mortar and pestle is best, but a food processor works if you pulse carefully to avoid heating the herbs (which turns them brown).',
        outcome: 'Electric bright green. If it turns olive-drab, the basil cooked from the blades\' heat.',
        meta: ['10m Prep', '0m Cook', 'Makes 1 Cup'],
        ing: [
            '2 cups Fresh Basil (packed)',
            '1/3 cup Pine Nuts (toasted)',
            '1/2 cup Parmesan',
            '1/2 cup Extra Virgin Olive Oil',
            '2 cloves Garlic'
        ],
        ins: [
            '<strong>1. Toast</strong><br>Toast nuts in dry pan for 2 mins. Cool.',
            '<strong>2. Pulse</strong><br>Pulse garlic and nuts. Add basil. Pulse sparingly.',
            '<strong>3. Stream</strong><br>With machine running, stream in oil slowly to emulsify. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Stir cheese in by hand at the end for better texture.</span>'
        ]
    },

    // CHAPTER 7: Desserts
    {
        id: 'cheesecake', cat: 'Desserts', title: 'Classic New York Cheesecake',
        img: 'recipe pictures/new-york-style-cheesecake-square.jpg',
        intro: 'Cheesecake is a custard, not a cake. It demands a water bath (bain-marie) and a slow cool-down to prevent the dreaded "Grand Canyon" crack in the center.',
        outcome: 'A dense, velvety texture with no graininess. The top should be flat and pale (no browning).',
        meta: ['1.5h Cook', '6h Chill', '12 Servings'],
        ing: [
            'Crust: 1.5 cups Graham Cracker crumbs, 6 tbsp melted butter',
            'Filling: 900g Full-Fat Cream Cheese (Room Temp is MANDATORY)',
            '1.5 cups Sugar',
            '4 Large Eggs (Room Temp)',
            '1 cup Sour Cream (Room Temp, for tang)',
            '1 tsp Vanilla Bean Paste'
        ],
        ins: [
            '<strong>1. The Base</strong><br>Press crust into springform pan. Bake 10 mins. Cool.',
            '<strong>2. The Emulsion</strong><br>Beat cream cheese and sugar until creamy. Scrape bowl. Add sour cream/vanilla.',
            '<strong>3. The Eggs (Gentle)</strong><br>Add eggs one at a time. Mix on LOW. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Do not whip air into it. Air bubbles = surface cracks.</span>',
            '<strong>4. The Bain-Marie</strong><br>Wrap pan in foil (double layer) to waterproof. Place in large roasting pan. Fill roasting pan with boiling water halfway up the cake pan.',
            '<strong>5. Bake & Cool</strong><br>Bake at 160°C (325°F) for 60-70 mins until edges set but center wobbles like Jello. Turn oven OFF. Open door slightly. Let cool INSIDE for 1 hour.'
        ]
    },
    {
        id: 'lava-cake', cat: 'Desserts', title: 'Molten Chocolate Lava Cake',
        img: 'recipe pictures/chocolate lava cake 2.0.webp',
        intro: 'These molten chocolate lava cakes are rich, gooey, and easier to make than you may think! Each individual cake has a delicate outer layer and a warm, molten center. Paired with a bright raspberry coulis and fluffy homemade whipped cream.',
        outcome: 'Firm walls that hold shape. When unmolded and spooned, a warm, molten chocolate center should flow out. Paired nicely with fluffy whipped cream and tart raspberry coulis.',
        meta: ['20m Prep', '10m Cook', '4 Servings', '731 kcal'],
        ing: [
            '<strong>Whipped Cream:</strong>',
            '1/2 cup heavy whipping cream (very cold)',
            '1 tbsp powdered sugar',
            '1 tsp vanilla bean paste',
            '1/4 tsp kosher salt',
            '<strong>Raspberry Coulis:</strong>',
            '1 (6 oz) package fresh raspberries',
            '1-2 tbsp sugar (depending on sweetness of berries)',
            '1 tbsp lemon juice (about 1/2 lemon)',
            'Zest of 1 lemon',
            '1 tbsp water',
            '1/4 tsp kosher salt',
            '<strong>Lava Cakes:</strong>',
            'Cocoa powder for dusting ramekins',
            '4 oz unsalted butter (cubed), plus more for greasing',
            '6 oz dark chocolate (chopped)',
            '1/2 tsp espresso powder',
            '1 tsp vanilla extract',
            '3 large eggs (room temperature)',
            '1 large egg yolk (room temperature)',
            '1/4 cup sugar',
            '1/2 tsp kosher salt',
            '2 tbsp all-purpose flour',
            'Optional: powdered sugar and fresh mint for serving'
        ],
        ins: [
            '<strong>1. The Whipped Cream</strong><br>Whisk heavy cream, powdered sugar, vanilla paste, and salt until thickened but smooth (1.5-2 mins). Refrigerate.',
            '<strong>2. The Raspberry Coulis</strong><br>In a small saucepan over medium-low heat, combine raspberries, sugar, lemon juice, zest, water, and salt. Mash to release juices. Cook 3-5 mins until berries soften. Strain through a fine-mesh sieve into a bowl, let cool.',
            '<strong>3. Cake Prep</strong><br>Preheat oven to 450°F (232°C). Butter four 4-oz ramekins and dust with cocoa powder. Place on a sheet tray.',
            '<strong>4. Melt the Base</strong><br>In a heatproof bowl over simmering water, melt butter, chocolate, and espresso powder until smooth. Remove from heat, stir in vanilla. Cool slightly.',
            '<strong>5. The Ribbon Stage</strong><br>Beat eggs, egg yolk, sugar, and salt on medium-high until doubled in volume, pale, and fluffy (4-5 mins).',
            '<strong>6. Fold and Bake</strong><br>Whisk flour into the chocolate. Gently fold chocolate mixture into the eggs without deflating. Divide evenly among ramekins. Bake 9-10 mins until sides spring back but centers jiggle. Rest 1 min.',
            '<strong>7. Unmold and Serve</strong><br>Place a small plate over each ramekin and invert quickly but gently. Dust with powdered sugar, garnish with mint, and serve with coulis and whipped cream.'
        ]
    },
    {
        id: 'donuts', cat: 'Desserts', title: 'Glazed Donuts',
        img: 'recipe pictures/51160200_glazed-doughnuts_1x1.webp',
        intro: 'Soft, light, and fluffy, these homemade Glazed Donuts will melt in your mouth! Taking the time to properly proof a yeast-raised dough is the secret to getting airy, bakery-style donuts at home.',
        outcome: 'Golden-brown, puffy rings that are incredibly light and coated in a smooth, sweet vanilla glaze.',
        meta: ['2h 15m Prep', '15m Cook', '12 Servings', '385 kcal'],
        ing: [
            '<strong>For the Dough:</strong>',
            '1 cup warm whole milk (105 to 110F / 250mL)',
            '2 packages (0.5-oz total) active dry yeast (4 1/2 tsp)',
            '1/4 cup + 1 tsp granulated sugar (divided)',
            '4 1/2 cups all-purpose flour (plus extra for dusting)',
            '1/2 tsp salt',
            '6 tbsp unsalted butter (melted)',
            '2 large eggs (room temperature)',
            'Vegetable oil (for frying)',
            '<strong>For the Glaze:</strong>',
            '3 cups powdered sugar',
            '6 tbsp whole milk',
            '1/2 tsp vanilla extract'
        ],
        ins: [
            '<strong>1. Bloom the Yeast</strong><br>Whisk warm milk, yeast, and 1 tsp sugar. Let sit 5-10 mins until bubbly. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Careful not to overheat the milk or it will kill the yeast.</span>',
            '<strong>2. Build the Dough</strong><br>Whisk flour and salt. In another bowl, whisk melted butter, eggs, and remaining 1/4 cup sugar. Stir in yeast mixture, then stir in flour mixture until a shaggy dough forms.',
            '<strong>3. Knead & First Rise</strong><br>Knead 5 minutes on a floured surface until smooth and elastic. Place in oiled bowl, cover, let rise warm for 1 hour until doubled.',
            '<strong>4. Cut and Second Rise</strong><br>Punch down, roll to 3/4-inch thick. Cut 12 rounds with holes. Place on parchment, cover loosely, let rise 40 mins until doubled.',
            '<strong>5. Fry</strong><br>Heat 2 inches of oil to 350°F. Fry a few at a time for 1 min per side. Remove to wire rack.',
            '<strong>6. Glaze</strong><br>Whisk powdered sugar, milk, and vanilla until smooth. Dip warm donuts into the glaze and return to rack to set.'
        ]
    },
    {
        id: 'croissant', cat: 'Sides & Bread', title: 'Flaky French Croissants',
        img: 'recipe pictures/craussent.webp',
        intro: 'Must-try Croissant recipe that yields flaky croissants with crisp, golden exteriors every time. This requires a 19-hour lamination process, building alternate layers of butter and yeast dough (the "Beurrage" technique).',
        outcome: 'A deeply golden, shatteringly crisp exterior with distinct, visual honeycomb layers on the inside. They should smell intensely of butter.',
        meta: ['2h Prep', '30m Cook', '14 Servings', '334 kcal'],
        ing: [
            '<strong>For the Croissant Dough:</strong>',
            '2/3 cup warm whole milk (85-90°F / 160mL)',
            '4 tbsp granulated sugar (divided)',
            '1/2 cup cold water (120ml)',
            '1 envelope (7g) active dry yeast',
            '4 cups all-purpose flour (480g)',
            '2 1/2 tsp salt',
            '1/4 cup unsalted European-style butter (cubed, very soft)',
            '<strong>For the Butter Layer (Beurrage):</strong>',
            '1 1/4 cups unsalted European-style butter (1.25 blocks / 282g)',
            '<strong>Egg Wash:</strong>',
            '1 large egg + 1 tbsp heavy cream'
        ],
        ins: [
            '<strong>1. The Dough (Détrempe)</strong><br>Combine warm milk, yeast, 1 tbsp sugar and let foam. Add cold water. With a dough hook, mix flour, remaining sugar, salt, yeast mix, and soft butter. Mix low for 3 mins. Pat into a 1/2 inch thick square. Wrap and chill 30 mins.',
            '<strong>2. The Butter Block (Beurrage)</strong><br>Pound and roll 1.25 cups of cold but pliable butter between parchment into a 10-inch square, 1/8-inch thick. Chill 10 mins.',
            '<strong>3. Lock-In and First Fold</strong><br>Roll dough to 10x20-inch. Place butter block in center, fold dough ends over it to seal perfectly. Roll to 10x18-inch. Do a "letter fold" (fold thirds like a letter). Wrap and chill 30 mins.',
            '<strong>4. Lamination Turns</strong><br>Repeat the roll and letter fold process 3 more times (for 4 turns total). Chill 30 mins between each. Chill overnight (up to 18h) after the last fold.',
            '<strong>5. Shaping</strong><br>Roll dough to 12x28-inch (1/8-inch thick). Cut into 14 long triangles. Slice a small notch in the base of each, stretch slightly, and roll up tightly into crescent shapes. Proof for 2.5-3 hours until doubled and jiggly.',
            '<strong>6. Bake</strong><br>Brush with egg wash. Bake at 375°F for 15-20 mins until deeply browned (internal 190°F). Cool on rack.'
        ]
    },
    {
        id: 'marshmallow', cat: 'Desserts', title: 'Homemade Marshmallows',
        img: 'recipe pictures/marshmallows.webp',
        intro: 'Pillowy, cloud-like confections that melt in your mouth. They’re incredibly easy to make with just a few ingredients, a candy thermometer, and a little patience.',
        outcome: 'Bouncy, towering squares of pure white marshmallow that hold their shape and slowly melt into hot chocolate or coffee.',
        meta: ['20m Prep', '4h Set', '36 Servings', '89 kcal'],
        ing: [
            '1 cup water (divided / 240mL)',
            '2 (1/4-ounce) envelopes unflavored gelatin',
            '1 1/2 cups granulated sugar (300g)',
            '1 cup light corn syrup (240mL)',
            '1/4 tsp salt',
            '2 tsp vanilla extract',
            '1 cup confectioners’ sugar (120g, for dusting)',
            '1/4 cup cornstarch (20g, for dusting)'
        ],
        ins: [
            '<strong>1. Bloom Gelatin</strong><br>Pour 1/2 cup water into mixer bowl. Sprinkle gelatin over top and let hydrate.',
            '<strong>2. Sugar Syrup</strong><br>In a saucepan, combine sugar, corn syrup, salt, and remaining 1/2 cup water. Boil without stirring until a candy thermometer reads 240°F (5-8 mins). Remove from heat and let bubbles subside.',
            '<strong>3. The Whip</strong><br>Turn mixer on low and slowly pour hot syrup into the bloomed gelatin. Gradually increase to high. Beat until very thick and tripled in volume (5-10 mins). It should fall off the whisk in a slow, wide ribbon.',
            '<strong>4. Add Flavor & Pour</strong><br>Quickly beat in vanilla. Immediately pour into a greased 9-inch square pan. Smooth top with greased spatula. <span class="pro-tip"><strong>💡 Pro Tip:</strong> It will be incredibly sticky. Work fast.</span>',
            '<strong>5. Set & Cut</strong><br>Let set uncovered for at least 4 hours. Dust a board with mixed powdered sugar and cornstarch. Turn out the slab, dust the top, and cut into squares using a dusted knife. Toss squares in powder to prevent sticking.'
        ]
    },
    {
        id: 'panna-cotta', cat: 'Desserts', title: 'Silky Vanilla Panna Cotta',
        img: 'recipe pictures/pana_cota.jpeg',
        intro: 'Panna Cotta means "Cooked Cream". It relies on gelatin, not eggs. The perfect panna cotta should wobble like a "woman\'s thigh" (old chef saying) and melt instantly on the tongue.',
        outcome: 'Smooth, glass-like surface. It should jiggle when the plate is tapped, not stand rigid like rubber.',
        meta: ['4h Chill', 'Elegant', '6 Servings'],
        ing: [
            '3 tsp Powdered Gelatin',
            '1/4 cup Cold Milk (to bloom)',
            '2 cups Heavy Cream',
            '1 cup Whole Milk',
            '1/2 cup Sugar',
            '1 Vanilla Bean (seeds scraped)'
        ],
        ins: [
            '<strong>1. Bloom</strong><br>Sprinkle gelatin over cold milk. Let sit 5 mins to hydrate.',
            '<strong>2. Dissolve</strong><br>Heat cream, milk, sugar, vanilla. Do NOT boil. Once hot, remove from heat. Whisk in gelatin mix until dissolved.',
            '<strong>3. Cool</strong><br>Pour into ramekins. <span class="pro-tip"><strong>💡 Pro Tip:</strong> Stir the mix occasionally as it cools before pouring. This prevents vanilla seeds from sinking to the bottom.</span>',
            '<strong>4. Set</strong><br>Fride 4 hours. Unmold by dipping ramekin in warm water for 5 seconds.'
        ]
    },
    {
        id: 'tiramisu', cat: 'Desserts', title: 'Classic Tiramisu',
        img: 'recipe pictures/tiramisu.jpg',
        intro: 'No baking required. Just patience. We use raw egg yolks (pasteurized) for richness and Mascarpone. The coffee dip must be quick.',
        outcome: 'Distinct layers. Ladyfingers should be moist but not mushy. Cream should be stiff enough to slice.',
        meta: ['24h Chill', 'No Bake', '9 Servings'],
        ing: [
            '6 Egg Yolks',
            '3/4 cup Sugar',
            '500g Mascarpone Cheese (Cold)',
            '1.5 cups Strong Espresso (Cooled)',
            'Package of Ladyfingers (Savoiardi)',
            'Cocoa Powder for dusting'
        ],
        ins: [
            '<strong>1. Sabayon</strong><br>Beat yolks and sugar over a double boiler until pale and hot (cooks the eggs). Cool slightly.',
            '<strong>2. The Cream</strong><br>Fold Mascarpone into the egg mix. Whip until stiff peaks form.',
            '<strong>3. The Dip</strong><br>Quickly dunk ladyfinger in coffee (1 second per side). arrange in dish. Top with cream. Repeat.',
            '<strong>4. The Wait</strong><br>Chill 24 hours. The flavors need to marry. Dust with cocoa before serving.'
        ]
    },
    {
        id: 'gulab-jamun', cat: 'Desserts', title: 'Gulab Jamun (Rose Dumplings)',
        img: 'Gulab Jamun',
        intro: 'The most famous Indian dessert. Milk solids (Khoya or Milk Powder) fried slowly until dark gold, then soaked in a rose-cardamom syrup.',
        outcome: 'Spongy, not dense. When you bite, syrup should squeeze out. No hard center.',
        meta: ['30m Prep', '20m Cook', '12 Pieces'],
        ing: [
            '1 cup Milk Powder',
            '1/4 cup All Purpose Flour',
            '2 tbsp Ghee (Clarified Butter)',
            'Milk (for kneading)',
            'Syrup: 2 cups Sugar, 2 cups Water, Cardamom, Rose Water'
        ],
        ins: [
            '<strong>1. The Dough</strong><br>Mix milk powder, flour, ghee. Add milk spoon by spoon to make a soft, sticky dough. Do not over-knead.',
            '<strong>2. Shaping</strong><br>Grease hands. Roll into smooth balls. ANY crack will split in the oil.',
            '<strong>3. The Fry</strong><br>Fry in Ghee/Oil on LOW heat. If heat is high, outside burns, inside stays raw. Stir oil constantly to rotate balls.',
            '<strong>4. The Soak</strong><br>Drop hot balls into warm syrup. Let soak 2 hours. They will double in size.'
        ]
    },
    {
        id: 'smashed-burger-core', cat: 'Mains', title: 'Smashed Burger (Core Method)',
        img: 'recipe pictures/smashed bugger.jpeg',
        intro: 'The core method of a classic smashed burger. Do NOT season the meat before cooking. Use 80–100 g minced meat balls and smash them on a smoking hot pan.',
        outcome: 'A deeply crusted, juicy patty topped with house special burger sauce or savory-sweet burger jam on a toasted bun.',
        meta: ['10m Prep', '5m Cook', '1 Burger'],
        ing: [
            '80–100 g minced beef or mutton (20–25% fat recommended)',
            'Salt and fresh black pepper',
            'High smoke point oil (Avocado, Vegetable, Canola)',
            'Burger Buns (toasted with butter)',
            'Sauce Options: Special Burger Sauce, Burger Jam, or Fusion Butter-Chicken Cheese Sauce',
            'Optional toppings: Pickles, onions, lettuce, cheese'
        ],
        ins: [
            '<strong>1. Prepare the Meat</strong><br>Divide minced meat into 80–100 g portions. Roll each portion into loose balls. Do not compress tightly. Keep unseasoned until cooking.',
            '<strong>2. Heat the Pan</strong><br>Heat a cast iron or stainless steel pan on high heat until extremely hot. Add a high smoke point oil and let it shimmer.',
            '<strong>3. Smash the Burger</strong><br>Place the meat ball on the hot pan. Immediately smash it flat using a heavy metal spatula or burger press for 5–10 seconds. Once smashed, season with salt, pepper, and optional light seasoning (garlic powder, etc.). Let it cook without moving so the crust forms. Flip once deep crust forms. Cook the second side 30–60 seconds.',
            '<strong>4. Burger Buns</strong><br>Butter the buns lightly and toast them in the pan until golden.',
            '<strong>5. Assembly</strong><br>Bottom bun, smash burger patty, sauce of choice, optional toppings, top bun. Serve immediately.'
        ]
    },
    {
        id: 'fried-chicken-burger', cat: 'Mains', title: 'Signature Fried Chicken Burger',
        img: 'Fried Chicken Burger',
        intro: 'A towering buttermilk fried chicken sandwich that balances a shatteringly crisp crust with juicy, tender meat and a spicy, tangy slaw.',
        outcome: 'Deep golden brown, craggy crust masking a perfectly moist chicken thigh, nestled in a soft bun.',
        meta: ['4h Marinate', '15m Cook', '2 Servings'],
        ing: [
            '2 Boneless Skinless Chicken Thighs',
            '1 cup Buttermilk (for marinating)',
            '1.5 cups All-Purpose Flour',
            'Spices: Paprika, Garlic Powder, Onion Powder, Cayenne',
            '2 Brioche Buns',
            'Spicy Mayo & Pickles',
            'Oil for frying'
        ],
        ins: [
            '<strong>1. Marinate</strong><br>Submerge chicken thighs in buttermilk seasoned with a pinch of salt and hot sauce for at least 4 hours.',
            '<strong>2. Dredge</strong><br>Combine flour and spices. Drizzle 2 tbsp of buttermilk into the flour and rub to create crispy craggy bits. Coat the chicken thoroughly.',
            '<strong>3. Fry</strong><br>Fry in 170°C (340°F) oil for 6-8 minutes until internal temp reaches 74°C (165°F).',
            '<strong>4. Rest</strong><br>Drain the chicken on a wire rack to keep the bottom from getting soggy.',
            '<strong>5. Build</strong><br>Toast buns. Spread spicy mayo, add pickles, the fried chicken, and top with slaw.'
        ]
    },
    {
        id: 'burger-buns-tangzhong', cat: 'Sides & Bread', title: 'Soft Burger Buns (Tangzhong)',
        img: 'recipe pictures/bun.jpeg',
        intro: 'These soft, fluffy burger buns use the Tangzhong method (a warm flour paste) to lock in moisture and keep the bread tender for days.',
        outcome: 'Pillowy soft, golden brown buns that hold up perfectly to juicy smashed burgers.',
        meta: ['3h Prep/Rise', '16m Cook', '6 Buns'],
        ing: [
            'Tangzhong: 4 tbsp whole milk, 2 tbsp water, 2 tbsp bread flour',
            'Yeast Mixture: 1/2 cup warm whole milk (35°C), 1 tbsp instant yeast',
            'Dry: 2.5 cups bread flour, 2.5 tbsp sugar, 1 tsp fine sea salt',
            'Wet: 1 whole egg, 1 egg yolk, 3 tbsp softened unsalted butter',
            'Egg Wash: 1 whole egg + splash of milk'
        ],
        ins: [
            '<strong>1. Tangzhong (Flour Paste)</strong><br>Combine milk, water, and flour in a small saucepan. Cook over medium heat, whisking constantly until very thick and paste-like (25–30 secs once heated). Remove from heat and set aside.',
            '<strong>2. Yeast Mixture</strong><br>Warm the 1/2 cup milk to 35°C. Add yeast, mix briefly, and let sit for 8 minutes until activated.',
            '<strong>3. Dough Mixing</strong><br>Whisk dry ingredients in a stand mixer bowl. Attach dough hook, start on low, and add yeast mixture, tangzhong, egg, and egg yolk. Mix until combined. Increase to medium-low and gradually add softened butter. Knead 5–8 mins until smooth and elastic.',
            '<strong>4. First Rise</strong><br>Shape dough into a smooth ball, place in a lightly greased bowl, cover with a damp towel, and let rise in a warm area for 1–1.5 hours until doubled.',
            '<strong>5. Shaping & Second Rise</strong><br>Punch down dough and divide into 6 pieces (95–105 g each). Shape into tight balls by folding edges to center and rolling against surface. Place on parchment-lined tray 6 cm apart. Cover loosely and let rise 1–2 hours until doubled.',
            '<strong>6. Baking</strong><br>Brush gently with egg wash. Bake at 190°C (375°F) for 16–18 mins until deep golden brown. Brush with melted butter out of the oven and cool on a wire rack.'
        ]
    },
    {
        id: 'special-burger-sauce', cat: 'Sauces & Jams', title: 'Special Burger Sauce',
        img: 'Burger Sauce',
        intro: 'A perfectly balanced, creamy, sweet, and tangy sauce designed for smashed burgers. You can customize it with bacon bits or chopped pickles.',
        outcome: 'A creamy, sweet, and tangy sauce with a hint of acidity from the lemon and sharpness from the mustard.',
        meta: ['5m Prep', '0m Cook', 'Makes 2 Cups'],
        ing: [
            '1 cup mayonnaise',
            '1/2 cup mustard',
            '1/2 cup ketchup',
            '1/4 cup honey (plus extra for finishing if desired)',
            '1/4 cup lemon juice',
            'Optional: 2-3 tbsp finely chopped bacon bits OR finely chopped pickles'
        ],
        ins: [
            '<strong>1. Whisk Base</strong><br>In a mixing bowl combine mayonnaise, mustard, ketchup, honey, and lemon juice. Whisk everything together until smooth and creamy.',
            '<strong>2. Mix-ins</strong><br>Add one optional mix-in: bacon bits for a smoky flavor, or pickles for a tangy flavor. Mix well.',
            '<strong>3. Adjust</strong><br>Taste and add a small extra drizzle of honey if you want slightly more sweetness.',
            '<strong>4. Serve</strong><br>Spread on both the top and bottom bun of your burger. Works wonderfully with smash burgers and cheddar cheese.'
        ]
    },
    {
        id: 'burger-jam', cat: 'Sauces & Jams', title: 'Burger Jam (Savory-Sweet Bacon Onion)',
        img: 'Bacon Onion Jam',
        intro: 'A smoky, sweet, and rich savory jam that elevates any burger. Rendered bacon fat and deeply caramelized onions are the stars here.',
        outcome: 'A sticky, jam-like condiment that brings incredible depth to a smashed burger.',
        meta: ['10m Prep', '30m Cook', 'Makes 1 Cup'],
        ing: [
            '1-2 tbsp oil',
            '150 g beef bacon or chicken bacon, chopped',
            '2-3 tbsp chicken stock (or splash of water)',
            '2 medium white onions, very finely chopped',
            '1-2 tsp sugar',
            'Small amount fresh strawberry, finely chopped (just for a hint of sweetness/acidity)',
            'Black pepper to taste'
        ],
        ins: [
            '<strong>1. Cook the Bacon</strong><br>Heat a pan on low heat with a little oil. Add bacon and chicken stock/water. Let it slowly cook and reduce until liquid evaporates and bacon is crispy golden brown. Remove bacon, leave rendered fat in pan.',
            '<strong>2. Caramelize Onions</strong><br>Add the finely chopped onions to the same pan. Cook on low-medium. Add 1-2 tsp sugar. Cook until deep golden, soft, and jam-like.',
            '<strong>3. Build the Jam</strong><br>Add the crispy bacon back to the pan, along with the very small amount of chopped strawberry (it should not dominate). Mix and cook 2-3 minutes more until slightly sticky and jam-like. Add black pepper to taste.'
        ]
    },
    {
        id: 'sticky-toffee-pudding-final', cat: 'Desserts', title: 'Sticky Toffee Pudding (Final Version)',
        img: 'recipe pictures/stickey_tofee_pudding.jpeg',
        intro: 'A richer, smoother version of the classic British dessert featuring a warm date sponge cake drenched in a honey-sweetened toffee sauce.',
        outcome: 'A dark, moist cake with deep caramel flavor from Medjool dates, extra butter, and a smooth honey-toffee sauce.',
        meta: ['25m Prep', '40m Cook', '9 Squares'],
        ing: [
            'Date Paste: 1 cup chopped Medjool dates, 1 cup water, 1/2 tsp baking soda',
            'Dry: 1.5 cups all-purpose flour, 1/4 tsp baking powder, 3/4 tsp fine sea salt, 1/2 tsp fresh nutmeg',
            'Wet: 10 tbsp softened unsalted butter, 3/4 cup light brown sugar, 2 whole eggs + 1 yolk, 2 tsp vanilla',
            'Toffee Sauce: 1 cup light brown sugar, 100g unsalted butter, 1/4 cup light corn syrup, 1/4 cup honey, 2 cups heavy cream, 1 tsp vanilla, pinch kosher salt'
        ],
        ins: [
            '<strong>1. Date Paste</strong><br>Boil dates and water in a saucepan for 4 mins until very soft. Stir in baking soda. Blend with a hand blender until a smooth paste forms. Let cool.',
            '<strong>2. Cake Batter</strong><br>Preheat oven to 175°C (350°F). Grease a 9x9 baking dish. Whisk dry ingredients. In another bowl, beat the 10 tbsp butter until fluffy, add brown sugar and beat 1 min. Add eggs one at a time, then the yolk, then vanilla. Beat in cooled date paste. Fold in dry ingredients until a smooth batter forms. Spread in pan.',
            '<strong>3. Bake</strong><br>Bake at 175°C (350°F) for 30–40 minutes until a toothpick inserted comes out clean.',
            '<strong>4. Toffee Sauce</strong><br>Combine brown sugar, butter, corn syrup, and honey in a saucepan over medium heat. Stir until butter melts and boils. Slowly add 1 cup heavy cream, stirring. Simmer 15-20 mins on medium-low until thicker and darker. Add second cup of cream, cook 3-4 mins until silky. Remove from heat, stir in vanilla and salt.',
            '<strong>5. Assembly</strong><br>Poke holes all over the fresh hot cake. Pour half the warm toffee sauce over the cake. Return to oven for 3-4 mins until bubbling. Cut into 9 squares. Serve warm with extra sauce and vanilla ice cream.'
        ]
    },
    {
        id: 'spicy-chicken-burger', cat: 'Mains', title: 'Nash-Style Spicy Chicken Burger',
        img: 'Spicy Chicken Burger',
        intro: 'A dangerously crispy double-fried chicken burger bathed in a sticky, sweet, and spicy Nash-style gochujang glaze, topped with creamy garlic mayo.',
        outcome: 'An unbelievably crunchy chicken sandwich that balances the deep heat of gochujang and cayenne with the tang of buttermilk and rich garlic mayo.',
        meta: ['1h Marinate', '20m Cook', '4 Burgers'],
        ing: [
            'Chicken Marinade: 1.5 cups buttermilk, 2 tbsp hot sauce, 1 tsp white pepper, 1 tbsp gochujang, 1.5 tsp MSG, 1 tbsp kosher salt, 2 tsp sugar, 2 tsp garlic powder',
            'Chicken Breading: 2 cups all-purpose flour, 1/2 cup potato starch, 2 tsp kosher salt, 1 tsp MSG, 1 tsp cayenne pepper, 1 tsp garlic powder, 1/2 tsp onion powder, 2 tsp black pepper, 1 tsp baking soda (for dip paste)',
            'Nash-Style Glaze: 4 cloves minced garlic, 1/4 cup gochujang, 3 tbsp ketchup, 2 tbsp dark soy sauce, 2 tbsp sweet soy sauce (or soy + honey), 2 tbsp honey, 2 tbsp white vinegar',
            'Garlic Mayo: 1 cup mayonnaise, 1/4 tsp MSG, 2-3 cloves grated garlic, pinch salt, black pepper',
            'Assembly: Milk burger buns, butter, Kimchi slaw, Pickled jalapeños, Boneless Chicken Thighs'
        ],
        ins: [
            '<strong>1. Marinate Chicken</strong><br>Whisk buttermilk, hot sauce, white pepper, gochujang, MSG, salt, sugar, and garlic powder. Add chicken thighs and coat thoroughly. Marinate at least 1 hour (ideally overnight).',
            '<strong>2. Prep Breading & Dip</strong><br>Whisk all dry ingredients together. Take some of the dredge and mix it into the leftover marinade to form a thick dip paste. Add 1 tsp baking soda to the paste.',
            '<strong>3. Coat Chicken</strong><br>Coat chicken in the dip paste, then press firmly into the dry flour dredge.',
            '<strong>4. Double Fry</strong><br>Heat oil to 163°C (325°F). Fry chicken until cooked through with light color. Remove and rest briefly. Increase oil temperature to 177°C (350°F). Fry again until extra crispy and deep golden brown.',
            '<strong>5. Gochujang Glaze</strong><br>Whisk glaze ingredients (except garlic). Boil 1 minute over medium-high heat to caramelize. Remove from heat and stir in minced garlic. Toss warm fried chicken in the glaze until fully coated.',
            '<strong>6. Garlic Mayo</strong><br>Whisk mayo, MSG, grated garlic, salt, and pepper until smooth.',
            '<strong>7. Assembly</strong><br>Toast buns in butter. Build: Bottom bun, garlic mayo, kimchi slaw, glazed chicken, pickled jalapeños, more garlic mayo, top bun.'
        ]
    }
];

const emojiMap = {
    'Appetizers': '🍗', 'Mains': '🥩', 'Ch 3: Chicken': '🍗',
    'Ch 4: Seafood & Pasta': '🍝', 'Sides & Bread': '🍞',
    'Sauces & Jams': '🫙', 'Desserts': '🍰'
};
