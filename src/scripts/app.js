import { data } from "./data.js";
import { main } from "./main.js";

const app = {
    //LOGIC
    getIndex(arr, id){
        return arr.findIndex(arrItem => arrItem.id === id);
    },
    findElement(dataObj, id) {
        let elements = [];
        let selectors = Object.keys(dataObj);
        selectors.forEach(selector => {
            let element = document.querySelector(`#${selector}-${id}`);
            elements.push(element);
        })
        return elements;
    },
    addFunctionToEl(componentsArr) {
        componentsArr.forEach(component => {
            let isOne = component[Object.keys(component)]['isOne'];
            let action = component[Object.keys(component)]['action'];
            if (isOne === true) {
                let element = document.querySelector(component[Object.keys(component)]['selector']);
                element.addEventListener('click', action);
            }
            if (isOne === false) {
                let elements = document.querySelectorAll(component[Object.keys(component)]['selector']);
                elements.forEach(el => {
                    el.addEventListener('click', action);
                })
            }
        })
    },
    capitalize(string) {
        let capitalizedArr = [];
        for (let i = 0; i < string.length; i++) {
            let letter = string[i];
            if (i === 0) {
                letter = letter.toUpperCase();
            }
            capitalizedArr.push(letter);
        }
        return capitalizedArr.toString().split(',').join('');
    },
    init() {
        main.renderCardList(data.mockData);
        this.addFunctionToEl(main.ixComponents, true)
    }
}

export { app }