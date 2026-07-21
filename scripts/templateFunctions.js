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