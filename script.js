// script.js
document.getElementById('welcomeBtn').addEventListener('click', function () {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = "Olá, Seja muito bem-vindo à página pessoal do Pedro!";
    welcomeMessage.classList.remove('hidden');
    welcomeMessage.style.color = '#0077cc';
    welcomeMessage.style.marginTop = '10px';
    welcomeMessage.style.fontWeight = 'bold';
  });
  