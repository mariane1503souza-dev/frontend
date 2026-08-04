// TAREFA 1: Função renderizarProdutos
function renderizarProdutos(filtro = "") {
    const container = document.getElementById('listaProdutos');
    const produtosFiltrados = produtos.filter(p => p.nome.toLowerCase().includes(filtro.toLowerCase()));
    
    container.innerHTML = ''; 
    produtosFiltrados.forEach(product => {
        // ... monta o card com botões Editar e Excluir ...
    });

    // TAREFA 5: Atualizar Resumo
    atualizarResumo(produtos);
}

// TAREFA 5: Cálculos de Resumo
function atualizarResumo(lista) {
    const total = lista.length;
    const ativos = lista.filter(p => p.status === 'Disponível').length;
    const valorTotal = lista.reduce((acc, p) => acc + (p.preco * p.estoque), 0);
    
    document.getElementById('totalProdutos').innerText = total;
    document.getElementById('totalAtivos').innerText = ativos;
    document.getElementById('valorEstoque').innerText = `R$ ${valorTotal.toFixed(2)}`;
}
