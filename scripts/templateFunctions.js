
function renderFoodCard(categoryID, itemID) {
    return /*html*/`
        <div class="food-card">
            <img class="food-img" src="assets/media/${foodItems[categoryID].items[itemID].foodImageFileName}" />
            <div class="food-listing">
                <div class="food-title"><h2>${foodItems[categoryID].items[itemID].foodTitle}</h3></div>
                <div class="food-description"><p>${foodItems[categoryID].items[itemID].foodDescription}</p></div>
            </div>
            <div class="price-section">
                <p class="pricing">${foodItems[categoryID].items[itemID].foodPrice.toFixed(2).replace('.', ',')}€</p>
                <button class="add-basket-button" onclick="addToBasket(${categoryID},${itemID})"><p>Add to basket</p></button>
            </div>
        </div>
    `
}


function renderItemInBasket(categoryID, itemID) {
    return /*html*/`
            <div class="item">
                <div class="item-top-container">
                    
                    <p>${foodItems[categoryID].items[itemID].foodTitle}</p>
                    <button class="trash-button" id="basket-item-delete-id${categoryID}_${itemID}" 
                    onclick="deleteFromBasket(${categoryID}, ${itemID})">
                    <img src="./assets/media/trash-icon.png">
                    </button>
                </div>
                <div class="item-bottom-container">
                    <div class="item-bottom-button-container">
                        <button class="trash-button" id="basket-item-delete-id${categoryID}_${itemID}" 
                        onclick="subtractFromBasket(${categoryID}, ${itemID})">
                        <p>-</p>
                        </button>
                        <p id="basket-item-amount-id${categoryID}_${itemID}">${foodItems[categoryID].items[itemID].amount}x</p>
                        <button class="trash-button" id="basket-item-delete-id${categoryID}_${itemID}" 
                        onclick="addToBasket(${categoryID}, ${itemID})">
                        <p>+</p>
                        </button>
                    </div>
                    <p id="basket-item-price-id${categoryID}_${itemID}">$${getPrice(categoryID, itemID)}</p>
                </div>
            </div>
        `
}

function renderPriceSection() {
    return /*html*/`
        <div>
            
        </div>
    `
}