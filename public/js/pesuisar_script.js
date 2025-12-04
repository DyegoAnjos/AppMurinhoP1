document.addEventListener('DOMContentLoaded', function() {
    
    const formPesquisa = document.querySelector('form');
    const inputPesquisar = document.querySelector('.inputPesquisar');
    const botoesFiltro = document.querySelectorAll('.botaoFiltro');
    const inputValorMax = document.querySelector('.botaoFiltro:nth-last-child(1) .inputValor'); 
    const inputValorMin = document.querySelector('.botaoFiltro:nth-last-child(2) .inputValor');
    const produtosContainer = document.getElementById('produtosContainer');
    const produtos = produtosContainer.querySelectorAll('.exibicao');

    // Estado atual dos filtros
    let filtroCategoria = '';
    
    // Função  para converter o preço do texto (R$ 49,99) para um número (49.99)
    function parsePrice(priceText) {
        // Remove oque atrapalha e converter para float
        return parseFloat(priceText.replace('R$', '').replace(',', '.').trim());
    }

    function aplicarFiltros() {
        // Coleta os valores dos filtros
        const termoBusca = inputPesquisar.value.trim().toLowerCase();
        
        // Se  preço mínimo ou preço máximo estiverem vazios, usa Infinity/-Infinity
        const valorMax = inputValorMax.value ? parseFloat(inputValorMax.value) : Infinity; 
        const valorMin = inputValorMin.value ? parseFloat(inputValorMin.value) : -Infinity;
        
        produtos.forEach(produto => {
            
            const nomeProdutoElement = produto.querySelector('.nomeProduto');
            const precoElement = produto.querySelector('.preco');
            
            // Garante que os elementos existem
            if (!nomeProdutoElement || !precoElement) return; 

            const nomeProduto = nomeProdutoElement.textContent.toLowerCase();
            const precoNumerico = parsePrice(precoElement.textContent);
            const classesProduto = produto.classList;
            
            let passaNaBusca = true;
            let passaNaCategoria = true;
            let passaNoPreco = true;

            //Filtragem por Nome/Termo de Busca
            if (termoBusca !== '') {
                passaNaBusca = nomeProduto.includes(termoBusca);
            }

            // Filtragem por Categoria
            // Verifica se a classe do produto corresponde à categoria ativa
            if (filtroCategoria !== '') {
                passaNaCategoria = classesProduto.contains(filtroCategoria);
            }

            // Filtragem por Preço
            if (valorMin > -Infinity) {
                // valor mínimo deve ser menor ou igual ao preço do produto
                passaNoPreco = precoNumerico >= valorMin;
            }
            if (valorMax < Infinity) {
                // valor máximo deve ser maior ou igual ao preço do produto
                passaNoPreco = passaNoPreco && (precoNumerico <= valorMax);
            }
            
            
            // Aplica a Visibilidade
            if (passaNaBusca && passaNaCategoria && passaNoPreco) {
                produto.style.display = 'block'; // Mostra o produto
            } else {
                produto.style.display = 'none'; // Esconde o produto
            }
        });
    }

    //Pesquisa por Input (Nome do Produto)
    formPesquisa.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão
        aplicarFiltros();
    });

    inputPesquisar.addEventListener('input', aplicarFiltros); // Filtra em tempo real ao digitar

    // Filtros de Categoria
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            // Se for um dos inputs de valor, ignora o clique de categoria
            if (botao.classList.contains('botaoFiltroSelecionado')) {
                return;
            }
            
            const categoria = botao.textContent.trim();
            
            // Se a categoria clicada já estiver ativa, desativa
            if (filtroCategoria === categoria) {
                filtroCategoria = ''; // Desativa o filtro
                botao.classList.remove('ativo');
            } else {
                // Desativa o filtro ativo anterior
                document.querySelectorAll('.botaoFiltro.ativo').forEach(btn => btn.classList.remove('ativo'));
                
                // Ativa o novo filtro
                filtroCategoria = categoria;
                botao.classList.add('ativo');
            }
            
            aplicarFiltros();
        });
    });

    inputValorMin.addEventListener('input', aplicarFiltros);
    inputValorMax.addEventListener('input', aplicarFiltros);

    // Chama a função ao carregar a página para garantir que todos os produtos sejam exibidos inicialmente
    aplicarFiltros();
});