export class OrderTicket{
    constructor(items, type){
        this.items = items
        this.type = type
    }

    appendOrder(){
        return `
        <div class="orderTickets">
            <h2>${this.type}</h2>
            <div class="orderedItems">${this.items}</div>
        </div>`.trim()
    }
}