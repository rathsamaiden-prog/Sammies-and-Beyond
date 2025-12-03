import { MenuItem } from "/menuItem.js";
// localStorage.clear()

// MENU RETRIEVER
let totalSammies = []
let totalSides = []
let totalDrinks = []

for(let i = 0; i < localStorage.length; i++){
    let keyName = localStorage.key(i).replace(/[0-9]/g, ``)
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

refresh(sammies, sides, drinks)

function refresh(sammies, sides, drinks){
    // Add sammies
    if(sammies){
        sammies.innerHTML = ``
        totalSammies.forEach(s => sammies.appendChild(s.appendItem()));
    }

    // Add drinks
    if(drinks){
        drinks.innerHTML = ``
        totalDrinks.forEach(d => drinks.appendChild(d.appendItem()));
    }

    // Add sides
    if(sides){
        sides.innerHTML = ``
        totalSides.forEach(s => sides.appendChild(s.appendItem()));
    }
}

// ADD - EDIT 

const imgCont = document.getElementById(`img-container`)
const imgURL = document.getElementById(`my-file`)
let workingURL
const itemName = document.getElementsByClassName(`editInput`)[0]
const itemPrice = document.getElementsByClassName(`editInput`)[1]
const itemAllergy = document.getElementsByClassName(`editInput`)[2]
const itemDescr = document.getElementById(`item-description`)

let itemCount = 0
function sendItems(type, item){
    let name = type+(++itemCount)
    localStorage.setItem(name, JSON.stringify(item))
}

function sendMenu(){
    localStorage.clear()
    // send sammies
    totalSammies = totalSammies.filter(s => !(removeList.includes(s.name)))
    totalDrinks = totalDrinks.filter(d => !(removeList.includes(d.name)))
    totalSides = totalSides.filter(s => !(removeList.includes(s.name)))

    totalSammies.forEach(s => sendItems(`sammie`, s))
    itemCount = 0
    // send drinks
    totalDrinks.forEach(d => sendItems(`drink`, d))
    itemCount = 0
    // send sides
    totalSides.forEach(s => sendItems(`side`, s))
    itemCount = 0

    refresh(sammies, sides, drinks)
}

// DRAG AND DROP
const editBox = document.getElementById(`add-or-edit`)
const dropZone = document.getElementsByClassName(`addOrEditItem-Container`)[0].firstElementChild
let isDragging = false
let originalParent, originalNextSibling, draggableItem, offsetX, offsetY

document.addEventListener(`mousedown`, (e) => {
    const removeBtn = e.target.closest(`.remove`)
    if(removeBtn){
        removeItem(e.target.closest(`.item`))
        return
    }
    draggableItem = e.target.closest(`.item`)
    if(!draggableItem) return

    editBox.style.opacity = `0.4`
    dropZone.style.display = `block`
    dropZone.style.backgroundColor = `#06555b`

    originalParent = draggableItem.parentElement
    originalNextSibling = draggableItem.nextElementSibling
    offsetX = e.clientX - draggableItem.getBoundingClientRect().left
    offsetY = e.clientY - draggableItem.getBoundingClientRect().top

    document.body.appendChild(draggableItem)

    draggableItem.style.cursor = 'grabbing';
    draggableItem.style.position = `absolute`

    isDragging = true
    e.preventDefault()
})
document.addEventListener(`mousemove`, (e) =>{
    if(!isDragging) return
    draggableItem.style.left = (e.clientX - offsetX) + `px`
    draggableItem.style.top = (e.clientY - offsetY) + `px`
})

document.addEventListener(`mouseup`, (e) => {
    editBox.style.opacity = `1`
    dropZone.style.display = `none`
    if(!isDragging) return

    isDragging = false
    draggableItem.style.cursor = 'grab';

    const dropRect = editBox.getBoundingClientRect()
    const x = e.clientX
    const y = e.clientY

    const insideDropZone =
        x >= dropRect.left &&
        x <= dropRect.right &&
        y >= dropRect.top &&
        y <= dropRect.bottom

    if (insideDropZone) {
        // EDIT ZONE
        if(imgCont.id == `img-display`)
            imgCont.removeChild(imgCont.lastElementChild)
        const displayImg = document.createElement(`img`)
        displayImg.src = `../Imgs/${draggableItem._menuItemRef.imageURL}`
        imgCont.id = `img-display`
        workingURL = `../Imgs/${draggableItem._menuItemRef.imageURL}`
        imgCont.appendChild(displayImg)
        // add remove btn
        document.getElementById(`remove-img-btn`).style.display = `block`

        itemName.value = draggableItem._menuItemRef.name
        itemPrice.value = draggableItem._menuItemRef.price
        itemAllergy.value = draggableItem._menuItemRef.allergies
        itemDescr.value = draggableItem._menuItemRef.description

        originalParent.insertBefore(draggableItem, originalNextSibling)
        draggableItem.style.position = "static"
    } else {
        if (originalNextSibling) {
            originalParent.insertBefore(draggableItem, originalNextSibling)
        } else {
            originalParent.appendChild(draggableItem)
        }
        draggableItem.style.position = "static"
    }
    draggableItem = null
    dropZone.classList.replace(`dropZone`, `addOrEditItem-Container`)
})

imgURL.addEventListener(`change`, function(){
    const file = imgURL.files[0]
    const reader = new FileReader()

    reader.onload = function(e) {
        workingURL = e.target.result
        const displayImg = document.createElement(`img`)
        displayImg.src = workingURL
        imgCont.id = `img-display`
        imgCont.appendChild(displayImg)
    }

    reader.readAsDataURL(file)

    // add remove btn
    document.getElementById(`remove-img-btn`).style.display = `block`
})

function addItem(section){
    const itemInfo = new MenuItem(itemName.value, workingURL, itemDescr.value, itemAllergy.value, itemPrice.value)
    if(section === `sammie`){
        totalSammies.push(itemInfo)
        refresh(sammies)
    } 
    if(section === `side`){
        totalSides.push(itemInfo)
        refresh(null, sides)
    }
    if(section === `drink`){
        totalDrinks.push(itemInfo)
        refresh(null, null, drinks)
    } 
}

let removeList = []

function removeItem(item){
    const computedStyle = window.getComputedStyle(item)

    if(computedStyle.filter == `none`){
        item.style.filter = `saturate(0)`
        removeList.push(item._menuItemRef.name)
    }else{
        item.style.filter = `none`
        removeList = removeList.filter(itemCheck => itemCheck !== item)
    }
    console.log(removeList)
}

function removeImg(){
    imgCont.lastElementChild.remove()
    imgCont.id = `img-container`
    workingURL = ``
    document.getElementById(`remove-img-btn`).style.display = `none`
}



// BTN LISTENERS
const addSammieBtn = document.getElementById(`add-sammie`)
const addSideBtn = document.getElementById(`add-side`)
const addDrinkBtn = document.getElementById(`add-drink`)

addSammieBtn.addEventListener(`click`, () => addItem(`sammie`))
addSideBtn.addEventListener(`click`, () => addItem(`side`))
addDrinkBtn.addEventListener(`click`, () => addItem(`drink`))

const commitBtn = document.getElementById(`commit-btn`)
const removeImgBtn = document.getElementById(`remove-img-btn`)

commitBtn.addEventListener(`click`, sendMenu)
removeImgBtn.addEventListener(`click`, removeImg)

const localStorageUsageInBytes = JSON.stringify(localStorage).length * 2;
const localStorageUsageInKB = localStorageUsageInBytes / 1024;

console.log(`Current localStorage usage: ${localStorageUsageInKB.toFixed(2)} KB`);