const botaoPrincial = document.querySelector("#botaoPrincipal")
const botoesHeaderNav = document.querySelectorAll(".botaoMenu")

botaoPrincial.addEventListener('click', () => {
    window.location.href = 'index.html';
})

botoesHeaderNav[0].addEventListener('click', () => {
    window.location.href = 'resouces/views/homePage.html';
})

botoesHeaderNav[1].addEventListener('click', () => {
    window.location.href = 'resouces/views/pesquisar.html';
})

botoesHeaderNav[2].addEventListener('click', () => {
    window.location.href = 'resouces/views/calendario.html';
})

botoesHeaderNav[3].addEventListener('click', () => {
    window.location.href = 'resouces/views/favoritos.html';
})

botoesHeaderNav[4].addEventListener('click', () => {
    window.location.href = 'resouces/views/login.html';
})