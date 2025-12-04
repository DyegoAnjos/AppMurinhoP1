document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('cadastrarProduto');
    const nomeProdutoInput = form.querySelector('input[name="nomeProduto"]');
    const valorProdutoInput = form.querySelector('input[name="valorProduto"]');
    const descricaoTextarea = form.querySelector('textarea[name="descricao"]');
    const horariosCheckboxes = form.querySelectorAll('.calendario-horarios input[type="checkbox"]');
    const fotoProdutoInput = document.getElementById('foto');
    const fotoProdutoImg = document.querySelector('.fotoProduto');

    if (fotoProdutoInput && fotoProdutoImg) {
        fotoProdutoInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    fotoProdutoImg.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (valorProdutoInput) {
        valorProdutoInput.addEventListener('input', function(e) {
            let value = e.target.value;
            value = value.replace(/\D/g, ''); // 1. Remove tudo que não é dígito
            value = (value / 100).toFixed(2); // 2. Divide por 100 e formata para 2 casas decimais
            value = value.replace('.', ','); // 3. Troca ponto por vírgula para formato BR
            value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); // 4. Adiciona ponto para milhar

            if (value !== 'NaN') { // Evita erro se o valor for inválido
                e.target.value = 'R$ ' + value;
            } else {
                e.target.value = '';
            }
        });
    }

    form.addEventListener('submit', function(event) {
        
        const nomeValue = nomeProdutoInput.value.trim();
        const valorValue = valorProdutoInput.value.trim();
        const descricaoValue = descricaoTextarea.value.trim();
        let isValid = true;
        

        if (nomeValue === '') {
            alert('O campo Nome do Produto é obrigatório.');
            nomeProdutoInput.focus();
            isValid = false;
        } 
        else if (descricaoValue === '') {
            alert('A Descrição do Produto é obrigatória.');
            descricaoTextarea.focus();
            isValid = false;
        }

        const valorSemFormatacao = valorValue.replace('R$', '').trim();
        if (isValid && valorSemFormatacao === '') {
            alert('O campo Valor é obrigatório e não pode estar vazio.');
            valorProdutoInput.focus();
            isValid = false;
        } 
        
        let algumHorarioSelecionado = Array.from(horariosCheckboxes).some(checkbox => checkbox.checked);

        if (isValid && !algumHorarioSelecionado) {
            alert('Você deve selecionar pelo menos um Dia e Horário de disponibilidade.');
            isValid = false;
        }


        if (!isValid) {
            event.preventDefault();
        } 
    });
});