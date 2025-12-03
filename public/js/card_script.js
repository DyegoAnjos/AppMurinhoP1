// Constantes devem ter a primeira letra minúscula por convenção
const botoesFavoritar = document.querySelectorAll(".fa-heart");

// Adiciona o listener ao documento, mas verifica se o clique
// ocorreu em um dos botões usando o event.target
document.addEventListener("click", (event) => {
    // 1. Verifica se o elemento clicado (event.target) é um coração
    //    ou um de seus descendentes (se o ícone estiver dentro de um botão)
    const coracao = event.target.closest(".fa-heart");

    // 2. Se o clique não foi em um coração, sai da função
    if (!coracao) {
        return;
    }

    // 3. Verifica as classes do elemento clicado (o 'coracao' encontrado)
    //    Usando a forma correta: classList.contains()
    if (coracao.classList.contains("fa-solid")) {
        // Altera de preenchido (sólido) para vazado (regular)
        // Usando toggle/remove/add para manipular classes individualmente
        coracao.classList.remove('fa-solid');
        coracao.classList.add('fa-regular');
    } 
    
    else if (coracao.classList.contains("fa-regular")) {
        // Altera de vazado (regular) para preenchido (sólido)
        coracao.classList.remove('fa-regular');
        coracao.classList.add('fa-solid');
    }
});