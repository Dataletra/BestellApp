let basket = [];
let sum = 0;

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

renderStoreListing();

function addToBasket(categoryID, itemID) {
    basket.push(foodItems[categoryID].items[itemID]);
    getSumBasket();
    console.log(sum);

}
function getSumBasket() {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket);
        sum += basket[i].foodPrice;
    }
}
