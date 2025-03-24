function addProductsIntoDiv(products) {
    let productsDiv = document.getElementById('products');
    let productCard = '';

    for (let product of products) {
        productCard += `
        <div class="card">
            <img class="card-img-top" src="${product.image}">
            <div class="card-body">
                 <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <button class="btn btn-primary">Perziureti</button>
             </div>
        </div>
        `
    }
    productsDiv.innerHTML = productCard;
}

window.addEventListener('load', () => {
    fetch('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(data => addProductsIntoDiv(data));
    
})