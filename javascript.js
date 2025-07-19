document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Modo escuro/claro
const toggleButton = document.createElement('button');
toggleButton.innerText = '🌙 Modo Noturno';
toggleButton.style.float = 'right';
toggleButton.style.marginLeft = '20px';
toggleButton.style.padding = '8px 12px';
toggleButton.style.background = '#00c3ff';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.transition = '0.3s';

document.querySelector('header .container').appendChild(toggleButton);

let darkMode = true;
toggleButton.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.style.background = darkMode 
        ? 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' 
        : '#f4f4f4';

    document.body.style.color = darkMode ? '#fff' : '#333';

    document.querySelectorAll('.card').forEach(card => {
        card.style.background = darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : '#fff';
        card.style.color = darkMode ? '#fff' : '#333';
    });

    toggleButton.innerText = darkMode ? '🌙 Modo Noturno' : '☀️ Modo Claro';
});

// Atualiza o rodapé com o ano atual
const year = new Date().getFullYear();
document.querySelector('footer').innerHTML += `<p style="margin-top:10px;">Atualizado em ${year}</p>`;
