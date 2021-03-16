const titles = document.querySelectorAll(".product_title");
const products = [];
const productElement = document.querySelector('.products');

//adding Products names to product array
const saveProductsNames = () => {
    for(let i = 0; i < titles.length; i++){
        products.push(titles[i].innerHTML);
    }
    return products;
}

//show button
const showButton = (event) => {
    document.getElementById("save_button").style.display = "block";
}

//Toggle menu on small screens 
const toggleDropdown = (event) => {
    if (window.innerWidth <= 967) {
        event.stopPropagation();
        event.currentTarget.querySelector('ul')?.classList.toggle('open');
    }
}

// Implement drag and drop

//adding selected class and dragstart eventListener
productElement.addEventListener('dragstart', (evt) => {
    evt.target.classList.add('selected');
});


// removing selected on deragend
productElement.addEventListener('dragend', (evt) => {
    evt.target.classList.remove('selected')
});

//implement of moving product cards
productElement.addEventListener('dragover', (evt) => {
    evt.preventDefault();
    const activeElement = productElement.querySelector('.selected');
    const currentElement = evt.target;
    const isMoveable = activeElement !== currentElement && currentElement.classList.contains('product_card');

    if(!isMoveable){
        return;
    }

    const nextElement = (currentElement === activeElement.nextElementSibling) ? currentElement.nextElementSibling : currentElement;
    productElement.insertBefore(activeElement, nextElement);
});


