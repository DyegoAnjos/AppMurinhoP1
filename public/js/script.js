const botaoPrincial = document.querySelector("#botaoPrincipal")
const botoesHeaderNav = document.querySelectorAll(".botaoMenu")
const botaoMenuLateral = document.querySelector("#botaoMenuLateral")

botaoPrincial.addEventListener('click', () => {
    window.location.href = '../../index.html';
})

botoesHeaderNav[0].addEventListener('click', () => {
    window.location.href = 'homePage.html';
})

botoesHeaderNav[1].addEventListener('click', () => {
    window.location.href = 'pesquisar.html';
})

botoesHeaderNav[2].addEventListener('click', () => {
    window.location.href = 'calendario.html';
})

botoesHeaderNav[3].addEventListener('click', () => {
    window.location.href = 'favoritos.html';
})

botoesHeaderNav[4].addEventListener('click', () => {
    window.location.href = 'login.html';
})

// botaoMenuLateral.addEventListener('click', () => {
//     window.location.href = 'menu_bar.html'
// })

