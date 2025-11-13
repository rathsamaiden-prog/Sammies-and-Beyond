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
                <div class="itemRemove">
                    <button class="remove">Remove</button>
                </div>
            </div>
      </div>
    `;
  }
}




const menu = document.getElementsByClassName("menu")[0];





const apple = new MenuItem(
    "Apple",
    "https://cdn.discordapp.com/attachments/1416088170876895303/1435976344923275306/apple.jpg?ex=690decaf&is=690c9b2f&hm=250721ec6e09846fd33b180a463686037f0291a526df17f7d697ea8df0dbfd61&",
    "This is a fugi apple, it's sweet with a bit of tang.",
    "Vegan",
    "1.49"
);

const sammy1 = new MenuItem(
    "Lunar Loaf",
    "Lunar-loaf.png",
    "Meatball sub with moon dusted parmesan.",
    "Gluten, Dairy, Meat",
    "11.99"
);

const sammy2 = new MenuItem(
    "The Eclipse",
    "The-Eclipse.png",
    "Black rye bread with white cheddar and ham.",
    "Gluten, Dairy, Meat",
    "10.99"
);

const sammy3 = new MenuItem(
    "Rocket Reuben",
    "Rocket-Reuben.png",
    "Toasted multigrain with veggies and crispy onions.",
    "Gluten",
    "9.99"
);
const sammy4 = new MenuItem(
    "Cosmic Crunch",
    "Cosmic-Crunch.png",
    "Corned beef, sauerkraut, and cosmic sauce.",
    "Gluten, Meat",
    "10.99"
);
const sammy5 = new MenuItem(
    "The Nebula Melt",
    "The-Nebula-Melt.png",
    "swirling layers of cheese and roast beef.",
    "Gluten, Dairy, Meat",
    "10.99"
);

const sammy6 = new MenuItem(
    "The Space Jamwich",
    "The-Space-Jamwich.png",
    "peanut butter, banana, and berry jam fusion.",
    "Peanuts, Gluten",
    "8.99"
);

const sammy7 = new MenuItem(
    "AstroBLT",
    "AstroBLT.png",
    "Classic bacon, lettuce, and tomato with meteorite-spiced mayo.",
    "Gluten, Egg, Meat",
    "9.99"
);

const sammy8 = new MenuItem(
    "Solar Flare Panini",
    "Solar-Flare-Panini.png",
    "Spicy grilled chicken panini with pepper jack and jalapeños.",
    "Dairy, Gluten, Meat",
    "10.49"
);

const sammy9 = new MenuItem(
    "Alien Avocado Smash",
    "Alien-Avocado-Smash.png",
    "Mashed avocado, lime, garlic, and sprouts on toasted rye.",
    "Gluten",
    "8.99"
);

const sammy10 = new MenuItem(
    "Galaxy Grilled Cheese",
    "Galaxy-Grilled-Cheese.png",
    "Rainbow cheese blend melted between star-shaped brioche slices.",
    "Gluten, Dairy",
    "7.99"
);

const sammy11 = new MenuItem(
    "Black Hole BBQ",
    "Black-Hole-BBQ.png",
    "Pulled pork with smoky barbecue sauce on a dark brioche bun.",
    "Gluten, Meat",
    "10.99"
);

const drink1 = new MenuItem(
    "Comet Cola",
    "Comet-Cola.png",
    "Classic cola with a twist of lime and starfruit.",
    "Vegan",
    "2.99"
);

const drink2 = new MenuItem(
    "Milky Way Shake",
    "Milky-Way-Shake.png",
    "Chocolate malt with whipped cream and caramel drizzle.",
    "Dairy",
    "4.99"
);

const drink3 = new MenuItem(
    "AstroFizz",
    "AstroFizz.png",
    "Orange soda with popping candy rim.",
    "Vegan",
    "3.49"
);

const drink4 = new MenuItem(
    "Cosmo Cocoa",
    "Cosmo-Cocoa.png",
    "Chilled chocolate drink with marshmallow meteors.",
    "Dairy",
    "4.49"
);

const side1 = new MenuItem(
    "Asteroid Fries",
    "Asteroid-Fries.png",
    "Crispy potato wedges with cratered seasoning.",
    "Vegan",
    "3.99"
);

const side2 = new MenuItem(
    "Rocket Rings",
    "Rocket-Rings.png",
    "Golden onion rings with spicy launch sauce.",
    "Gluten, Vegetarian",
    "4.49"
);

const side3 = new MenuItem(
    "Solar Slaw",
    "Solar-Slaw.png",
    "Tangy cabbage slaw with sunburst citrus dressing.",
    "Vegan",
    "3.49"
);

const side4 = new MenuItem(
    "Orbit Tots",
    "Orbit-Tots.png",
    "Seasoned tater tots with planetary dipping sauces.",
    "Vegetarian",
    "4.49"
);

menu.insertAdjacentHTML("afterbegin", `
  <section id="sammies"></section>
  <section id="sides"></section>
  <section id="drinks"></section>
`);

// Get references to each section
const sammies = document.getElementById("sammies");
const drinks = document.getElementById("drinks");
const sides = document.getElementById("sides");

// Add sammies
[
  sammy1, sammy2, sammy3, sammy4,
  sammy5, sammy6, sammy7, sammy8,
  sammy9, sammy10, sammy11
].forEach(s => sammies.insertAdjacentHTML("beforeend", s.appendItem()));

// Add drinks
[drink1, drink2, drink3, drink4].forEach(d => drinks.insertAdjacentHTML("beforeend", d.appendItem()));

// Add sides
[side1, side2, side3, side4, apple].forEach(s => sides.insertAdjacentHTML("beforeend", s.appendItem()));







document.addEventListener("DOMContentLoaded", function () {
  const cartBtn = document.getElementById("cartBtn");
  const cart = document.getElementById("cart");
  const itemsContainer = document.querySelector(".items");
  const totalDisplay = document.querySelector(".total");

  let total = 0;

  // Toggle cart visibility
  cartBtn.addEventListener("click", function () {
    cart.style.display = (cart.style.display === "none" || cart.style.display === "") ? "flex" : "none";
  });

  document.addEventListener("click", function (e) {
    const item = e.target.closest(".item");

    // ADD button clicked
    if(e.target.classList.contains("add")){
        const name = item.querySelector("#name").textContent;
        const price = parseFloat(item.querySelector("#price").textContent.replace("$", ""));
        const img = item.querySelector(".itemImg img").src;

        // Create new item in cart
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.setAttribute("data-name", name);
        cartItem.setAttribute("data-price", price);
        cartItem.setAttribute("data-quantity", 1);

        cartItem.innerHTML = `<img src="${img}" alt="Cart item image"><p>${name} - $${price.toFixed(2)}</p>`;

        const quantity = document.createElement("div");
        quantity.classList.add("cart-quantity");
        quantity.insertAdjacentHTML("beforeend", `
            <div class="qty-control">
            <button class="qty-minus">−</button>
            <span class="qty-count">1</span>
            <button class="qty-plus">+</button>
            </div>
        `);

        cartItem.appendChild(quantity);
        itemsContainer.appendChild(cartItem);

        // Update total
        total += price;
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;

        // Toggle buttons
        item.querySelector(".add").style.display = "none";
        item.querySelector(".itemRemove").style.display = "block";
    }

    // REMOVE button clicked
    if(e.target.classList.contains("remove")){
        const name = item.querySelector("#name").textContent;
        const price = parseFloat(item.querySelector("#price").textContent.replace("$", ""));

        const cartItems = itemsContainer.querySelectorAll(".cart-item");
        for (let cartItem of cartItems){
            if(cartItem.getAttribute("data-name") === name){
                const quantity = parseInt(cartItem.getAttribute("data-quantity"));
                total -= price * quantity;
                itemsContainer.removeChild(cartItem);
                break;
            }
        }

        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
        item.querySelector(".add").style.display = "block";
        item.querySelector(".itemRemove").style.display = "none";
    }

    // Quantity control clicked
    if(e.target.classList.contains("qty-plus") || e.target.classList.contains("qty-minus")){
        const control = e.target.closest(".qty-control");
        const countSpan = control.querySelector(".qty-count");
        const cartItem = e.target.closest(".cart-item");
        const basePrice = parseFloat(cartItem.getAttribute("data-price"));
        let quantity = parseInt(cartItem.getAttribute("data-quantity"));

        if(e.target.classList.contains("qty-plus")){
            quantity++;
            total += basePrice;
        } else if(e.target.classList.contains("qty-minus") && quantity > 1){
            quantity--;
            total -= basePrice;
        }

        countSpan.textContent = quantity;
        cartItem.setAttribute("data-quantity", quantity);
        cartItem.querySelector("p").textContent = `${cartItem.getAttribute("data-name")} - $${(basePrice * quantity).toFixed(2)}`;
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }



  });
});

const checkoutBtn = document.getElementById("checkout");
const paymentScreen = document.querySelector(".payment-screen");

checkoutBtn.addEventListener("click", function (){
    document.querySelector(".items").style.display = "none";
    document.querySelector(".total").style.display = "none";
    document.querySelector("#cart").style.justifyContent = "flex-start";
    paymentScreen.style.display = "block";
});




