const botaoPrincial = document.querySelector("#botaoPrincipal")
const botoesHeaderNav = document.querySelectorAll(".botaoMenu")
const carrossel = document.querySelector("#fotoCarrosel")
const botaoVoltar = document.querySelector(".fa-caret-left")
const botaoAvancar = document.querySelector(".fa-caret-right")
const fotoCarrossel = document.querySelector("#fotoCarrosel")

const imgsCarrossel = [
    "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCq5mcHGdqxL-gBXmOrza6v6Lab-PKHbwa77_sFjg4i2IWaLmIZsJjUWX40sn_g5-pKO7HCUkPAD7AFafjSXMonBv-hP_mxb0wKf_jVxCtPJpuLDQVfOQ3-snaetzj_LPJCJwbzs7PGKXFQDe0fuurEyv2w7sAK5zPg6eTHTUI-bFWnwAdJ4Ad_JD24-tKTi6EIAnRmyPP1VUfQ=w1600?key=GyOGxBECNhirWzRqx1BObg",
    "https://negociodigitalprodutivo.com.br/wp-content/uploads/2021/12/banner-para-loja-virtual-ok-768x296.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e077e6178893391.64efe30149546.png",
    "https://lh3.googleusercontent.com/AJID2qnC3bzeRhR2K3ITfLrJSuzlAVHTV-zVL6EN13Ir2nSBLE8rHVodS8LKdmdfNFl6cNcbJN5BDLNvvcAT14DJ-YAID3SJcIM5WC3TbH0YM_UNZPkm6fbUCMh4TG80Hs7UATj5eotbRlVQl9hvFMs"
] 

var contador = 0;

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

function mudarFoto(contador){
    fotoCarrossel.setAttribute('src', imgsCarrossel[contador]);
}

botaoVoltar.addEventListener("click", () => {
    if(contador == 0)
        contador = 3;
    else
        contador--;

    mudarFoto(contador)

})

botaoAvancar.addEventListener("click", () => {
    if(contador == 3)
        contador = 0;
    else
        contador++;

    mudarFoto(contador)

})