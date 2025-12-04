document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const eyeIcon = form.querySelector('.fa-eye');
    const eyeSlashIcon = form.querySelector('.fa-eye-slash');



    if (eyeIcon && eyeSlashIcon && passwordInput) {
        
        // Função para mostrar a senha
        eyeIcon.addEventListener('click', function() {
            passwordInput.type = 'text';
            eyeIcon.classList.add('escondido');
            eyeSlashIcon.classList.remove('escondido');
        });


        eyeSlashIcon.addEventListener('click', function() {
            passwordInput.type = 'password';
            eyeSlashIcon.classList.add('escondido');
            eyeIcon.classList.remove('escondido');
        });
    }

    
    form.addEventListener('submit', function(event) {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        let isValid = true;
        
        if (emailValue === '' || !emailValue.includes('@')) {
            alert('Por favor, insira um email válido.');
            emailInput.focus();
            isValid = false;
        }

        else if (passwordValue.length < 8) {
            alert('A senha deve ter pelo menos 8 caracteres.');
            passwordInput.focus();
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } 
        

    });

});