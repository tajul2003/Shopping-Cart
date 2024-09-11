
let cartQuantity = 0;


const quantityDisplay = document.getElementById('quantity-display');
const addToCartButton = document.getElementById('add-to-cart');
const addTwoButton = document.getElementById('add-two');
const resetCartButton = document.getElementById('reset-cart');


function updateQuantityDisplay() {
    quantityDisplay.textContent = `Current Quantity: ${cartQuantity}`;
}


addToCartButton.addEventListener('click', () => {
    cartQuantity += 1;
    updateQuantityDisplay();
});


addTwoButton.addEventListener('click', () => {
    cartQuantity += 2;
    updateQuantityDisplay();
});


resetCartButton.addEventListener('click', () => {
    cartQuantity = 0;
    updateQuantityDisplay();
});
