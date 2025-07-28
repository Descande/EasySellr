const products = [
    {
        id: 1,
        name: "iPhone 16 Pro Max",
        price: 39000,
        category: "phones",
        image: "https://via.placeholder.com/300x200/3b82f6/white?text=iPhone+16+Pro",
        description: "Latest iPhone with advanced features and stunning design."
    },

    {
        id: 2,
        name: "Macbook Air",
        price: 32000,
        category: "laptops",
        image: "https://via.placeholder.com/"
    },

    {
        id: 3,
        name: "AirPods Pro",
        price: 1500,
        category: "accessories",
        image: "https://via.placeholder.com/300x200/10b981/white?text=AirPods+Pro",
        description: "Wireless earbuds with active noise cancellation."

    },

    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 35000,
        image: "https://via.placeholder.com/300x200/3b82f6/white?text=Samsung+Galaxy+S24",
        category: "phones",
        description: "Latest Samsung phone with cutting-edge technology."
    },

    {
        id: 5,
        name: "Dell XPS 13",
        price: 28000,
        image: "https://via.placeholder.com/300x200/3b82f6/white?text=Dell+XPS+13",
        category: "laptops",
        description: "High-performance laptop with sleek design."
    }
];

let cart = [];

const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featuredProducts');


function formatPrice(price) {
    return 'N$' + price.toFixed(2);
}

console.log('Javascript loaded Successfully!');
console.log('We Have ', products.length, ' Products');


function createProductCard(product) {

    return `

        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" />
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description || ''}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">Add to Cart
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">View Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

function displayProducts(productsToShow = products) {
    if (productsGrid) {
        const productsHTML = productsToShow.map(createProductCard).join('');
        productsGrid.innerHTML = productsHTML;
    }

    if (featuredProducts) {
        const featuredHTML = products.slice(0, 4).map(createProductCard).join('');
        featuredProducts.innerHTML = featuredHTML;
    }
}


function addToCart(productId) {
    alert('Adding product ' + productId + ' to cart! (we\'ll build this feature next!)');
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    alert('Product: ' + product.name + '\nprice: ' + formatPrice(product.price) + '\nDescription: ' + (product.description || 'No description available.'));
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('page loaded, displaying products...');
    displayProducts();
});