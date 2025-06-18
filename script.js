// Simple cart logic for ShopEasy
const products = [
    { id: 1, name: 'Wireless Headphones', price: 59.99 },
    { id: 2, name: 'Smart Watch', price: 99.99 },
    { id: 3, name: 'Bluetooth Speaker', price: 29.99 }
];

let cart = [];

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.qty} - $${(item.price * item.qty).toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price * item.qty;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const product = products[idx];
            const existing = cart.find(item => item.id === product.id);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ ...product, qty: 1 });
            }
            updateCartDisplay();
        });
    });
    updateCartDisplay();
}); 