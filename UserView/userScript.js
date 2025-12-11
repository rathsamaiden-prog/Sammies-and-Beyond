import { MenuItem } from "../menuItem.js";
import { OrderTicket } from "../orderTicket.js";

const menu = document.getElementsByClassName("menu")[0];

console.log(localStorage.length)

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
    "Swirling layers of cheese and roast beef.",
    "Gluten, Dairy, Meat",
    "10.99"
);

const sammie6 = new MenuItem(
    "The Space Jamwich",
    "The-Space-Jamwich.png",
    "Peanut butter, banana, and berry jam fusion.",
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
  <section id="sides">sides</section>
  <section id="drinks">drinks</section>
`);

console.log(localStorage.length)

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
let totalOrders_PickUp = []
let totalOrders_Delivery = []
let totalOrders_Scheduled = []

console.log(localStorage.length)

window.addEventListener(`load`, () => {
    menuRetriver()
    refresh(sammies, sides, drinks)
    RolePermissions()
    refreshFavOrders()
 
});


console.log(localStorage.length)

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
    const favOrderBtn = document.getElementById("favOrderBtn");
    favOrderBtn.addEventListener("click",favoriteOrder)


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

        let orderTicket = `\n`
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
            orderTicket += `${name} x${quantity}\n`
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

            totalOrders_Delivery.push(new OrderTicket(orderTicket, `DELIVERY`))
            localStorage.setItem(`orders-delivery`, JSON.stringify(totalOrders_Delivery))
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

            totalOrders_Scheduled.push(new OrderTicket(orderTicket, `SCHEDULED`))
            localStorage.setItem(`orders-scheduled`, JSON.stringify(totalOrders_Scheduled))
        }
        else{
            addressDiv.style.display = "none";

            totalOrders_PickUp.push(new OrderTicket(orderTicket, `PICK UP`))
            localStorage.setItem(`orders-pickUp`, JSON.stringify(totalOrders_PickUp))
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
})

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
    RolePermissions();
    refreshFavOrders()
 
});

let itemCount = 0
function sendItems(type, item){
    let name = type+(++itemCount)
    localStorage.setItem(name, JSON.stringify(item))
}

if(localStorage.length === 0){
    // send sammies
    totalSammies.forEach(s => sendItems(`sammie`, s))
    itemCount = 0
    // send drinks
    totalDrinks.forEach(d => sendItems(`drink`, d))
    itemCount = 0
    // send sides
    totalSides.forEach(s => sendItems(`side`, s))
    itemCount = 0
}

function menuRetriver() {
    console.log(localStorage.length)
    if(localStorage.length === 0) return;
    totalSammies = [];
    totalSides = [];
    totalDrinks = [];

  
    for (let i = 0; i < localStorage.length; i++) {
         let key = localStorage.key(i);
         if (!key.startsWith("sammie") && !key.startsWith("side") && !key.startsWith("drink")) {
            continue;
         }
        let keyName = localStorage.key(i).replace(/[0-9]/g, ``);
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let itemInfo = new MenuItem(item.name, item.imageURL, item.description, item.allergies, item.price);
       
        
        if (keyName === "sammie") totalSammies.push(itemInfo);
        else if (keyName === "side") totalSides.push(itemInfo);
        else if (keyName === "drink") totalDrinks.push(itemInfo);
    }
}
let favoriteItems = (JSON.parse(localStorage.getItem("favorites")) || [])
    .map(item => new MenuItem(item.name, item.imageURL, item.description, item.allergies, item.price));

function refresh(sammies, sides, drinks) {
    sammies.innerHTML = "";
    totalSammies.forEach(s => sammies.appendChild(s.appendItem()));

    drinks.innerHTML = "";
    totalDrinks.forEach(d => drinks.appendChild(d.appendItem()));

    sides.innerHTML = "";
    totalSides.forEach(s => sides.appendChild(s.appendItem()));
}



document.addEventListener("click", (e) => {
    if (e.target.classList.contains("favBtn")) {
        const btn = e.target;
        const itemDiv = btn.closest(".item");
        const itemName = itemDiv.querySelector("#name").textContent;

        
        const alreadyFav = favoriteItems.some(i => i.name === itemName);

        if (!alreadyFav) {
            
            const itemObj = totalSammies.concat(totalSides, totalDrinks)
                .find(i => i.name === itemName);
            favoriteItems.push(itemObj);
            btn.textContent = "❤️"; 
        } else {
            
            favoriteItems = favoriteItems.filter(i => i.name !== itemName);
            btn.textContent = "♡"; 

            document.querySelectorAll(".item").forEach(item=>{
                const name = item.querySelector("#name")?.textContent;
                if(name===itemName){
                    const heartBtn = item.querySelector(".favBtn");
                    if (heartBtn) heartBtn.textContent = "♡";
                }
            });
  
        }
        localStorage.setItem("favorites", JSON.stringify(favoriteItems));
        refreshFavorites();
     }
   
    });
function refreshFavorites() {
    const favoritesRow = document.querySelector("#favorites .favorites-row");
    if (!favoritesRow) return;

    favoritesRow.innerHTML = ""; 

    favoriteItems.forEach(item => {
        const itemEl = item.appendItem();
        itemEl.querySelector(".favBtn").textContent = "❤️"; 
        favoritesRow.appendChild(itemEl);
    });
    
}
refreshFavorites();





function RolePermissions() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || { role: "guest" };

    const logoutBtn = document.getElementById("logoutBtn");
    const managerBtn = document.getElementById("mngView");

    const favSection = document.getElementById("favorites"); 
     
    const scheduleRadio = document.querySelector('input[name="order"][value="schedule"]'); 
    const favItemButton = document.getElementById("favItemsButton");
    const favItemsButton = document.getElementById("favItemsButton");
    const favOrderSection = document.getElementById("favOrder");
    const favOrderbtn = document.getElementById("favOrderSection");
    const favObtn = document.getElementById("favOrderBtn");

   
    const favButtons = document.querySelectorAll(".favBtn");
    if (currentUser.role === "guest") {
        logoutBtn.style.display = "none";
        managerBtn.style.display = "none";
        scheduleRadio.disabled = true
        favSection.style.display = "none";
        favButtons.forEach(btn => btn.style.display = "none");
        scheduleRadio.style.display = "none"; 
        favOrderbtn.style.display = "none";
        favItemsButton.style.display = "none";
        favOrderSection.style.display = "none";
        favObtn.style.display = "none";
    }
    else if (currentUser.role === "user") {
        logoutBtn.style.display = "block";
        managerBtn.style.display = "none";

        favSection.style.display = "block";
        favButtons.forEach(btn => btn.style.display = "inline-block");
        scheduleRadio.style.display = "inline-block"; 
        
        favOrderBtn.style.display = "inline-block";
        favOrderSection.style.display = "inline-block";
    }
    else if (currentUser.role === "manager") {
        logoutBtn.style.display = "block";
        managerBtn.style.display = "block";

        favSection.style.display = "block";
        favButtons.forEach(btn => btn.style.display = "inline-block");
        scheduleRadio.style.display = "inline-block"; 
        favItemButton.style.display = "inline-block";
        favOrderBtn.style.display = "inline-block";
        favOrderSection.style.display = "inline-block";
    }
}






const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser"); 
     localStorage.setItem("currentUser", JSON.stringify({ role: "guest" }));
    window.location.href = "../index.html"; 
    
});



function favoriteOrder(){
    const cartItems = document.querySelectorAll(".items .cart-item");
    const favOrders = JSON.parse(localStorage.getItem("favOrders"))||[]
    
    
        if(cartItems.length === 0){
            alert("empty cart")
            return
        }
    const newOrder =[]

    cartItems.forEach(item=>{
        const name = item.dataset.name;
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.dataset.quantity);

        newOrder.push({name, price, quantity});

    })
    favOrders.push(newOrder)

    localStorage.setItem("favOrders", JSON.stringify(favOrders));
    alert("order saved")
    refreshFavOrders()
    }



function refreshFavOrders() {
    const favOrders = JSON.parse(localStorage.getItem("favOrders")) || [];
    const favoritesRow = document.getElementById("favoritesOrderRow");
    if (!favoritesRow) return;

    favoritesRow.innerHTML = "";

    favOrders.forEach((order, index) => {
        const orderBox = document.createElement("div");
        orderBox.classList.add("fav-order");

        orderBox.innerHTML = `
        <button class="delete-btn">Delete</button>
        <h3>Favorite Order #${index + 1}</h3>
        
        `;

        order.forEach(item => {
            const p = document.createElement("p");
            p.textContent = `${item.name} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`;
            orderBox.appendChild(p);
        });
        const deleteBtn = orderBox.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => deleteFavoriteOrder(index));

        favoritesRow.appendChild(orderBox);
    });
}
favOrderBtn.addEventListener("click", favoriteOrder)




function deleteFavoriteOrder(index) {
    
    const favOrders = JSON.parse(localStorage.getItem("favOrders")) || [];
    favOrders.splice(index, 1);

   
    localStorage.setItem("favOrders", JSON.stringify(favOrders));

    refreshFavOrders()
}
    
