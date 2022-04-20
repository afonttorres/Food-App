document.addEventListener('DOMContentLoaded', ()=>{
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


    //Wrapper 2
    let checkoutContainer = document.createElement('div');
    checkoutContainer.classList.add('checkout_container');
    checkoutContainer.appendChild(header);
    
    

    //Wrapper 1
    let shoppingWrapper = document.createElement('div');
    shoppingWrapper.classList.add('shopping_wrapper');
    shoppingWrapper.appendChild(checkoutContainer);


    wrapper.appendChild(shoppingWrapper);
})