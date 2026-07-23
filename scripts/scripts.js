const basketRef = document.getElementById("basket");
const basketItemRef = document.getElementById("basket-item-container");
const subtotalRef = document.getElementById("subtotal");
const totalRef = document.getElementById("total");
const buyButtonRef = document.getElementById("buy-now-button");


//TODO
// fix position sticky on basket
//anzeigen mit mobile machen durch classlistadd
//permanent anzeigen in desktop view
function renderStoreListing() {
    let foodSectionRef = "";
    for (let categoryID = 0; categoryID < foodItems.length; categoryID++) {
        switch (foodItems[categoryID].category) {
            case "Burgers":
                foodSectionRef = document.getElementById("burger-section");
                break;
            case "Pizzas":
                foodSectionRef = document.getElementById("pizza-section");
                break;
            case "Salads":
                foodSectionRef = document.getElementById("salad-section");
                break;
        }
        for (let itemID = 0; itemID < foodItems[categoryID].items.length; itemID++) {
            foodSectionRef.innerHTML += renderFoodCard(categoryID, itemID);
        }
    }
}

function addToBasket(categoryID, itemID) {
    foodItems[categoryID].items[itemID].amount++
    if (foodItems[categoryID].items[itemID].amount == 1) {
        renderBasketItem();
    } else {
        let basketItemAmountId = document.getElementById(`basket-item-amount-id` + categoryID + "_" + itemID);
        let basketItemPriceId = document.getElementById(`basket-item-price-id` + categoryID + "_" + itemID);
        basketItemAmountId.innerHTML = /*html*/`${foodItems[categoryID].items[itemID].amount}x`;
        basketItemPriceId.innerHTML = /*html*/`$${getPrice(categoryID, itemID).toFixed(2)}`;
    }
    updateBasketPrice();
}

function getPrice(categoryID, itemID) {
    let amount = foodItems[categoryID].items[itemID].amount;
    let price = foodItems[categoryID].items[itemID].foodPrice;
    let calculatedPrice = amount * price;
    return calculatedPrice;
}

function renderBasketItem() {
    basketItemRef.innerHTML = "";
    for (let categoryID = 0; categoryID < foodItems.length; categoryID++) {
        for (let itemID = 0; itemID < foodItems[categoryID].items.length; itemID++) {
            if (foodItems[categoryID].items[itemID].amount > 0) {
                basketItemRef.innerHTML += renderItemInBasket(categoryID, itemID);
            }
        }
    }
    updateBasketPrice();
}

function deleteFromBasket(categoryID, itemID) {
    foodItems[categoryID].items[itemID].amount = 0;
    renderBasketItem();
}

function subtractFromBasket(categoryID, itemID) {
    foodItems[categoryID].items[itemID].amount--;
    renderBasketItem();
}

function updateBasketPrice() {
    let updatedPrice = 0;
    subtotalRef.innerHTML = "";
    totalRef.innerHTML = "";
    buyButtonRef.innerHTML = "Buy now";
    let basketEmpty = true;
    for (let categoryID = 0; categoryID < foodItems.length; categoryID++) {
        for (let itemID = 0; itemID < foodItems[categoryID].items.length; itemID++) {
            if (foodItems[categoryID].items[itemID].amount > 0) {
                updatedPrice += getPrice(categoryID, itemID);
            }
        }
    }
    updateBasketPriceReferences(updatedPrice);
}

function updateBasketPriceReferences(updatedPrice) {
    if (updatedPrice == 0) {
        subtotalRef.innerHTML = `$0`;
        totalRef.innerHTML = `$0`;
        buyButtonRef.innerHTML = `Buy now`;
    } else {
        subtotalRef.innerHTML = `$${updatedPrice.toFixed(2)}`;
        totalRef.innerHTML = `$${(updatedPrice + 5.99).toFixed(2)}`;
        buyButtonRef.innerHTML = `Buy now (${(updatedPrice + 4.99).toFixed(2)})`;
    }
}

renderStoreListing();
