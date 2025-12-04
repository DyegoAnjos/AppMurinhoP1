document.addEventListener('DOMContentLoaded', () => {
    //os botoes principais
    const btnMenu = document.getElementById('btnAbrirMenu');
    const btnNotificacoes = document.getElementById('btnAbrirNotificacoes');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const sidebarNotificacoes = document.getElementById('sidebarNotificacoes');
    
    //outros elementos
    const overlay = document.getElementById('overlay');
    const botoesFechar = document.querySelectorAll('.btn-fechar');

    // botões de navegação
    const botoesNavegacao = document.querySelectorAll(".navegacao")

    //funcao pra fechar todas as sidebars
    function fecharTudo() {
        sidebarMenu.classList.remove('aberto');
        sidebarNotificacoes.classList.remove('aberto');
        overlay.classList.remove('ativo');
    }

    //funcao pra abrir a sidebar
    function abrirSidebar(sidebarAlvo) {
        //pro caso das not ele fecha o menu antes
        fecharTudo();
        //abre a sidebar desejada com overlay
        sidebarAlvo.classList.add('aberto');
        overlay.classList.add('ativo');
    }

    //pra abrir o menu  
    if (btnMenu) {
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita bugs de clique
            abrirSidebar(sidebarMenu);
        });
    }

    //pra abrir notificacoes
    if (btnNotificacoes) {
        btnNotificacoes.addEventListener('click', (e) => {
            e.stopPropagation();
            abrirSidebar(sidebarNotificacoes);
        });
    }

    //pra fehcar tudo clicando fora da area da sidebar
    if (overlay) {
        overlay.addEventListener('click', () => {
            fecharTudo();
        });
    }

    //pra fechar clicando no 'x'
    botoesFechar.forEach(btn => {
        btn.addEventListener('click', () => {
            fecharTudo();
        });
    });
    
    //fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') fecharTudo();
    });

    botoesNavegacao[0].addEventListener('click', () => {
        window.location.href = 'cadastro_produto.html';
    })

    botoesNavegacao[1].addEventListener('click', () => {
        window.location.href = 'favoritos.html';
    })

    botoesNavegacao[2].addEventListener('click', () => {
        window.location.href = 'chatCrocheMia.html';
    })

    botoesNavegacao[3].addEventListener('click', () => {
        window.location.href = '../../index.html';
    })

});