const itemData = {
  itemName: "Apple",
  itemImageURL: "apple.jpg",
  itemDescription: "Sweet with a bit of tang",
  itemAllergies: "Fruit",
  itemPrice: "1.99"
};

const menu = document.getElementsByClassName("menu")[0];

const itemHTML = `
<div class="item">
    <div class="itemName">
        <p id="name">${itemData.itemName}</p>
    </div>
    <div class="itemImg">
        <img src="${itemData.itemImageURL}" alt="item img">
    </div>
    <div class="itemInfo">
        <p id="desc">${itemData.itemDescription}</p>
        <p id="dietR">${itemData.itemAllergies}</p>
    </div>
    <div class="itemFooter">
        <div class="itemPrice">
            <p id="price">$${itemData.itemPrice}</p>
        </div>
        <div class="itemAdd">
            <button class="add">Add</button>
        </div>
    </div>
</div>
`;

menu.insertAdjacentHTML("beforeend", itemHTML);