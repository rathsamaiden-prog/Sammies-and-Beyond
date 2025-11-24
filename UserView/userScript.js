import { MenuItem } from "../menuItem.js";

const menu = document.getElementsByClassName("menu")[0];


const sammie1 = new MenuItem(
    "Lunar Loaf",
    "Lunar-loaf.png",
    "Meatball sub with moon dusted parmesan.",
    "Gluten, Dairy, Meat",
    "11.99"
);

const sammie2 = new MenuItem(
    "The Eclipse",
    "The-Eclipse.png",
    "Black rye bread with white cheddar and ham.",
    "Gluten, Dairy, Meat",
    "10.99"
);

const sammie3 = new MenuItem(
    "Rocket Reuben",
    "Rocket-Reuben.png",
    "Toasted multigrain with veggies and crispy onions.",
    "Gluten",
    "9.99"
);
const sammie4 = new MenuItem(
    "Cosmic Crunch",
    "Cosmic-Crunch.png",
    "Corned beef, sauerkraut, and cosmic sauce.",
    "Gluten, Meat",
    "10.99"
);
const sammie5 = new MenuItem(
    "The Nebula Melt",
    "The-Nebula-Melt.png",
    "swirling layers of cheese and roast beef.",
    "Gluten, Dairy, Meat",
    "10.99"
);

const sammie6 = new MenuItem(
    "The Space Jamwich",
    "The-Space-Jamwich.png",
    "peanut butter, banana, and berry jam fusion.",
    "Peanuts, Gluten",
    "8.99"
);

const sammie7 = new MenuItem(
    "AstroBLT",
    "AstroBLT.png",
    "Classic bacon, lettuce, and tomato with meteorite-spiced mayo.",
    "Gluten, Egg, Meat",
    "9.99"
);

const sammie8 = new MenuItem(
    "Solar Flare Panini",
    "Solar-Flare-Panini.png",
    "Spicy grilled chicken panini with pepper jack and jalapeños.",
    "Dairy, Gluten, Meat",
    "10.49"
);

const sammie9 = new MenuItem(
    "Alien Avocado Smash",
    "Alien-Avocado-Smash.png",
    "Mashed avocado, lime, garlic, and sprouts on toasted rye.",
    "Gluten",
    "8.99"
);

const sammie10 = new MenuItem(
    "Galaxy Grilled Cheese",
    "Galaxy-Grilled-Cheese.png",
    "Rainbow cheese blend melted between star-shaped brioche slices.",
    "Gluten, Dairy",
    "7.99"
);

const sammie11 = new MenuItem(
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

const side5 = new MenuItem(
    "Apple",
    "apple.jpg",
    "This is a fugi apple, it's sweet with a bit of tang.",
    "Vegan",
    "1.49"
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

let totalSammies = [
  sammie1, sammie2, sammie3, sammie4,
  sammie5, sammie6, sammie7, sammie8,
  sammie9, sammie10, sammie11
]
let totalDrinks = [drink1, drink2, drink3, drink4]
let totalSides = [side1, side2, side3, side4, side5]

window.addEventListener(`load`, () => {
    menuRetriver()
    refresh(sammies, sides, drinks)
})


let total = 0;
let tip = 0;

const totalDisplay = document.querySelector(".total");
const totalNumDisplay = document.querySelector(".totalNum");

function updateTotal() {
    const grandTotal = total + tip;
    totalDisplay.textContent = `Total: $${grandTotal.toFixed(2)}`;
    totalNumDisplay.textContent = `Total: $${grandTotal.toFixed(2)}`;
}


document.addEventListener("DOMContentLoaded", function () {
    const cartBtn = document.getElementById("cartBtn");
    const cart = document.getElementById("cart");
    const itemsContainer = document.querySelector(".items");
    const tipInput = document.querySelector(".tip");


    tipInput.addEventListener("input", () => {
        tip = parseFloat(tipInput.value) || 0;
        updateTotal();
    });


    cartBtn.addEventListener("click", function () {
        cart.style.display =
            (cart.style.display === "none" || cart.style.display === "") ? "flex" : "none";
    });


    document.addEventListener("click", function (e) {

        const item = e.target.closest(".item");

        // ADD
        if (e.target.classList.contains("add")) {

            const name = item.querySelector("#name").textContent;
            const price = parseFloat(item.querySelector("#price").textContent.replace("$", ""));
            const img = item.querySelector(".itemImg img").src;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.dataset.name = name;
            cartItem.dataset.price = price;
            cartItem.dataset.quantity = 1;

            cartItem.innerHTML = `
                <img src="${img}" alt="Cart item image">
                <p>${name} - $${price.toFixed(2)}</p>
                <div class="cart-quantity">
                    <div class="qty-control">
                        <button class="qty-minus">−</button>
                        <span class="qty-count">1</span>
                        <button class="qty-plus">+</button>
                    </div>
                </div>
            `;

            itemsContainer.appendChild(cartItem);

            total += price;
            updateTotal();

            item.querySelector(".add").style.display = "none";
            item.querySelector(".itemRemove").style.display = "block";
        }

        // REMOVE
        if (e.target.classList.contains("remove")) {

            const name = item.querySelector("#name").textContent;
            const price = parseFloat(item.querySelector("#price").textContent.replace("$", ""));
            const cartItems = itemsContainer.querySelectorAll(".cart-item");

            for (let cartItem of cartItems) {
                if (cartItem.dataset.name === name) {
                    const quantity = parseInt(cartItem.dataset.quantity);
                    total -= price * quantity;
                    cartItem.remove();
                    break;
                }
            }

            updateTotal();

            item.querySelector(".add").style.display = "block";
            item.querySelector(".itemRemove").style.display = "none";
        }

        // QUANTITY CONTROL
        if (e.target.classList.contains("qty-plus") || e.target.classList.contains("qty-minus")) {

            const cartItem = e.target.closest(".cart-item");
            const countSpan = cartItem.querySelector(".qty-count");
            const basePrice = parseFloat(cartItem.dataset.price);
            let quantity = parseInt(cartItem.dataset.quantity);

            if (e.target.classList.contains("qty-plus")) {
                quantity++;
                total += basePrice;
            } else if (e.target.classList.contains("qty-minus") && quantity > 1) {
                quantity--;
                total -= basePrice;
            }

            countSpan.textContent = quantity;
            cartItem.dataset.quantity = quantity;
            cartItem.querySelector("p").textContent = `${cartItem.dataset.name} - $${(basePrice * quantity).toFixed(2)}`;
            updateTotal();
        }

    });


    const checkoutBtn = document.getElementById("checkout");
    const paymentScreen = document.querySelector(".payment-screen");

    checkoutBtn.addEventListener("click", function () {
        document.querySelector(".items").style.display = "none";
        document.querySelector(".total").style.display = "none";
        document.querySelector("#cart").style.justifyContent = "flex-start";
        checkoutBtn.style.display = "none";
        paymentScreen.style.display = "block";
    });
})


    const deliveryForm = document.getElementById("fake-delivery-form");
    const scheduleForm = document.getElementById("fake-schedule-form");
    const orderRadios = document.getElementsByName("order");

    orderRadios.forEach(radio => {
        radio.addEventListener("change", function (){
            if(this.value === "delivery"){
                deliveryForm.style.display = "block";
                scheduleForm.style.display = "none";
            } 
            else if(this.value === "schedule"){
                deliveryForm.style.display = "none";
                scheduleForm.style.display = "block";
            } 
            else{
                deliveryForm.style.display = "none";
                scheduleForm.style.display = "none";
            }
        });
    });



    const payNowBtn = document.querySelector(".payNow");

    payNowBtn.addEventListener("click", function (e) {
        e.preventDefault();


        const cardNum = document.querySelector(".cardNum").value.trim();
        const expiry = document.querySelector(".my").value.trim();
        const cvc = document.querySelector(".cvc").value.trim();

        if (!(cardNum && expiry && cvc)) return;

        const confirmationScreen = document.querySelector(".confirmationScreen");
        const orderedItems = document.querySelector(".OrderedItems");
        const totalPrice = document.querySelector(".totalPrice");
        const addressDiv = document.querySelector(".address");
        const downloadDiv = document.querySelector(".download");

        orderedItems.innerHTML = "";
        addressDiv.innerHTML = "";
        downloadDiv.innerHTML = "";

        let receiptText = "ORDER RECEIPT\n\n";
        let orderTotal = 0;

        const cartItems = document.querySelectorAll(".items .cart-item");

        cartItems.forEach(item => {
            const name = item.dataset.name;
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.dataset.quantity);
            const itemTotal = price * quantity;

            orderTotal += itemTotal;

            orderedItems.insertAdjacentHTML("beforeend",
                `${name} x${quantity} — $${itemTotal.toFixed(2)}<br>`);

            receiptText += `${name} x${quantity} — $${itemTotal.toFixed(2)}\n`;
        });

        const option = document.querySelector('input[name="order"]:checked').value;
        if (option === "delivery"){
            const street = deliveryForm.querySelector(".street").value;
            const city = deliveryForm.querySelector(".city").value;
            const state = deliveryForm.querySelector(".state").value;
            const zip = deliveryForm.querySelector(".zip").value;

            addressDiv.innerHTML = `
                <strong>Delivery Address:</strong><br>
                ${street}<br>${city}, ${state} ${zip}
            `;

            receiptText += `\nDelivery Address:\n${street}\n${city}, ${state} ${zip}\n`;
        } 
        else if (option === "schedule") {
            const date = scheduleForm.querySelector(".date").value;
            const time = scheduleForm.querySelector(".time").value;

            addressDiv.innerHTML = `
                <strong>Scheduled Pickup:</strong><br>
                Ready on: ${date}<br>
                At: ${time}
            `;

            receiptText += `\nScheduled Order:\nOrder will be ready for pick up on: ${date}\nAt: ${time}\n`;
        }
        else{
            addressDiv.style.display = "none";
        }

        const finalTotal = orderTotal + tip;

        receiptText += `\nTip: $${tip.toFixed(2)}`;
        receiptText += `\nTOTAL: $${finalTotal.toFixed(2)}`;

        totalPrice.textContent = `Total: $${finalTotal.toFixed(2)}`;

        // Reset cart
        document.querySelector(".items").innerHTML = "";
        document.querySelector(".total").textContent = "Total: $0.00";

        document.querySelectorAll(".item").forEach(i => {
            i.querySelector(".add").style.display = "block";
            i.querySelector(".itemRemove").style.display = "none";
        });

        // Download receipt button
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
    });

});
});


document.querySelector(".newOrder").addEventListener("click", function () {

    total = 0;
    tip = 0;
    updateTotal();

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

    const scheduleForm = document.getElementById("fake-schedule-form");
    scheduleForm.reset();
    scheduleForm.style.display = "none";

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
});


window.addEventListener("storage", () => {
    menuRetriver();
    refresh(sammies, sides, drinks);
});

function menuRetriver() {
    totalSammies = [];
    totalSides = [];
    totalDrinks = [];

    for (let i = 0; i < localStorage.length; i++) {
        let keyName = localStorage.key(i).replace(/[0-9]/g, ``);
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let itemInfo = new MenuItem(item.name, item.imageURL, item.description, item.allergies, item.price);

        if (keyName === "sammie") totalSammies.push(itemInfo);
        else if (keyName === "side") totalSides.push(itemInfo);
        else if (keyName === "drink") totalDrinks.push(itemInfo);
    }
}

function refresh(sammies, sides, drinks) {
    sammies.innerHTML = "";
    totalSammies.forEach(s => sammies.insertAdjacentHTML("beforeend", s.appendItem()));

    drinks.innerHTML = "";
    totalDrinks.forEach(d => drinks.insertAdjacentHTML("beforeend", d.appendItem()));

    sides.innerHTML = "";
    totalSides.forEach(s => sides.insertAdjacentHTML("beforeend", s.appendItem()));
}