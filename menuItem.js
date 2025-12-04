export class MenuItem {
  constructor(name, imageURL, description, allergies, price) {
    this.name = name;
    this.imageURL = imageURL;
    this.description = description;
    this.allergies = allergies;
    this.price = price;
}

  appendItem() {
    const template = document.createElement("template");
    if(typeof this.imageURL === `string` && this.imageURL.startsWith(`data`)){
      template.innerHTML = `
        <div class="item">
          <div class="itemName">
              <p id="name">${this.name}</p>
          </div>
          <div class="itemImg">
              <img src="${this.imageURL}" alt="item img">
          </div>
          <div class="itemInfo">
              <p id="desc">${this.description}</p>
              <p id="dietR">${this.allergies}</p>
          </div>
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
              <div class="itemFav">
                  <button class="favBtn">♡</button>
              </div>
          </div>
        </div>
      `.trim();
    }else{
      template.innerHTML = `
        <div class="item">
          <div class="itemName">
              <p id="name">${this.name}</p>
          </div>
          <div class="itemImg">
              <img src="../Imgs/${this.imageURL}" alt="item img">
          </div>
          <div class="itemInfo">
              <p id="desc">${this.description}</p>
              <p id="dietR">${this.allergies}</p>
          </div>
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
              <div class="itemFav">
                  <button class="favBtn">♡</button>
              </div>
          </div>
        </div>
      `.trim();
    }

    const el = template.content.firstElementChild;

    el._menuItemRef = this;

    return el;
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