(function(){
    const input = document.getElementById('mensagem');
    const sendBtn = document.querySelector('.enviarMensagem button');
    const chatContainer = document.querySelector('.corpoChat');

    if(!input || !sendBtn || !chatContainer) return;

    function sendMessage(){
        const text = input.value.trim();
        if(!text) return;
        const p = document.createElement('p');
        p.className = 'balaoCliente';
        p.textContent = text;
        chatContainer.appendChild(p);
        input.value = '';
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
        input.focus();
    }

    sendBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        sendMessage();
    });

    input.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault();
            sendMessage();
        }
    });
})();