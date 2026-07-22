let basket = [];
let sum = 0;
const basketRef = document.getElementById("basket");
const basketItemRef = document.getElementById("basket-item-container")

//TODO
// fix position sticky on basket
// decide to have it render with div or modal
// fix the basket item call not working
//add amount to db

//render through db and see if there is any amount bigger than 1, if yes, render that item
// basket into indexhtml auslagern, dann rendern wie gewohnt, auch als div, anzeigen mit mobile machen durch classlistadd
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

function openBasket() {
    renderBasketItem();
}


renderStoreListing();
openBasket();

function addToBasket(categoryID, itemID) {
    basket.push(foodItems[categoryID].items[itemID]);
    getSumBasket();
    console.log(sum);
    openBasket();
}

function renderBasketItem() {
    for (let i = 0; i < basket.length; i++) {
        basketItemRef.innerHTML += renderItemInBasket(i)
        console.log(basket[i].foodTitle);
    }
}

function getSumBasket() {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket);
        sum += basket[i].foodPrice;
    }
}
