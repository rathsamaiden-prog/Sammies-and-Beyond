import { MenuItem } from "/menuItem.js";

const menuRow1 = document.getElementsByClassName("menuRow1")[0];
const menuRow2 = document.getElementsByClassName("menuRow2")[0];
const menuRow3 = document.getElementsByClassName("menuRow3")[0];
const menuRow4 = document.getElementsByClassName("menuRow4")[0];
const menuRow5 = document.getElementsByClassName("menuRow5")[0];




let apple = new MenuItem(
    "Apple",
    "https://cdn.discordapp.com/attachments/1416088170876895303/1435976344923275306/apple.jpg?ex=690decaf&is=690c9b2f&hm=250721ec6e09846fd33b180a463686037f0291a526df17f7d697ea8df0dbfd61&",
    "This is a fugi apple, it's sweet with a bit of tang.",
    "Vegan",
    "1.49"
);

let lunarLoaf = new MenuItem(
    "Lunar Loaf",
    "Lunar-loaf.png",
    "Meatball sub with moon dusted parmesan.",
    "Gluten, Dairy, Meat",
    "11.99"
);

let theEclipse = new MenuItem(
    "The Eclipse",
    "The-Eclipse.png",
    "Black rye bread with white cheddar and ham.",
    "Gluten, Dairy, Meat",
    "10.99"
);

let rocketReubon = new MenuItem(
    "Rocket Reuben",
    "Rocket-Reuben.png",
    "Toasted multigrain with veggies and crispy onions.",
    "Gluten",
    "9.99"
);
let cosmicCrunch = new MenuItem(
    "Cosmic Crunch",
    "Cosmic-Crunch.png",
    "Corned beef, sauerkraut, and cosmic sauce.",
    "Gluten, Meat",
    "10.99"
);
let theNebulaMelt = new MenuItem(
    "The Nebula Melt",
    "The-Nebula-Melt.png",
    "swirling layers of cheese and roast beef.",
    "Gluten, Dairy, Meat",
    "10.99"
);

let theSpaceJamwich = new MenuItem(
    "The Space Jamwich",
    "The-Space-Jamwich.png",
    "peanut butter, banana, and berry jam fusion.",
    "Peanuts, Gluten",
    "8.99"
);

let astroBLT = new MenuItem(
    "AstroBLT",
    "AstroBLT.png",
    "Classic bacon, lettuce, and tomato with meteorite-spiced mayo.",
    "Gluten, Egg, Meat",
    "9.99"
);

let solarFlarePanini = new MenuItem(
    "Solar Flare Panini",
    "Solar-Flare-Panini.png",
    "Spicy grilled chicken panini with pepper jack and jalapeños.",
    "Dairy, Gluten, Meat",
    "10.49"
);

let alienAvocadoSmash = new MenuItem(
    "Alien Avocado Smash",
    "Alien-Avocado-Smash.png",
    "Mashed avocado, lime, garlic, and sprouts on toasted rye.",
    "Gluten",
    "8.99"
);

let galaxyGrilledCheese = new MenuItem(
    "Galaxy Grilled Cheese",
    "Galaxy-Grilled-Cheese.png",
    "Rainbow cheese blend melted between star-shaped brioche slices.",
    "Gluten, Dairy",
    "7.99"
);

let blackHoleBBQ = new MenuItem(
    "Black Hole BBQ",
    "Black-Hole-BBQ.png",
    "Pulled pork with smoky barbecue sauce on a dark brioche bun.",
    "Gluten, Meat",
    "10.99"
);

// let sammies = [lunarLoaf, theEclipse, rocketReubon, cosmicCrunch, theNebulaMelt, theSpaceJamwich, astroBLT, solarFlarePanini, alienAvocadoSmash, galaxyGrilledCheese, blackHoleBBQ]

let cometCola = new MenuItem(
    "Comet Cola",
    "Comet-Cola.png",
    "Classic cola with a twist of lime and starfruit.",
    "Vegan",
    "2.99"
);

let milkeyWayShake = new MenuItem(
    "Milky Way Shake",
    "Milky-Way-Shake.png",
    "Chocolate malt with whipped cream and caramel drizzle.",
    "Dairy",
    "4.99"
);

let astroFizz = new MenuItem(
    "AstroFizz",
    "AstroFizz.png",
    "Orange soda with popping candy rim.",
    "Vegan",
    "3.49"
);

let cosmoCocoa = new MenuItem(
    "Cosmo Cocoa",
    "Cosmo-Cocoa.png",
    "Chilled chocolate drink with marshmallow meteors.",
    "Dairy",
    "4.49"
);

// let drinks = [cometCola, milkeyWayShake, astroFizz, cosmoCocoa]

let asteroidFries = new MenuItem(
    "Asteroid Fries",
    "Asteroid-Fries.png",
    "Crispy potato wedges with cratered seasoning.",
    "Vegan",
    "3.99"
);

let rocketRings = new MenuItem(
    "Rocket Rings",
    "Rocket-Rings.png",
    "Golden onion rings with spicy launch sauce.",
    "Gluten, Vegetarian",
    "4.49"
);

let solarSlaw = new MenuItem(
    "Solar Slaw",
    "Solar-Slaw.png",
    "Tangy cabbage slaw with sunburst citrus dressing.",
    "Vegan",
    "3.49"
);

let orbitTots = new MenuItem(
    "Orbit Tots",
    "Orbit-Tots.png",
    "Seasoned tater tots with planetary dipping sauces.",
    "Vegetarian",
    "4.49"
);

// let sides = [asteroidFries, rocketRings, solarSlaw, orbitTots]

menuRow1.insertAdjacentHTML("beforeend", lunarLoaf.appendItem());
menuRow1.insertAdjacentHTML("beforeend", theEclipse.appendItem());
menuRow1.insertAdjacentHTML("beforeend", rocketReubon.appendItem());
menuRow1.insertAdjacentHTML("beforeend", cosmicCrunch.appendItem());

menuRow2.insertAdjacentHTML("beforeend", theNebulaMelt.appendItem());
menuRow2.insertAdjacentHTML("beforeend", theSpaceJamwich.appendItem());
menuRow2.insertAdjacentHTML("beforeend", astroBLT.appendItem());
menuRow2.insertAdjacentHTML("beforeend", solarFlarePanini.appendItem());

menuRow3.insertAdjacentHTML("beforeend", alienAvocadoSmash.appendItem());
menuRow3.insertAdjacentHTML("beforeend", galaxyGrilledCheese.appendItem());
menuRow3.insertAdjacentHTML("beforeend", blackHoleBBQ.appendItem());
menuRow3.insertAdjacentHTML("beforeend", cometCola.appendItem());

menuRow4.insertAdjacentHTML("beforeend", milkeyWayShake.appendItem());
menuRow4.insertAdjacentHTML("beforeend", astroFizz.appendItem());
menuRow4.insertAdjacentHTML("beforeend", cosmoCocoa.appendItem());
menuRow4.insertAdjacentHTML("beforeend", asteroidFries.appendItem());

menuRow5.insertAdjacentHTML("beforeend", rocketRings.appendItem());
menuRow5.insertAdjacentHTML("beforeend", solarSlaw.appendItem());
menuRow5.insertAdjacentHTML("beforeend", orbitTots.appendItem());
menuRow5.insertAdjacentHTML("beforeend", apple.appendItem());


menu.insertAdjacentHTML("beforeend", itemHTML);

//MENU SENDER
let data = `something`
localStorage.setItem('keyName', data);

//MENU RECIEVER
const retrievedValue = localStorage.getItem('keyName');
console.log(retrievedValue)
