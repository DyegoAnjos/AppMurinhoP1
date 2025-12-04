document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInputs = form.querySelectorAll('input[type="password"]');
    const eyeIcons = form.querySelectorAll('.fa-eye');
    const eyeSlashIcons = form.querySelectorAll('.fa-eye-slash');

    eyeIcons.forEach((eyeIcon, index) => {
        const eyeSlashIcon = eyeSlashIcons[index];
        const passwordInput = passwordInputs[index];
        
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
    });

    form.addEventListener('submit', function(event) {
        
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInputs[0].value.trim(); 
        const confirmPasswordValue = passwordInputs[1].value.trim();
        let isValid = true;
        
        if (emailValue === '' || !emailValue.includes('@') || emailValue.length < 5) {
            alert('Por favor, insira um endereço de e-mail válido.');
            emailInput.focus();
            isValid = false;
        } 
        
        else if (passwordValue.length < 8) {
            alert('A senha deve ter no mínimo 8 caracteres.');
            passwordInputs[0].focus();
            isValid = false;
        }
        
        else if (passwordValue !== confirmPasswordValue) {
            alert('As senhas digitadas não coincidem.');
            passwordInputs[1].focus();
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } 
    });
});