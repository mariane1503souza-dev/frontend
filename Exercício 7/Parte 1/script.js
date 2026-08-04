const productForm = document.getElementById('productForm');
if (productForm) {
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const product = {
            id: Date.now(),
            name: document.getElementById('productName').value,
            category: document.getElementById('productCategory').value,
            price: document.getElementById('productPrice').value,
            desc: document.getElementById('productDesc').value
        };
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        document.getElementById('message').innerHTML = `<div class="alert alert-success bg-dark text-success">Item salvo...</div>`;
        productForm.reset();
        setTimeout(() => { window.location.href = 'lista.html'; }, 1500);
    });
}

function displayProducts() {
    const tableBody = document.getElementById('productTableBody');
    const products = JSON.parse(localStorage.getItem('products')) || [];
    if (products.length === 0) {
        document.getElementById('emptyMessage').classList.remove('d-none');
        return;
    }
    tableBody.innerHTML = products.map(p => `
        <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td><span class="badge bg-danger">${p.category}</span></td>
            <td>R$ ${parseFloat(p.price).toFixed(2)}</td>
            <td>${p.desc}</td>
            <td><button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${p.id})">Eliminar</button></td>
        </tr>
    `).join('');
}

function deleteProduct(id) {
    if (confirm('Eliminar este item?')) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
    }
}

