function countFinalPrice(price, quantity) {
    return price * quantity;
}

function countFinalOrderPrice(items) {
    let sum = 0;
    items.forEach(item => {
        sum += item.finalPrice
    })
    return sum;
}

let products = [
    {
        id: 'sim-card',
        name: 'Sim kortelė',
        price: 2.00,
        quantity: 1,
        imgUrl: 'img/sim.png'
    },
    {
        id: 'sim-card',
        name: 'Telefonas',
        price: 1200.00,
        quantity: 1,
        imgUrl: 'img/phone.png'
    },
    {
        id: 'sd-card',
        name: 'SD kortelė',
        price: 35.00,
        quantity: 2,
        imgUrl: 'img/micro-sd.png'
    }
];

let finalOrderPrice = document.querySelector('.basket-price .price');

products = products.map(product => {
    return {
        ...product,
        finalPrice: countFinalPrice(product.price, product.quantity)
    }
});

finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + 'eur';

console.log(finalOrderPrice);

function generateProductsHTML(products) {
    let finalHtml = '';

    products.forEach(product => {
        finalHtml += `
                        <div class="row ${product.id}">
                    <div class="col-6"><p>${product.name}</p></div>
                    <div class="col-2"><p>${product.price}</p></div>
                    <div class="col-2">
                        <p>
                            <button class="remove-item">-</button>
                            <span class="quantity">${product.quantity}</span>
                            <button class="add-item">+</button>
                        </p></div>
                    <div class="col-2">
                        <p><span class="final-price">${product.finalPrice}</span></p>
                        <button class="delete-item">delete</button>
                </div>
            
            `;
    });
    return finalHtml;
}

document.querySelector('.product-list').innerHTML = generateProductsHTML(products);