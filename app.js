const mockData = [
    {
        'name': 'California pizza',
        'price': '$ 8.50',
        'ingredient': 'Mushroom',
        'path': './images/california_pizza.png'
    },
    {
        'name': 'Greek pizza',
        'price': '$ 12.99',
        'ingredient': 'Beef',
        'path': './images/greek_pizza.png'
    },
    {
        'name': 'Sicilian pizza',
        'price': '$ 7.90',
        'ingredient': 'Tomato',
        'path': './images/sicilian_pizza.png'
    },
    {
        'name': 'Louis pizza',
        'price': '$ 4.79',
        'ingredient': 'Chicken',
        'path': './images/louis_pizza.png'
    }, {
        'name': 'California pizza',
        'price': '$ 8.50',
        'ingredient': 'Mushroom',
        'path': './images/california_pizza.png'
    },
    {
        'name': 'Greek pizza',
        'price': '$ 12.99',
        'ingredient': 'Beef',
        'path': './images/greek_pizza.png'
    },
    {
        'name': 'Sicilian pizza',
        'price': '$ 7.90',
        'ingredient': 'Tomato',
        'path': './images/sicilian_pizza.png'
    },
    {
        'name': 'Louis pizza',
        'price': '$ 4.79',
        'ingredient': 'Chicken',
        'path': './images/louis_pizza.png'
    }
]

let shoppingList = [];

function renderCard(name, ingredient, path, price, i) {
    const cardContainer = document.getElementById('card_container');
    let card = `<div id="card_${i + 1}" class="card-box">
                    <div class="img-inner">
                        <img class="foto-pizza" src=${path}>
                    </div>
                    <div class="text-container">
                        <div class="card_text_row">
                            <h3>${name}</h3>
                            <p class="card-subtitle">${ingredient}</p>
                        </div>
                        <div class="card_items_row">
                            <p class="price_text">${price}</p>
                            <div id ="add_button" onclick="addItemToShoppingList('${name}', '${ingredient}', '${path}', '${price}', ${i})" class="add_button">+</div>
                        </div>
                    </div>
                </div>`
    cardContainer.insertAdjacentHTML('beforeend', card);
}

function addItemToShoppingList(name, ingredient, path, price, index) {

    //Creo un objecte nou amb els valors de la pizza (que obtinc dels parametres)
    //i li afegeixo un contador i una posició inicial que ens servirà per comprovar
    //si ja haviem guardat la pizza
    let addedItem = {
        'name': name,
        'price': price,
        'ingredient': ingredient,
        'path': path,
        'count': 1,
        'index': index
    }

    if (shoppingList.length == 0) {
        //Quan tinc un array buit
        shoppingList.push(addedItem);
        console.log('First item added');
    } else {
        //Quan l'array no està buit
        let indexdArr = [];
        //Guardo posició inicial de totes les pizzes de la llista de la compra
        for (let i = 0; i < shoppingList.length; i++) {
            indexdArr.push(shoppingList[i]['index']);
        }
        //Guardo la posició inicial del nou item
        let indexNewItem = addedItem['index'];
        //Comprovo si la posició inicial del nou item ja està entre les pizzes que tinc a la llista de la compra
        if (!(indexdArr.includes(indexNewItem))) {
            //Si no hi és, l'afegeixo tal qual
            shoppingList.push(addedItem);
            console.log('Item added');
        } else {
            //Si hi és, enlloc d'afegir-lo, sumo una pizza al contador
            shoppingList[index]['count']++
            console.log('Item added more than once')
        }
    }
}

function renderShoppingList(name, i, path, price, count) {

    //img
    let itemImg = document.createElement('img');
    itemImg.classList.add('shoppingListItem_img');
    itemImg.src = path;

    //Shopping list item img (col)
    let shoppingListItemImgCol = document.createElement('div');
    shoppingListItemImgCol.classList.add('shoppingList_img_col');
    shoppingListItemImgCol.appendChild(itemImg);

    //info text
    let shoppingListItemName = document.createElement('p');
    shoppingListItemName.classList.add('item_name');
    let shoppingListItemPrice = document.createElement('p');
    shoppingListItemPrice.classList.add('item_price')
    shoppingListItemName.innerText = name;
    shoppingListItemPrice.innerText = price;

    //Shopping list info (col)
    let shoppingListItemInfoCol = document.createElement('div');
    shoppingListItemInfoCol.classList.add('shoppingList_info_col');
    shoppingListItemInfoCol.append(shoppingListItemName, shoppingListItemPrice);

    //plus button
    let itemPlusButton = document.createElement('p');
    itemPlusButton.classList.add('shoppingListItem_plusButton');
    itemPlusButton.id = `itemPlusButton_${i}`;
    itemPlusButton.innerText = '+';

    //count
    let itemCount = document.createElement('p');
    itemCount.classList.add('shoppingListItem_count');
    itemCount.innerText = count;
    itemCount.id = `itemCount_${i + 1}`

    //minus button
    let itemMinusButton = document.createElement('p');
    itemMinusButton.classList.add('shoppingListItem_minusButton');
    itemMinusButton.id = `itemMinusButton_${i + 1}`;
    itemMinusButton.innerText = '-';


    //Count buttons function

    function addQuant(){
        shoppingList[i]['count']++
        itemCount.innerText = `${shoppingList[i]['count']}`;
    }

    function restQuant(){
        if (shoppingList[i]['count'] > 1) {
            //Quan el contador de la pizza és més gran que 1 es pot restar
            shoppingList[i]['count']--
            itemCount.innerText = `${shoppingList[i]['count']}`;
        } else if (shoppingList[i]['count'] <= 1) {
            //Si el contador de la pizza és igual o més petit que 1
            itemMinusButton.removeEventListener('click', restQuant);
            shoppingList.splice(i,1);
            setTimeout(() => {
                let item = document.getElementById(`pizza_${i + 1}`);
                item.style.display = 'none';
            }, 50);
            console.log(shoppingList)
        }
    }

    itemPlusButton.addEventListener('click', addQuant)
    itemMinusButton.addEventListener('click', restQuant)

    //Shopping list quantity (col)
    let shoppingListItemQuantCol = document.createElement('div');
    shoppingListItemQuantCol.classList.add('shoppingList_quant_col');
    shoppingListItemQuantCol.append(itemPlusButton, itemCount, itemMinusButton);

    //Shopping list item (row)

    let shoppingListItem = document.createElement('div');
    shoppingListItem.id = `pizza_${i + 1}`;
    shoppingListItem.classList.add('shoppingList_item');
    shoppingListItem.append(shoppingListItemImgCol, shoppingListItemInfoCol, shoppingListItemQuantCol)

    //ARREGLAR
    return shoppingListItem
}

function renderCheckout() {
    //Trobar i guardar en una variable el contenidor on anirà
    //tot l'html que creem amb el js
    const wrapper = document.getElementsByClassName('wrapper')[0];

    //HEADER//
    //Header text//
    let clearAll = document.createElement('p');
    clearAll.innerText = 'Clear All';
    clearAll.style.fontSize = 'small';
    clearAll.style.color = '#767676';

    let yourCartFood = document.createElement('p');
    yourCartFood.innerHTML = `<span>Your Cart </span><br><span>Food</span>`;
    yourCartFood.style.fontSize = 'x-large';
    yourCartFood.style.fontWeight = '600';

    //Header//
    let header = document.createElement('div');
    header.classList.add('checkout_header');
    header.append(clearAll, yourCartFood);

    //SHOPPING LIST CONTAINER
    let shoppingListContainer = document.createElement('div');
    shoppingListContainer.id = 'shoppingList_container';
    shoppingListContainer.classList.add('shoppingList_container');

    for (let i = 0; i < shoppingList.length; i++) {
        let pizzaObj = shoppingList[i];
        let shoppingListItem = renderShoppingList(pizzaObj['name'], i, pizzaObj['path'], pizzaObj['price'], pizzaObj['count']);
        shoppingListContainer.appendChild(shoppingListItem);
    }


    //PURCHASE PRICES
    
    let costTotal = document.createElement('div');
    costTotal.id="cost_total";
    costTotal.innerHTML=(`<p>Total:</p><p><span>00.00€</span></p>`)

    let costTax = document.createElement('div');
    costTax.id="cost_tax";
    costTax.innerHTML=(`<p>Tax:</p><p><span>00.00€</span></p>`)

    let costDelivery = document.createElement('div');
    costDelivery.id="cost_delivery";
    costDelivery.innerHTML=(`<p>Delivery charge:</p><p><span>00.00€</span></p>`)

    let costItems = document.createElement('div');
    costItems.id="cost_items";
    costItems.innerHTML = (`<p>Item total:</p><p><span>00.00€</span></p>`)

    let priceContainer = document.createElement('div');
    priceContainer.append(costItems,costDelivery,costTax,costTotal);
    priceContainer.id="price_container";

    //CHECKOUT BUTTON
    let buttonCheckoutContainer = document.createElement('div');
    buttonCheckoutContainer.id = "checkout_button_container"
    buttonCheckoutContainer.innerHTML = (`<button>Checkout</button>`)




    //Wrapper 2
    let checkoutContainer = document.createElement('div');
    checkoutContainer.classList.add('checkout_container');
    checkoutContainer.append(header, shoppingListContainer,priceContainer, buttonCheckoutContainer);



    //Wrapper 1
    let shoppingWrapper = document.createElement('div');
    shoppingWrapper.classList.add('shopping_wrapper');
    shoppingWrapper.appendChild(checkoutContainer);


    wrapper.appendChild(shoppingWrapper);
}

//Lligo la funció que imprimeix el checkout al botó de la compra
const shoppingButton = document.getElementsByClassName('shopping_button')[0];
shoppingButton.addEventListener('click', renderCheckout);


// //Imprimeix les cards quan es renderitza la pàgina
document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < mockData.length; i++) {
        let pizza = mockData[i];
        let pizzaName = pizza['name'];
        let pizzaIngredient = pizza['ingredient']
        let pizzaPath = pizza['path']
        let pizzaPrice = pizza['price']
        renderCard(pizzaName, pizzaIngredient, pizzaPath, pizzaPrice, i)
    }
})