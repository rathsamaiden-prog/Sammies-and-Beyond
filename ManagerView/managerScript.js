import { MenuItem } from "/menuItem.js";

// TOTAL ITEMS
let totalSammies, totalDrinks, totalSides

// MENU RETRIEVER
menuRetriver()

function menuRetriver(){
    totalSammies = []
    totalSides = []
    totalDrinks = []

    for(let i = 0; i < localStorage.length; i++){
        let keyName = localStorage.key(i).replace(/[1-9]/g, ``)
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if(keyName === `sammie`) totalSammies.push(new MenuItem(item.name, item.imageURL, item.description, item.allergies, item.price))
        else if(keyName === `side`) totalSides.push(new MenuItem(item.name, item.imageURL, item.description, item.allergies, item.price))
        else if(keyName === `drink`) totalDrinks.push(new MenuItem(item.name, item.imageURL, item.description, item.allergies, item.price))
    }
}

console.log(totalSammies[0])

// MENU REFRESHER
const menu = document.getElementById(`menu`)
menu.insertAdjacentHTML("afterbegin", `
    <section id="sammies"></section>
    <section id="sides"></section>
    <section id="drinks"></section>
    `);
const sammies = document.getElementById(`sammies`)
const sides = document.getElementById(`sides`)
const drinks = document.getElementById(`drinks`)

refresh(sammies, sides, drinks)

function refresh(sammies, sides, drinks){
    // Add sammies
    totalSammies.forEach(s => sammies.insertAdjacentHTML("beforeend", s.appendItem()));

    // Add drinks
    totalDrinks.forEach(d => drinks.insertAdjacentHTML("beforeend", d.appendItem()));

    // Add sides
    totalSides.forEach(s => sides.insertAdjacentHTML("beforeend", s.appendItem()));
}

console.log(totalDrinks)

// DRAG AND DROP
function dragstartHandler(ev){
    ev.dataTransfer.setData(`text`, ev.target.id)
}
function dragoverHandler(ev){
    ev.preventDefault()
}
function dropHandler(ev){
    ev.preventDefault()
    const data = ev.dataTransfer.getData(`text`)
    ev.target.appendChild(document.getElementById(data))
}

// ADD - EDIT 
let menuItemMap = new Map()

const img = document.getElementById(`img-container`)
const imgURL = document.getElementById(`myFile`)
const itemName = document.getElementsByClassName(`editInput`)[0]
const itemPrice = document.getElementsByClassName(`editInput`)[1]
const itemAllergy = document.getElementsByClassName(`editInput`)[2]
const itemDescr = document.getElementById(`item-description`)

function commitAdd(){
    let value = itemName.value
    let itemInfo = new MenuItem(itemName.value, "Orbit-Tots.png", itemDescr.value, itemAllergy.value, itemPrice.value)
    menuItemMap.set(value, itemInfo)
    menu.insertAdjacentHTML("beforeend", menuItemMap.get(value).appendItem());
    console.log(imgURL.value)
    img.style.backgroundImage = `url(${imgURL.value})`
    const computedStyle = window.getComputedStyle(img);
    console.log(computedStyle.backgroundImage)
}






// MENU SENDER






// BTN LISTENERS
const commitBtns = document.querySelectorAll(`.commitBtns`)
commitBtns.forEach(btn => {
    btn.addEventListener(`click`, commitAdd)
});