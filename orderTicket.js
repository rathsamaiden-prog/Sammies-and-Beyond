export class OrderTicket{
    constructor(items, type){
        this.items = items
        this.type = type
    }

    appendOrder(){
        const template = document.createElement("template");
        template.innerHTML = `
        <div class="orderTickets">
            <div id="ticket-type" class="flexBox">
                <h2>${this.type}</h2>
                <label class="switch">
                    <input type="checkbox" class="orderToggle">
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="orderedItems">${this.items}</div>
        </div>`.trim()

        const el = template.content.firstElementChild;

        el._menuItemRef = this;

        return el;
    }
}