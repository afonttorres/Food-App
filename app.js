const mockData = [
    {
        'name': 'California pizza',
        'price': '$ 8.50',
        'ingredient': 'Mushroom',
        'path': '../Food-App/images/california_pizza.png'
    },
    {
        'name': 'Greek pizza',
        'price': '$ 12.99',
        'ingredient': 'Beef',
        'path': '../Food-App/images/greek_pizza.png'
    },
    {
        'name': 'Sicilian pizza',
        'price': '$ 7.90',
        'ingredient': 'Tomato',
        'path': '../Food-App/images/sicilian_pizza.png'
    },
    {
        'name': 'Louis pizza',
        'price': '$ 4.79',
        'ingredient': 'Chicken',
        'path': '../Food-App/images/louis_pizza.png'
    }, {
        'name': 'California pizza',
        'price': '$ 8.50',
        'ingredient': 'Mushroom',
        'path': '../Food-App/images/california_pizza.png'
    },
    {
        'name': 'Greek pizza',
        'price': '$ 12.99',
        'ingredient': 'Beef',
        'path': '../Food-App/images/greek_pizza.png'
    },
    {
        'name': 'Sicilian pizza',
        'price': '$ 7.90',
        'ingredient': 'Tomato',
        'path': '../Food-App/images/sicilian_pizza.png'
    },
    {
        'name': 'Louis pizza',
        'price': '$ 4.79',
        'ingredient': 'Chicken',
        'path': '../Food-App/images/louis_pizza.png'
    }
]

let shoppingList = [];

function printCard(name, ingredient, path, price, i) {
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

    let addedItem = {
        'name': name,
        'price': price,
        'ingredient': ingredient,
        'path': path,
        'count': 1,
        'index': index
    }

    if (shoppingList.length == 0) {
        shoppingList.push(addedItem);
        console.log('First item added');
    } else {
        let idArr = [];
        for (let i = 0; i < shoppingList.length; i++) {
            idArr.push(shoppingList[i]['index']);
        }
        if (!(idArr.includes(addedItem['index']))) {
            shoppingList.push(addedItem);
            console.log('Item added');
        } else {
            shoppingList[index]['count']++
            console.log('Item added more than once')
        }
    }
}

function printShoppingList(name, i, path, price, count) {

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
    itemCount.innerText = `${count}`;
    itemCount.id = `itemCount_${i + 1}`

    //minus button
    let itemMinusButton = document.createElement('p');
    itemMinusButton.classList.add('shoppingListItem_minusButton');
    itemMinusButton.id = `itemMinusButton_${i + 1}`;
    itemMinusButton.innerText = '-';


    //Count buttons function

    function addQuant(){
        shoppingList[i]['count']++
        console.log(shoppingList[i]['count'])
        itemCount.innerText = `${shoppingList[i]['count']}`;
        console.log(shoppingList)
    }

    function restQuant(){
        if (shoppingList[i]['count'] > 1) {
            shoppingList[i]['count']--
            console.log(shoppingList[i]['count'])
            itemCount.innerText = `${shoppingList[i]['count']}`;
        } else if (shoppingList[i]['count'] <= 1) {
            console.log(shoppingList)
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

    return shoppingListItem
}

function printCheckout() {
    //Trobar i guardar en una variable el contenidor on anirà
    //tot l'html que creem amb el js
    const wrapper = document.getElementsByClassName('wrapper')[0];

    //HEADER//
    //Header text//
    let clearAll = document.createElement('p');
    clearAll.innerText = 'Clear All';
    clearAll.style.fontSize = 'x-small';

    let yourCartFood = document.createElement('p');
    yourCartFood.innerHTML = `<span>Your Cart </span><br><span>Food</span>`;
    yourCartFood.style.fontSize = 'large';
    yourCartFood.style.fontWeight = 'bold';

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
        let shoppingListItem = printShoppingList(pizzaObj['name'], i, pizzaObj['path'], pizzaObj['price'], pizzaObj['count']);
        shoppingListContainer.appendChild(shoppingListItem);
    }


    //PURCHASE PRICES

    //CHECKOUT BUTTON

    //Wrapper 2
    let checkoutContainer = document.createElement('div');
    checkoutContainer.classList.add('checkout_container');
    checkoutContainer.append(header, shoppingListContainer);



    //Wrapper 1
    let shoppingWrapper = document.createElement('div');
    shoppingWrapper.classList.add('shopping_wrapper');
    shoppingWrapper.appendChild(checkoutContainer);


    wrapper.appendChild(shoppingWrapper);
}

//Lligo la funció que imprimeix el checkout al botó de la compra
const shoppingButton = document.getElementsByClassName('shopping_button')[0];
shoppingButton.addEventListener('click', printCheckout);


//Imprimeix les cards quan es renderitza la pàgina
document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < mockData.length; i++) {
        let pizzaName = mockData[i]['name'];
        let pizzaIngredient = mockData[i]['ingredient']
        let pizzaPath = mockData[i]['path']
        let pizzaPrice = mockData[i]['price']
        printCard(pizzaName, pizzaIngredient, pizzaPath, pizzaPrice, i)
    }
})

