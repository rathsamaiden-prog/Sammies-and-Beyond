import { MenuItem } from "../menuItem.js";


const menu = document.getElementsByClassName("menu")[0];


const apple = new MenuItem(
    "Apple",
    "apple.jpg",
    "This is a fugi apple, it's sweet with a bit of tang.",
    "Vegan",
    "1.49"
);

const lunarLoaf = new MenuItem(
    "Lunar Loaf",
    "Lunar-loaf.png",
    "Meatball sub with moon dusted parmesan.",
    "Gluten, Dairy, Meat",
    "11.99"
);

const theEclipse = new MenuItem(
    "The Eclipse",
    "The-Eclipse.png",
    "Black rye bread with white cheddar and ham.",
    "Gluten, Dairy, Meat",
    "10.99"
);

const rocketReuben = new MenuItem(
    "Rocket Reuben",
    "Rocket-Reuben.png",
    "Toasted multigrain with veggies and crispy onions.",
    "Gluten",
    "9.99"
);
const cosmicCrunch = new MenuItem(
    "Cosmic Crunch",
    "Cosmic-Crunch.png",
    "Corned beef, sauerkraut, and cosmic sauce.",
    "Gluten, Meat",
    "10.99"
);
const theNebulaMelt = new MenuItem(
    "The Nebula Melt",
    "The-Nebula-Melt.png",
    "swirling layers of cheese and roast beef.",
    "Gluten, Dairy, Meat",
    "10.99"
);

const theSpaceJamwich = new MenuItem(
    "The Space Jamwich",
    "The-Space-Jamwich.png",
    "peanut butter, banana, and berry jam fusion.",
    "Peanuts, Gluten",
    "8.99"
);

const astroBLT = new MenuItem(
    "AstroBLT",
    "AstroBLT.png",
    "Classic bacon, lettuce, and tomato with meteorite-spiced mayo.",
    "Gluten, Egg, Meat",
    "9.99"
);

const solarFlarePanini = new MenuItem(
    "Solar Flare Panini",
    "Solar-Flare-Panini.png",
    "Spicy grilled chicken panini with pepper jack and jalapeños.",
    "Dairy, Gluten, Meat",
    "10.49"
);

const alienAvocadoSmash = new MenuItem(
    "Alien Avocado Smash",
    "Alien-Avocado-Smash.png",
    "Mashed avocado, lime, garlic, and sprouts on toasted rye.",
    "Gluten",
    "8.99"
);

const galaxyGrilledCheese = new MenuItem(
    "Galaxy Grilled Cheese",
    "Galaxy-Grilled-Cheese.png",
    "Rainbow cheese blend melted between star-shaped brioche slices.",
    "Gluten, Dairy",
    "7.99"
);

const blackHoleBBQ = new MenuItem(
    "Black Hole BBQ",
    "Black-Hole-BBQ.png",
    "Pulled pork with smoky barbecue sauce on a dark brioche bun.",
    "Gluten, Meat",
    "10.99"
);

const cometCola = new MenuItem(
    "Comet Cola",
    "Comet-Cola.png",
    "Classic cola with a twist of lime and starfruit.",
    "Vegan",
    "2.99"
);

const milkyWayShake = new MenuItem(
    "Milky Way Shake",
    "Milky-Way-Shake.png",
    "Chocolate malt with whipped cream and caramel drizzle.",
    "Dairy",
    "4.99"
);

const astroFizz = new MenuItem(
    "AstroFizz",
    "AstroFizz.png",
    "Orange soda with popping candy rim.",
    "Vegan",
    "3.49"
);

const cosmoCocoa = new MenuItem(
    "Cosmo Cocoa",
    "Cosmo-Cocoa.png",
    "Chilled chocolate drink with marshmallow meteors.",
    "Dairy",
    "4.49"
);

const asteriodFries = new MenuItem(
    "Asteroid Fries",
    "Asteroid-Fries.png",
    "Crispy potato wedges with cratered seasoning.",
    "Vegan",
    "3.99"
);

const rocketRings = new MenuItem(
    "Rocket Rings",
    "Rocket-Rings.png",
    "Golden onion rings with spicy launch sauce.",
    "Gluten, Vegetarian",
    "4.49"
);

const solarSlaw = new MenuItem(
    "Solar Slaw",
    "Solar-Slaw.png",
    "Tangy cabbage slaw with sunburst citrus dressing.",
    "Vegan",
    "3.49"
);

const orbitTots = new MenuItem(
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
  lunarLoaf, theEclipse, rocketReuben, cosmicCrunch,
  theNebulaMelt, theSpaceJamwich, astroBLT, solarFlarePanini,
  alienAvocadoSmash, galaxyGrilledCheese, blackHoleBBQ
].forEach(s => sammies.insertAdjacentHTML("beforeend", s.appendItem()));

// Add drinks
[cometCola, milkyWayShake, astroFizz, cosmoCocoa].forEach(d => drinks.insertAdjacentHTML("beforeend", d.appendItem()));

// Add sides
[asteriodFries, rocketRings, solarSlaw, orbitTots, apple].forEach(s => sides.insertAdjacentHTML("beforeend", s.appendItem()));






document.addEventListener("DOMContentLoaded", function (){
    const cartBtn = document.getElementById("cartBtn");
    const cart = document.getElementById("cart");
    const itemsContainer = document.querySelector(".items");
    const totalDisplay = document.querySelector(".total");
    const totalNumDisplay = document.querySelector(".totalNum");


    let total = 0;

    // Toggle cart visibility
    cartBtn.addEventListener("click", function (){
        cart.style.display = (cart.style.display === "none" || cart.style.display === "") ? "flex" : "none";
    });

    document.addEventListener("click", function (e){
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
            totalNumDisplay.textContent = `Total: $${total.toFixed(2)}`;



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



document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.getElementById("checkout");
    const paymentForm = document.getElementById("fake-payment-form");
    const payNowBtn = document.querySelector(".payNow");

    checkoutBtn.addEventListener("click", function () {
        checkoutBtn.style.display = "none";
        paymentScreen.style.display = "block";
    });

    const deliveryForm = document.getElementById("fake-delivery-form");
    const orderRadios = document.getElementsByName("order");

    orderRadios.forEach(radio => {
        radio.addEventListener("change", function () {
        deliveryForm.style.display = this.value === "delivery" ? "block" : "none";

    });
});


payNowBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const cardNum = document.querySelector(".cardNum").value.trim();
    const expiry = document.querySelector(".my").value.trim();
    const cvc = document.querySelector(".cvc").value.trim();

    if (cardNum && expiry && cvc) {
        const paymentScreen = document.querySelector(".payment-screen");
        const confirmationScreen = document.querySelector(".confirmationScreen");
        const orderedItems = document.querySelector(".OrderedItems");
        const totalPrice = document.querySelector(".totalPrice");
        const addressDiv = document.querySelector(".address");
        const downloadDiv = document.querySelector(".download");

        const cartItems = document.querySelectorAll(".items .cart-item");
        const deliveryForm = document.getElementById("fake-delivery-form");
        const deliveryOption = document.querySelector('input[name="order"]:checked').value;

        orderedItems.innerHTML = "";
        addressDiv.innerHTML = "";
        downloadDiv.innerHTML = "";

        let total = 0;
        let receiptText = "ORDER RECEIPT\n\n";

   
        cartItems.forEach(item => {
            const name = item.getAttribute("data-name");
            const price = parseFloat(item.getAttribute("data-price"));
            const quantity = parseInt(item.getAttribute("data-quantity"));
            const itemTotal = price * quantity;

            total += itemTotal;

            const itemDiv = document.createElement("div");
            itemDiv.textContent = `${name} x${quantity} — $${itemTotal.toFixed(2)}`;
            orderedItems.appendChild(itemDiv);

            receiptText += `${name} x${quantity} — $${itemTotal.toFixed(2)}\n`;
        });

        if (deliveryOption === "delivery") {
            const street = deliveryForm.querySelector(".street").value;
            const city = deliveryForm.querySelector(".city").value;
            const state = deliveryForm.querySelector(".state").value;
            const zip = deliveryForm.querySelector(".zip").value;

            addressDiv.innerHTML = `
                <strong>Delivery Address:</strong><br>
                ${street}<br>
                ${city}, ${state} ${zip}
            `;

            receiptText += `\nDelivery Address:\n${street}\n${city}, ${state} ${zip}\n`;
        }

        receiptText += `\nTOTAL: $${total.toFixed(2)}`;
        totalPrice.textContent = `Total: $${total.toFixed(2)}`;

        document.querySelector(".items").innerHTML = "";
        document.querySelector(".total").textContent = "Total: $0.00";

        document.querySelectorAll(".item").forEach(i => {
            i.querySelector(".add").style.display = "block";
            i.querySelector(".itemRemove").style.display = "none";
        });
        
        const downloadBtn = document.createElement("button");
        downloadBtn.textContent = "Download Receipt";
        downloadBtn.classList.add("downloadReceipt");
        downloadDiv.appendChild(downloadBtn);

        downloadBtn.addEventListener("click", function () {
            const blob = new Blob([receiptText], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "receipt.txt";
            a.click();
            URL.revokeObjectURL(url);
        });

        paymentScreen.style.display = "none";
        confirmationScreen.style.display = "flex";
    }
});


});

document.querySelector(".newOrder").addEventListener("click", function () {
    const confirmationScreen = document.querySelector(".confirmationScreen");
    const paymentScreen = document.querySelector(".payment-screen");
    const cart = document.getElementById("cart");

    confirmationScreen.style.display = "none";

    document.querySelector(".OrderedItems").innerHTML = "";
    document.querySelector(".address").innerHTML = "";
    document.querySelector(".download").innerHTML = "";
    document.querySelector(".totalPrice").textContent = "";

    const deliveryForm = document.getElementById("fake-delivery-form");
    deliveryForm.reset();
    deliveryForm.style.display = "none";

    document.querySelector('input[name="order"][value="pickup"]').checked = true;

    document.getElementById("fake-payment-form").reset();

    document.querySelector(".items").innerHTML = "";
    document.querySelector(".total").textContent = "Total: $0.00";

    document.querySelector(".items").style.display = "block";
    document.querySelector(".total").style.display = "block";

    cart.style.display = "flex";
    cart.style.justifyContent = "center";

    document.getElementById("checkout").style.display = "block";

    paymentScreen.style.display = "none";

    document.querySelectorAll(".item").forEach(i => {
        i.querySelector(".add").style.display = "block";
        i.querySelector(".itemRemove").style.display = "none";
    });
    total = 0;

});



