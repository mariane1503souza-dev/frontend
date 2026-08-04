// TAREFA 2: Capturar o evento submit
const formCadastro = document.getElementById('formCadastro');
if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); 
        cadastrarProduto();
    });
}

// TAREFA 3: Função cadastrarProduto
function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const estoque = parseInt(document.getElementById('estoque').value);
    const status = document.getElementById('status').value;

    // Validação
    if (!nome || isNaN(preco) || isNaN(estoque)) {
        alert("Preencha todos os campos!");
        return;
    }

    const novoProduto = {
        id: Date.now(),
        nome, categoria, preco, estoque, status,
        imagem: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400"
    };

    // TAREFA 4: Adicionar ao array usando push( )
    let produtos = JSON.parse(localStorage.getItem('products')) || [];
    produtos.push(novoProduto);
    localStorage.setItem('products', JSON.stringify(produtos));

    // TAREFA 5: Sucesso e Limpeza
    document.getElementById('feedback').innerHTML = '<div class="alert alert-success">Item registrado!</div>';
    formCadastro.reset();
}
