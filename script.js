const products = [
    { id: 1, name: "Severská zamatová pohovka", price: 666, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500" },
    { id: 2, name: "Krásny nočný stolík no nekúp ho", price: 88, img: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500" },
    { id: 3, name: "GOAT", price: 67, img: "https://sandovallegacygroup.com/wp-content/uploads/2025/08/Screenshot-2025-08-14-at-9.19.56-AM-854x675.png" },
    { id: 4, name: "Z tadeto ťa v noci budem sledovať", price: 450, img: "https://th.bing.com/th?id=OIF.iK9wDh1qPRklj%2fXYkLWopA&w=304&h=202&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" },
    { id: 5, name: "OH MY FUCKING GOD THEY HIT THE SECOND TOWER!", price: 9.11, img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2016_36/1703426/ss-160909-911-attack-mbe-630_7.jpg" },
    { id: 6, name: "Perfektný gauč na goonovanie", price: 69, img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500" }
];

let cart = [];

// Initialize
function init() {
    renderProducts(products);
}

// Display Products
function renderProducts(items) {
    const container = document.getElementById('products');
    container.innerHTML = items.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p style="color: #0220ff; font-size: 1.2rem; font-weight: bold;">$${p.price}</p>
            <button onclick="addToCart(${p.id})">Pridať do košíka</button>
        </div>
    `).join('');
}

// Search Logic
function filterProducts() {
    const term = document.getElementById('searchBar').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
}

// Cart Logic
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    updateTotal();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('hidden');
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    if (cart.length === 0) {
        container.innerHTML = "<p>Váš košík je prázdny.</p>";
    } else {
        container.innerHTML = cart.map((item, index) => `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
                <span>${item.name}</span>
                <span>$${item.price}</span>
                <button onclick="removeItem(${index})" style="width:auto; padding:2px 8px; background:#e74c3c;">Remove</button>
            </div>
        `).join('');
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
    renderCartItems();
}

function updateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    const donation = document.getElementById('donate-check').checked ? 2 : 0;
    document.getElementById('cart-total').innerText = total + donation;
}

// Start the app
init();