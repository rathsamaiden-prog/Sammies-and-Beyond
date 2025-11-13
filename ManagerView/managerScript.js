import { MenuItem } from "/menuItem.js";

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

const menu = document.getElementById(`menu`)
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
let data = `something`
localStorage.setItem('keyName', data);

// MENU RETRIEVER
const retrievedValue = localStorage.getItem('keyName');
console.log(retrievedValue)



// BTN LISTENERS
const commitBtn = document.getElementById(`commit-btn`)
commitBtn.addEventListener(`click`, commitAdd)