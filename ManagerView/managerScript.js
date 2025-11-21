import { MenuItem } from "/menuItem.js";
// localStorage.clear()

// TOTAL ITEMS
let totalSammies, totalDrinks, totalSides

// MENU RETRIEVER
totalSammies = []
totalSides = []
totalDrinks = []

for(let i = 0; i < localStorage.length; i++){
    let keyName = localStorage.key(i).replace(/[0-9]/g, ``)
    console.log(keyName)
    let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
    if(keyName === `sammie`) totalSammies.push(new MenuItem(item.name, item.imageURL, item.description, item.allergies, item.price))
    else if(keyName === `side`) totalSides.push(new MenuItem(item.name, item.imageURL, item.description, item.allergies, item.price))
    else if(keyName === `drink`) totalDrinks.push(new MenuItem(item.name, item.imageURL, item.description, item.allergies, item.price))
}

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

// Add sammies
totalSammies.forEach(s => sammies.insertAdjacentHTML("beforeend", s.appendItem()));

// Add drinks
totalDrinks.forEach(d => drinks.insertAdjacentHTML("beforeend", d.appendItem()));

// Add sides
totalSides.forEach(s => sides.insertAdjacentHTML("beforeend", s.appendItem()));


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

const img = document.getElementById(`img-container`)
const imgURL = document.getElementById(`myFile`)
const itemName = document.getElementsByClassName(`editInput`)[0]
const itemPrice = document.getElementsByClassName(`editInput`)[1]
const itemAllergy = document.getElementsByClassName(`editInput`)[2]
const itemDescr = document.getElementById(`item-description`)

function addItem(section){
    let itemInfo = new MenuItem(itemName.value, "Orbit-Tots.png", itemDescr.value, itemAllergy.value, itemPrice.value)
    if(section === `sammie`){
        sammies.insertAdjacentHTML("beforeend", itemInfo.appendItem());
        totalSammies.push(itemInfo)
    } 
    if(section === `side`){
        sides.insertAdjacentHTML("beforeend", itemInfo.appendItem());
        totalSides.push(itemInfo)
    }
    if(section === `drink`){
        drinks.insertAdjacentHTML("beforeend", itemInfo.appendItem());
        totalDrinks.push(itemInfo)
    } 
}

function sendMenu(){
    localStorage.clear()
    console.log(totalSammies)
    let itemCount = 0
    function sendItems(type, item){
        let name = type+(++itemCount)
        localStorage.setItem(name, JSON.stringify(item))
    }
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






// BTN LISTENERS
const addSammieBtn = document.getElementById(`add-sammie`)
const addSideBtn = document.getElementById(`add-side`)
const addDrinkBtn = document.getElementById(`add-drink`)

addSammieBtn.addEventListener(`click`, () => addItem(`sammie`))
addSideBtn.addEventListener(`click`, () => addItem(`side`))
addDrinkBtn.addEventListener(`click`, () => addItem(`drink`))

const commitBtn = document.getElementById(`commitBtn`)

commitBtn.addEventListener(`click`, sendMenu)