import { data } from './data.js';
import { app } from './app.js';
import { checkout } from './checkout.js';

const main = {
    //LOGIC
    findDataObj(id) {
        let inputId = parseInt(id.split('-')[1]) - 1;
        for (let i = 0; i < data.mockData.length; i++) {
            if (i === inputId) return data.mockData[i];
        }
    },
    findPurchaseItem(id) {
        return data.shoppingList.find(purchaseItem => purchaseItem.id === id)
    },
    addItem(id) {
        let dataObj = this.findDataObj(id);
        let newId = parseInt(id.split('-')[1])
        let newKeys = { id: newId, count: 1 };
        let itemToAdd = { ...dataObj, ...newKeys };

        if (this.findPurchaseItem(newId) === undefined) {
            data.shoppingList.push(itemToAdd);
            console.log(`${app.capitalize(itemToAdd.name)} added to your purchase bag!`) //->MODAL//
        } else {
            this.findPurchaseItem(newId).count++;
            console.log(`${this.findPurchaseItem(newId).count} ${this.findPurchaseItem(newId).name}s added to your purchase bag!`) //->MODAL//
        }
        console.log(data.shoppingList)
    },
    //RENDER
    wrapper: document.querySelector('.wrapper'),
    container: document.querySelector('.card_container'),
    ixComponents: [
        { mainButton: { selector: '.main-button', action: checkout.render, isOne: true } },
        { addButton: { selector: '.add-button', action: (e) => main.addItem(e.target.id), isOne: false } }

    ],
    renderCardList(arrObj) {
        arrObj.map(dataObj => main.renderCard(dataObj, arrObj.indexOf(dataObj)+1));
    },
    renderCard(dataObj, id) {
        let card = `<div id="card-${id}" class="card-box">
                    <div class="img-inner">
                        <img id="img-${id}" class="foto-pizza" src=>
                    </div>
                    <div class="text-container">
                        <div class="card_text_row">
                            <h3 id="name-${id}"></h3>
                            <p id="ingredient-${id}" class="card-subtitle"></p>
                        </div>
                        <div class="card_items_row">
                            <p id="price-${id}" class="price_text"></p>
                            <div id="addButton-${id}" class="add-button">+</div>
                        </div>
                    </div>
                </div>`
        this.container.insertAdjacentHTML('beforeend', card);
        app.findElement(dataObj, id);
    },
    renderElementData(element, dataObj) {
        let key = element.id.split('-')[0];
        if (key !== 'img') element.innerText = dataObj[key]
        else element.src = dataObj[key]
    },
}

export { main }