class MenuItem {
  constructor(name, imageURL, description, allergies, price) {
    this.name = name;
    this.imageURL = imageURL;
    this.description = description;
    this.allergies = allergies;
    this.price = price;
}

  appendItem() {
    return `
      <div class="item">
            <!-- Item Name -->
            <div class="itemName">
                <p id="name">${this.name}</p>
            </div>
            <!-- Item Image -->
            <div class="itemImg">
                <img src="${this.imageURL}" alt="item img">
            </div>
            <!-- Item Info -->
            <div class="itemInfo">
                <p id="desc">${this.description}</p>
                <p id="dietR">${this.allergies}</p>
            </div>
            <!-- Item Footer: Price + Add Button -->
            <div class="itemFooter">
                <div class="itemPrice">
                    <p id="price">$${this.price}</p>
                </div>
                <div class="itemAdd">
                    <button class="add">Add</button>
                </div>
            </div>
      </div>
    `;
  }
}

const menuRow1 = document.getElementsByClassName("menuRow1")[0];
const menuRow2 = document.getElementsByClassName("menuRow2")[0];
const menuRow3 = document.getElementsByClassName("menuRow3")[0];
const menuRow4 = document.getElementsByClassName("menuRow4")[0];
const menuRow5 = document.getElementsByClassName("menuRow5")[0];




const apple = new MenuItem(
    "Apple",
    "https://cdn.discordapp.com/attachments/1416088170876895303/1435976344923275306/apple.jpg?ex=690decaf&is=690c9b2f&hm=250721ec6e09846fd33b180a463686037f0291a526df17f7d697ea8df0dbfd61&",
    "This is a fugi apple, it's sweet with a bit of tang.",
    "Fruit",
    "1.99"
);

const sammy1 = new MenuItem(
    "Lunar Loaf",
    "Lunar-loaf.png",
    "Meatball sub with moon dusted parmesan.",
    "Gluten, Dairy, Meat",
    "14.99"
);

const sammy2 = new MenuItem(
    "The Eclipse",
    "The-Eclipse.png",
    "Black rye bread with white cheddar and ham.",
    "Gluten, Dairy, Meat",
    "14.99"
);

const sammy3 = new MenuItem(
    "Rocket Reuben",
    "Rocket-Reuben.png",
    "Toasted multigrain with veggies and crispy onions.",
    "Gluten",
    "14.99"
);
const sammy4 = new MenuItem(
    "Cosmic Crunch",
    "Cosmic-Crunch.png",
    "Corned beef, sauerkraut, and cosmic sauce.",
    "Gluten, Meat",
    "14.99"
);
const sammy5 = new MenuItem(
    "The Nebula Melt",
    "The-Nebula-Melt.png",
    "swirling layers of cheese and roast beef.",
    "Gluten, Dairy, Meat",
    "14.99"
);

const sammy6 = new MenuItem(
    "The Space Jamwich",
    "The-Space-Jamwich.png",
    "peanut butter, banana, and berry jam fusion.",
    "Peanuts, Gluten",
    "14.99"
);

const sammy7 = new MenuItem(
    "AstroBLT",
    "AstroBLT.png",
    "Classic bacon, lettuce, and tomato with meteorite-spiced mayo.",
    "Gluten, Egg, Meat",
    "14.99"
);

const sammy8 = new MenuItem(
    "Solar Flare Panini",
    "Solar-Flare-Panini.png",
    "Spicy grilled chicken panini with pepper jack and jalapeños.",
    "Dairy, Gluten, Meat",
    "13.99"
);

const sammy9 = new MenuItem(
    "Alien Avocado Smash",
    "Alien-Avocado-Smash.png",
    "Mashed avocado, lime, garlic, and sprouts on toasted rye.",
    "Gluten",
    "12.99"
);

const sammy10 = new MenuItem(
    "Galaxy Grilled Cheese",
    "Galaxy-Grilled-Cheese.png",
    "Rainbow cheese blend melted between star-shaped brioche slices.",
    "Dairy, Gluten",
    "10.99"
);

const sammy11 = new MenuItem(
    "Black Hole BBQ",
    "Black-Hole-BBQ.png",
    "Pulled pork with smoky barbecue sauce on a dark brioche bun.",
    "Gluten, Meat",
    "14.99"
);

const drink1 = new MenuItem(
    "Comet Cola",
    "Comet-Cola.png",
    "Classic cola with a twist of lime and starfruit.",
    "tbd",
    "14.99"
);

const drink2 = new MenuItem(
    "Milky Way Shake",
    "Milky-Way-Shake.png",
    "Chocolate malt with whipped cream and caramel drizzle.",
    "Dairy",
    "14.99"
);

const drink3 = new MenuItem(
    "AstroFizz",
    "AstroFizz.png",
    "Orange soda with popping candy rim.",
    "Dairy",
    "14.99"
);

const drink4 = new MenuItem(
    "Cosmo Cocoa",
    "Cosmo-Cocoa.png",
    "Chilled chocolate drink with marshmallow meteors.",
    "Dairy",
    "14.99"
);

const side1 = new MenuItem(
    "Asteroid Fries",
    "Asteroid-Fries.png",
    "Crispy potato wedges with cratered seasoning.",
    "Dairy",
    "14.99"
);

const side2 = new MenuItem(
    "Rocket Rings",
    "Rocket-Rings.png",
    "Golden onion rings with spicy launch sauce.",
    "Dairy",
    "14.99"
);

const side3 = new MenuItem(
    "Solar Slaw",
    "Solar-Slaw.png",
    "Tangy cabbage slaw with sunburst citrus dressing.",
    "Dairy",
    "14.99"
);

const side4 = new MenuItem(
    "Orbit Tots",
    "Orbit-Tots.png",
    "Seasoned tater tots with planetary dipping sauces.",
    "Dairy",
    "14.99"
);

menuRow1.insertAdjacentHTML("beforeend", sammy1.appendItem());
menuRow1.insertAdjacentHTML("beforeend", sammy2.appendItem());
menuRow1.insertAdjacentHTML("beforeend", sammy3.appendItem());
menuRow1.insertAdjacentHTML("beforeend", sammy4.appendItem());

menuRow2.insertAdjacentHTML("beforeend", sammy5.appendItem());
menuRow2.insertAdjacentHTML("beforeend", sammy6.appendItem());
menuRow2.insertAdjacentHTML("beforeend", sammy7.appendItem());
menuRow2.insertAdjacentHTML("beforeend", sammy8.appendItem());

menuRow3.insertAdjacentHTML("beforeend", sammy9.appendItem());
menuRow3.insertAdjacentHTML("beforeend", sammy10.appendItem());
menuRow3.insertAdjacentHTML("beforeend", sammy11.appendItem());
menuRow3.insertAdjacentHTML("beforeend", drink1.appendItem());

menuRow4.insertAdjacentHTML("beforeend", drink2.appendItem());
menuRow4.insertAdjacentHTML("beforeend", drink3.appendItem());
menuRow4.insertAdjacentHTML("beforeend", drink4.appendItem());
menuRow4.insertAdjacentHTML("beforeend", side1.appendItem());

menuRow5.insertAdjacentHTML("beforeend", side2.appendItem());
menuRow5.insertAdjacentHTML("beforeend", side3.appendItem());
menuRow5.insertAdjacentHTML("beforeend", side4.appendItem());
menuRow5.insertAdjacentHTML("beforeend", apple.appendItem());


