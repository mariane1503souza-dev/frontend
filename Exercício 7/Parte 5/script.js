// PÂNICO 7 - LÓGICA DO SISTEMA
let produtos = [];

function carregarProdutos() {
    const dados = localStorage.getItem('products');
    if (dados) {
        produtos = JSON.parse(dados);
    } else {
        produtos = [
            { id: 1, nome: "Máscara Ghostface", categoria: "Vestuário", preco: 89.90, estoque: 10, status: "Disponível", imagem: "https://images.unsplash.com/photo-1604004541724-5a6a743750a3?w=400", desc: "A clássica de Woodsboro." },
            { id: 2, nome: "Faca de Caça", categoria: "Armas", preco: 120.00, estoque: 5, status: "Disponível", imagem: "https://images.unsplash.com/photo-1594994411388-37f932c2539f?w=400", desc: "Aço inoxidável." }
        ];
        salvarProdutos( );
    }
}

function salvarProdutos() {
    localStorage.setItem('products', JSON.stringify(produtos));
}

function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const estoque = parseInt(document.getElementById('estoque').value);
    const status = document.getElementById('status').value;
    const descricao = document.getElementById('descricao').value;

    const novo = {
        id: Date.now(),
        nome, categoria, preco, estoque, status,
        desc: descricao,
        imagem: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400"
    };

    produtos.push(novo );
    salvarProdutos();
    alert("Item adicionado com sucesso!");
    window.location.href = 'lista.html';
}

function renderizarProdutos(filtro = "") {
    const container = document.getElementById('listaProdutos');
    if (!container) return;
    carregarProdutos();
    const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(filtro.toLowerCase()));
    container.innerHTML = '';
    filtrados.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 mb-4';
        col.innerHTML = `
            <div class="card bg-black border-danger text-light h-100 shadow">
                <img src="${p.imagem}" class="card-img-top" style="height: 150px; object-fit: cover; opacity: 0.7;">
                <div class="card-body d-flex flex-column">
                    <h5 class="text-danger">${p.nome}</h5>
                    <p class="small text-secondary flex-grow-1">${p.desc || ''}</p>
                    <div class="h6">R$ ${p.preco.toFixed(2)}</div>
                    <button class="btn btn-sm btn-outline-danger mt-2" onclick="excluirProduto(${p.id})">Excluir</button>
                </div>
            </div>`;
        container.appendChild(col);
    });
    atualizarResumo(produtos);
}

function excluirProduto(id) {
    if (confirm('Eliminar este item?')) {
        produtos = produtos.filter(p => p.id !== id);
        salvarProdutos();
        renderizarProdutos();
    }
}

function atualizarResumo(lista) {
    if (document.getElementById('totalProdutos')) document.getElementById('totalProdutos').innerText = lista.length;
    if (document.getElementById('valorEstoque')) {
        const total = lista.reduce((acc, p) => acc + (p.preco * p.estoque), 0);
        document.getElementById('valorEstoque').innerText = `R$ ${total.toFixed(2)}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    const form = document.getElementById('formCadastro');
    if (form) form.addEventListener('submit', (e) => { e.preventDefault(); cadastrarProduto(); });
    const busca = document.getElementById('campoBusca');
    if (busca) busca.addEventListener('input', (e) => renderizarProdutos(e.target.value));
    if (document.getElementById('listaProdutos')) renderizarProdutos();
});

