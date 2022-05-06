import { app } from './app.js';
import { data } from './data.js';
import { main } from './main.js';

const checkout = {
    //LOGIC
    addQuantity(id) {
        main.findPurchaseItem(id).count++
        console.log(data.shoppingList);
    },
    restQuantity(e) {
        let id = parseInt(e.target.id.split('-')[1]);
        if (main.findPurchaseItem(id).count <= 1) {
            e.target.removeEventListener('click', this.restQuantity);
            let index = app.getIndex(data.shoppingList, id);
            data.shoppingList.splice(index, 1)
        } else {
            main.findPurchaseItem(id).count--
        }
    },
    //RENDER
    render() {
        console.log(`Hi, I'm render`)
    }
}

export { checkout }