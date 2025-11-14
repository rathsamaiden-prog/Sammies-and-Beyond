export class MenuItem {
  constructor(name, imageURL, description, allergies, price) {
    this.name = name;
    this.imageURL = imageURL;
    this.description = description;
    this.allergies = allergies;
    this.price = price;
}

  appendItem() {
    return `
      <div class="item">
            <!-- Item Name -->
            <div class="itemName">
                <p id="name">${this.name}</p>
            </div>
            <!-- Item Image -->
            <div class="itemImg">
                <img src="/Imgs/${this.imageURL}" alt="item img"></img>
            </div>
            <!-- Item Info -->
            <div class="itemInfo">
                <p id="desc">${this.description}</p>
                <p id="dietR">${this.allergies}</p>
            </div>
            <!-- Item Footer: Price + Add Button -->
            <div class="itemFooter">
                <div class="itemPrice">
                    <p id="price">$${this.price}</p>
                </div>
                <div class="itemAdd">
                    <button class="add">Add</button>
                </div>
                <div class="itemRemove">
                    <button class="remove">Remove</button>
                </div>
            </div>
      </div>
    `;
  }

  removeItem(){
    // something
  }

  editName(name){
    this.name = name
  }

  editImg(url){
    this.imageUrl = url
  }

  editDescr(txt){
    this.description = txt
  }

  editAllergy(txt){
    this.allergies = txt
  }

  editPrice(price){
    this.price = price
  }
}