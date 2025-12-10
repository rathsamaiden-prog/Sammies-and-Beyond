import { MenuItem } from "../menuItem.js";
import { OrderTicket } from "../orderTicket.js";
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

// refresh orders
const ticketNum = document.getElementsByClassName(`ticketNum`)
let totalOrders_Delivery, totalOrders_PickUp, totalOrders_Scheduled

refreshOrders()
window.addEventListener(`storage`, refreshOrders)

function refreshOrders(){
    totalOrders_PickUp = JSON.parse(localStorage.getItem(`orders-pickUp`)) || []
    if(totalOrders_PickUp){
        totalOrders_PickUp = totalOrders_PickUp.map(t => new OrderTicket(t.items, t.type))
        ticketNum[0].innerHTML = totalOrders_PickUp.length
    }
    totalOrders_Delivery = JSON.parse(localStorage.getItem(`orders-delivery`)) || []
    if(totalOrders_Delivery){
        totalOrders_Delivery = totalOrders_Delivery.map(t => new OrderTicket(t.items, t.type))
        ticketNum[1].innerHTML = totalOrders_Delivery.length
    }
    totalOrders_Scheduled = JSON.parse(localStorage.getItem(`orders-scheduled`)) || []
    if(totalOrders_Scheduled){
        totalOrders_Scheduled = totalOrders_Scheduled.map(t => new OrderTicket(t.items, t.type))
        ticketNum[2].innerHTML = totalOrders_Scheduled.length
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
    localStorage.setItem("currentUser", JSON.stringify({ email: "manager", name: "Manager", role: "manager" }))

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
let originalParent, originalNextSibling, draggableItem, draggableItemProto, offsetX, offsetY

document.addEventListener(`mousedown`, (e) => {
    const removeBtn = e.target.closest(`.remove`)
    if(removeBtn){
        removeItem(e.target.closest(`.item`))
        return
    }
    draggableItem = e.target.closest(`.item`)
    if(!draggableItem) return

    draggableItemProto = draggableItem

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
        imgCont.style.background = `url(../Imgs/${draggableItem._menuItemRef.imageURL})`
        imgCont.style.backgroundSize = `100% 100%`
        workingURL = `../Imgs/${draggableItem._menuItemRef.imageURL}`
        imgURL.style.display = `none`
        // add remove btn
        document.getElementById(`remove-img-btn`).style.display = `block`

        itemName.value = draggableItem._menuItemRef.name
        itemPrice.value = draggableItem._menuItemRef.price
        itemAllergy.value = draggableItem._menuItemRef.allergies
        itemDescr.value = draggableItem._menuItemRef.description

        originalParent.insertBefore(draggableItem, originalNextSibling)
        draggableItem.style.position = "static"

        // add save btn
        addSideBtn.style.display = `none`
        addDrinkBtn.style.display = `none`
        addSammieBtn.style.display = `none`
        saveBtn.style.display = `block`

    } else {
        if (originalNextSibling) {
            originalParent.insertBefore(draggableItem, originalNextSibling)
        } else {
            originalParent.appendChild(draggableItem)
        }
        draggableItem.style.position = "static"
    }
    dropZone.classList.replace(`dropZone`, `addOrEditItem-Container`)
})

imgURL.addEventListener(`change`, function(){
    const file = imgURL.files[0]
    const reader = new FileReader()

    reader.onload = function(e) {
        workingURL = e.target.result
        imgCont.style.background = `url(${workingURL})`
        imgCont.style.backgroundSize = `100% 100%`
        imgURL.style.display = `none`
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

    clearView()
}

let key

function saveChange(obj){
    for (let i = 0; i < localStorage.length; i++) {
        if(JSON.stringify(obj).includes(localStorage.getItem(localStorage.key(i))))
            key = localStorage.key(i)
    }
    
    obj._menuItemRef.imgURL = workingURL
    obj._menuItemRef.name = itemName.value
    obj._menuItemRef.price = itemPrice.value
    obj._menuItemRef.allergies = itemAllergy.value
    obj._menuItemRef.description = itemDescr.value

    localStorage.setItem(key, obj)

    obj.children[0].firstElementChild.innerHTML = itemName.value
    obj.children[1].firstElementChild.src = workingURL
    obj.children[2].firstElementChild.innerHTML = itemDescr.value
    obj.children[2].lastElementChild.innerHTML = itemAllergy.value
    obj.children[3].firstElementChild.innerHTML = `$${itemPrice.value}`

    addSideBtn.style.display = `block`
    addDrinkBtn.style.display = `block`
    addSammieBtn.style.display = `block`
    saveBtn.style.display = `none`

    draggableItem = null

    clearView()
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
    imgCont.style.background = ``
    imgCont.style.backgroundSize = `none`
    imgURL.style.display = `inline`
    workingURL = ``
    document.getElementById(`remove-img-btn`).style.display = `none`
}

function clearView(){
    removeImg()
    itemName.value = ``
    itemPrice.value = ``
    itemAllergy.value = ``
    itemDescr.value = ``
}

const orderView = document.getElementById(`ticket-cont`)
const nonActiveTitle = document.getElementById(`non-active-title`)
let ticketView

function viewTickets(type){
    ticketView = type
    orderView.querySelectorAll(`div`).forEach(ticket => ticket.remove())
    nonActiveTitle.style.display = `none`
    if(!type || type.length === 0)
        nonActiveTitle.style.display = `block`
    else
        type.forEach((ticket) => {
            orderView.appendChild(ticket.appendOrder())
        })
    orderView.scrollLeft = -(orderView.getBoundingClientRect().width)
}

let completedOrdersArr = []
let orderToggle, orderTicket

document.addEventListener(`click`, (e) => {
    orderToggle = e.target.closest(`.orderTickets input[type='checkbox']`)
    if (!orderToggle) return

    orderTicket = orderToggle.closest(`.orderTickets`)

    if(orderToggle.checked && !completedOrdersArr.includes(orderTicket._menuItemRef))
        completedOrdersArr.push(orderTicket._menuItemRef)
    else
        completedOrdersArr = completedOrdersArr.filter(i => i !== orderTicket._menuItemRef)
})

function completeOrders(arr){
    if(ticketView == totalOrders_Delivery){
        totalOrders_Delivery = totalOrders_Delivery.filter(ticket => !arr.includes(ticket))
        ticketView = totalOrders_Delivery
    }else if(ticketView == totalOrders_PickUp){
        totalOrders_PickUp = totalOrders_PickUp.filter(ticket => !arr.includes(ticket))
        ticketView = totalOrders_PickUp
    }else{
        totalOrders_Scheduled = totalOrders_Scheduled.filter(ticket => !arr.includes(ticket))
        ticketView = totalOrders_Scheduled
    }

    completedOrdersArr = []

    localStorage.setItem(`orders-delivery`, JSON.stringify(totalOrders_Delivery))
    localStorage.setItem(`orders-scheduled`, JSON.stringify(totalOrders_Scheduled))
    localStorage.setItem(`orders-pickUp`, JSON.stringify(totalOrders_PickUp))

    refreshOrders()
    viewTickets(ticketView)
}



// BTN LISTENERS
const addSammieBtn = document.getElementById(`add-sammie`)
const addSideBtn = document.getElementById(`add-side`)
const addDrinkBtn = document.getElementById(`add-drink`)
const saveBtn = document.getElementById(`save-btn`)

addSammieBtn.addEventListener(`click`, () => addItem(`sammie`))
addSideBtn.addEventListener(`click`, () => addItem(`side`))
addDrinkBtn.addEventListener(`click`, () => addItem(`drink`))
saveBtn.addEventListener(`click`, () => saveChange(draggableItemProto))

const commitBtn = document.getElementById(`commit-btn`)
const removeImgBtn = document.getElementById(`remove-img-btn`)

commitBtn.addEventListener(`click`, () => sendMenu())
removeImgBtn.addEventListener(`click`, () => removeImg())

const completeOrdersBtn = document.getElementById(`complete-orders-btn`)
const viewPickUpBtn = document.getElementsByClassName(`ticketViews-Btn`)[0]
const viewDeliveryBtn = document.getElementsByClassName(`ticketViews-Btn`)[1]
const viewScheduledBtn = document.getElementsByClassName(`ticketViews-Btn`)[2]

completeOrdersBtn.addEventListener(`click`, ()  => completeOrders(completedOrdersArr))
viewPickUpBtn.addEventListener(`click`, () => viewTickets(totalOrders_PickUp))
viewDeliveryBtn.addEventListener(`click`, () => viewTickets(totalOrders_Delivery))
viewScheduledBtn.addEventListener(`click`, () => viewTickets(totalOrders_Scheduled))

const localStorageUsageInBytes = JSON.stringify(localStorage).length * 2;
const localStorageUsageInKB = localStorageUsageInBytes / 1024;

console.log(`Current localStorage usage: ${localStorageUsageInKB.toFixed(2)} KB`);
