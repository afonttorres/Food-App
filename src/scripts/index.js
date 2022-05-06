import { data } from './data.js';
import { main } from './main.js';
import { app } from './app.js';
import { checkout } from './checkout.js'


let checkoutFlag = false;

// //Convertir la shopping list a un string
// //Crear el nou objecte
// function setSMSValues() {
//     let smsArr = [];
//     shoppingList.forEach(element => {
//         let smsPizzaString = `${element.name}: ${element.count}`
//         smsArr.push(smsPizzaString);
//     })

//     return smsArr;
// }
// function convertShoppingList() {
//     let smsData = setSMSValues();
//     smsData.push(`TOTAL: ${totalPrice} €`);
//     let sms = smsData.toString().split(',').join(', ');
//     console.log(sms);
// }

// //Funció suma quantitat i preu

// function getPrice() {
//     purchasePrice = 0;
//     shoppingList.forEach(pizza => {
//         let eachPizzaTotal = parseFloat(pizza['count']) * parseFloat(pizza['price']).toFixed(2);
//         console.log(eachPizzaTotal);
//         purchasePrice += eachPizzaTotal;
//     })
//     totalPrice = parseFloat(purchasePrice) + parseFloat(mockTax) + parseFloat(mockDeliveryCharge);
//     document.getElementById('purchasePrice').innerText = `${purchasePrice.toFixed(2)} €`;
//     document.getElementById('totalPrice').innerText = `${totalPrice.toFixed(2)} €`;
// }


// function getAmount() {
//     purchaseCount = 0;
//     shoppingList.forEach(pizza => {
//         purchaseCount += pizza['count'];
//     })
//     if (purchaseCount > 0) {
//         document.getElementById('purchaseCount').style.display = 'block';
//         document.getElementById('purchaseCount').innerText = purchaseCount;
//     } else document.getElementById('purchaseCount').style.display = 'none';
// }



// //Update checkout
// function updateCheckout(elementClassName) {
//     if (checkoutFlag) {
//         wrapper.removeChild(document.getElementsByClassName(elementClassName)[0]);
//         renderCheckout()
//     } else { }
// }

// //Funció per imprimir cards de la shopping list
// function renderShoppingItem(name, i, path, price, count, whereToAppend) {

//     //img
//     let itemImg = document.createElement('img');
//     itemImg.classList.add('shoppingListItem_img');
//     itemImg.src = path;

//     //Shopping list item img (col)
//     let shoppingListItemImgCol = document.createElement('div');
//     shoppingListItemImgCol.classList.add('shoppingList_img_col');
//     shoppingListItemImgCol.appendChild(itemImg);

//     //info text
//     let shoppingListItemName = document.createElement('p');
//     shoppingListItemName.classList.add('item_name');
//     let shoppingListItemPrice = document.createElement('p');
//     shoppingListItemPrice.classList.add('item_price')
//     shoppingListItemName.innerText = name;
//     shoppingListItemPrice.innerText = price;

//     //Shopping list info (col)
//     let shoppingListItemInfoCol = document.createElement('div');
//     shoppingListItemInfoCol.classList.add('shoppingList_info_col');
//     shoppingListItemInfoCol.append(shoppingListItemName, shoppingListItemPrice);

//     //plus button
//     let itemPlusButton = document.createElement('p');
//     itemPlusButton.classList.add('shoppingListItem_plusButton');
//     itemPlusButton.id = `itemPlusButton_${i}`;
//     itemPlusButton.innerText = '+';
//     itemPlusButton.addEventListener('click', () => {
//         addQuant(i, whereToAppend)
//     })

//     //count
//     let itemCount = document.createElement('p');
//     itemCount.classList.add('shoppingListItem_count');
//     itemCount.innerText = count;
//     itemCount.id = `itemCount_${i}`

//     //minus button
//     let itemMinusButton = document.createElement('p');
//     itemMinusButton.classList.add('shoppingListItem_minusButton');
//     itemMinusButton.id = `itemMinusButton_${i}`;
//     itemMinusButton.innerText = '-';
//     itemMinusButton.addEventListener('click', () => {
//         restQuant(i, whereToAppend, itemMinusButton)
//     })

//     //Shopping list quantity (col)
//     let shoppingListItemQuantCol = document.createElement('div');
//     shoppingListItemQuantCol.classList.add('shoppingList_quant_col');
//     shoppingListItemQuantCol.append(itemPlusButton, itemCount, itemMinusButton);

//     //Shopping list item (row)

//     let shoppingListItem = document.createElement('div');
//     shoppingListItem.id = `pizza_${i}`;
//     shoppingListItem.classList.add('shoppingList_item');
//     shoppingListItem.append(shoppingListItemImgCol, shoppingListItemInfoCol, shoppingListItemQuantCol);

//     whereToAppend.appendChild(shoppingListItem)
// }

// //Funció per imprimir les cards de la shopping list en bucle
// function renderShoppingList(whereToAppend) {
//     whereToAppend.innerHTML = "";
//     for (let i = 0; i < shoppingList.length; i++) {
//         let pizzaObj = shoppingList[i];
//         renderShoppingItem(pizzaObj['name'], i, pizzaObj['path'], pizzaObj['price'], pizzaObj['count'], whereToAppend);
//     }
// }

// //Funció per renderitzar el menú de checkout
// function renderCheckout() {
//     checkoutFlag = true;
//     //HEADER//
//     //Header text//
//     let clearAll = document.createElement('p');
//     clearAll.innerText = 'Clear All';
//     clearAll.style.fontSize = 'x-small';
//     clearAll.style.cursor = 'pointer';
//     clearAll.onclick = () => {
//         shoppingList = [];
//         getAmount();
//         getPrice();
//         renderShoppingList(shoppingListContainer);
//     }

//     let yourCartFood = document.createElement('p');
//     yourCartFood.innerHTML = `<span>Your Cart </span><br><span>Food</span>`;
//     yourCartFood.style.fontSize = 'large';
//     yourCartFood.style.fontWeight = 'bold';

//     //Header//
//     let header = document.createElement('div');
//     header.classList.add('checkout_header');
//     header.append(clearAll, yourCartFood);

//     //SHOPPING LIST CONTAINER
//     let shoppingListContainer = document.createElement('div');
//     shoppingListContainer.id = 'shoppingList_container';
//     shoppingListContainer.classList.add('shoppingList_container');

//     renderShoppingList(shoppingListContainer);


//     //PURCHASE PRICES
//     let costTotal = document.createElement('div');
//     costTotal.id = "cost_total";
//     costTotal.innerHTML = (`<p>Total:</p><p><span id="totalPrice">${parseFloat(totalPrice).toFixed(2)} €</span></p>`)

//     let costTax = document.createElement('div');
//     costTax.id = "cost_tax";
//     costTax.innerHTML = (`<p>Tax:</p><p><span>${mockTax}</span></p>`)

//     let costDelivery = document.createElement('div');
//     costDelivery.id = "cost_delivery";
//     costDelivery.innerHTML = (`<p>Delivery charge:</p><p><span>${mockDeliveryCharge}</span></p>`)

//     let costItems = document.createElement('div');
//     costItems.id = "cost_items";
//     costItems.innerHTML = (`<p>Item total:</p><p><span id="purchasePrice">${parseFloat(purchasePrice).toFixed(2)} €</span></p>`)

//     let priceContainer = document.createElement('div');
//     priceContainer.append(costItems, costDelivery, costTax, costTotal);
//     priceContainer.id = "price_container";

//     //CHECKOUT BUTTON
//     let buttonCheckoutContainer = document.createElement('div');
//     buttonCheckoutContainer.id = "checkout_button_container";
//     let checkoutButton = document.createElement('button');
//     checkoutButton.id = 'checkout_button';
//     checkoutButton.innerText = 'Checkout';

//     checkoutButton.onclick = convertShoppingList;

//     buttonCheckoutContainer.appendChild(checkoutButton);




//     //Wrapper 2
//     let checkoutContainer = document.createElement('div');
//     checkoutContainer.classList.add('checkout_container');
//     checkoutContainer.append(header, shoppingListContainer, priceContainer, buttonCheckoutContainer);

//     //Creu tancament checkout view (view 2) del mòbil
//     let closeCheckout = document.createElement('p');
//     closeCheckout.classList.add('close_button_checkout');
//     closeCheckout.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
//     closeCheckout.onclick = checkoutToggle;

//     //Wrapper 1
//     let shoppingWrapper = document.createElement('div');
//     shoppingWrapper.classList.add('shopping_wrapper');
//     shoppingWrapper.append(checkoutContainer, closeCheckout);


//     wrapper.appendChild(shoppingWrapper);
// }

// //Lligo la funció que imprimeix el checkout al botó de la compra
// function checkoutToggle() {
//     if (checkoutFlag) {
//         wrapper.removeChild(document.getElementsByClassName('shopping_wrapper')[0])
//         checkoutFlag = false;
//     } else {
//         renderCheckout();
//     }
// }
// const shoppingButton = document.getElementsByClassName('shopping_button')[0];
// shoppingButton.addEventListener('click', checkoutToggle);



app.init();