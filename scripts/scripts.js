console.log("asd");
const burgerSectionRef = document.getElementById("burger-section");
function renderStoreListing() {
    for (let categoryID = 0; categoryID < foodItems.length; categoryID++) {
        if (foodItems[categoryID].category == "Burgers") {
            for (let itemID = 0; itemID < foodItems[categoryID].items.length; itemID++) {
                burgerSectionRef.innerHTML += renderFoodCard(categoryID, itemID);
            }
        }
    }
}
renderStoreListing();

function addToBasket(categoryID, itemID) {
    console.log(foodItems[categoryID].items[itemID]);
}

