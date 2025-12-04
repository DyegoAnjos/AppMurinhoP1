document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('edit-profile-form');

    const nomeInput = document.querySelector('input[name="nome"]');
    const emailInput = document.querySelector('input[name="email"]');
    
    const phoneInput = document.querySelector('input[name="phone"]');
    
    form.addEventListener('submit', function(event) {
        

        const nomeValue = nomeInput.value.trim();
        const emailValue = emailInput.value.trim();
        let isValid = true;
        
        if (nomeValue === '') {
            alert('O campo Nome é obrigatório e não pode estar vazio.');
            nomeInput.focus();
            isValid = false;
        } 
        
        else if (emailValue === '' || !emailValue.includes('@') || emailValue.length < 5) {
            alert('Por favor, insira um endereço de E-mail válido.');
            emailInput.focus();
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } 
    });

    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            let formattedValue = '';

            if (value.length > 0) {
                formattedValue += '(' + value.substring(0, 2);
            }
            if (value.length > 2) {
                formattedValue += ') ' + value.substring(2, 7);
            }
            if (value.length > 7) {
                formattedValue += '-' + value.substring(7, 11);
            }
            
            e.target.value = formattedValue;
        });
    }
    
    function setupImagePreview(inputFileId, targetImgSelector) {
        const input = document.getElementById(inputFileId);
        const img = document.querySelector(targetImgSelector);
        
        if (input && img) {
            input.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    }
    
    setupImagePreview('foto-perfil', '.fotoPerfil');
    
    setupImagePreview('banner', '.fotoCapa');

});