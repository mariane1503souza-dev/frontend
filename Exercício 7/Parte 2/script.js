// TAREFA 1: Array com cinco produtos fictícios temáticos
const produtosIniciais = [
    {
        id: 1,
        nome: "Máscara Ghostface Original",
        categoria: "Vestuário",
        preco: 89.90,
        desc: "A clássica máscara usada nos assassinatos de Woodsboro.",
        imagem: "https://images.unsplash.com/photo-1604004541724-5a6a743750a3?w=400"
    },
    {
        id: 2,
        nome: "Faca de Caça Cromada",
        categoria: "Armas",
        preco: 120.00,
        desc: "Lâmina de aço inoxidável com cabo ergonômico.",
        imagem: "https://images.unsplash.com/photo-1594994411388-37f932c2539f?w=400"
    },
    {
        id: 3,
        nome: "Trocador de Voz Eletrônico",
        categoria: "Eletrônicos",
        preco: 150.00,
        desc: "Disfarce sua voz perfeitamente para suas ligações.",
        imagem: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400"
    },
    {
        id: 4,
        nome: "Capa Preta com Capuz",
        categoria: "Vestuário",
        preco: 199.99,
        desc: "Tecido resistente para movimentos rápidos nas sombras.",
        imagem: "https://images.unsplash.com/photo-1519340241574-211a113d055b?w=400"
    },
    {
        id: 5,
        nome: "Livro: Regras de Sobrevivência",
        categoria: "Colecionáveis",
        preco: 45.00,
        desc: "Escrito por sobreviventes reais. Não seja o próximo.",
        imagem: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400"
    }
];

// Iniciar localStorage se estiver vazio
if (!localStorage.getItem('products' )) {
    localStorage.setItem('products', JSON.stringify(produtosIniciais));
}

// TAREFA 3 e 4: Loop para montar cards dinamicamente
function displayProducts() {
    const container = document.getElementById('listaProdutos');
    if (!container) return;
    
    let products = JSON.parse(localStorage.getItem('products')) || [];
    container.innerHTML = ''; 

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4'; // TAREFA 5: Responsividade
        
        col.innerHTML = `
            <div class="card bg-black border-danger text-light h-100 shadow">
                <img src="${product.imagem}" class="card-img-top border-bottom border-danger" alt="${product.nome}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-danger" style="font-family: 'Creepster', cursive;">${product.nome}</h5>
                    <h6 class="card-subtitle mb-2 text-muted small">${product.categoria}</h6>
                    <p class="card-text flex-grow-1 small">${product.desc}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="h5 mb-0">R$ ${parseFloat(product.preco).toFixed(2)}</span>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${product.id})">Eliminar</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// (Restante da lógica de delete e submit permanece igual...)

