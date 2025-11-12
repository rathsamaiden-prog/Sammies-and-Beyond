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

//MENU RETRIEVER
const retrievedValue = localStorage.getItem('keyName');
console.log(retrievedValue)