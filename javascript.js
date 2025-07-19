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

    document.body.style.background = '';

    document.body.style.color = darkMode ? '#fff' : '#222';

    document.querySelectorAll('.card').forEach(card => {
        card.style.background = darkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(255, 255, 255, 0.85)';
        card.style.color = darkMode ? '#fff' : '#222';
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.style.color = darkMode ? '#fff' : '#222';
    });

    toggleButton.innerText = darkMode ? '🌙 Modo Noturno' : '☀️ Modo Claro';
});

const year = new Date().getFullYear();
document.querySelector('footer').innerHTML += `<p style="margin-top:10px;">Atualizado em ${year}</p>`;

let colors = [
    [15,32,39],
    [32,58,67],
    [44,83,100],
    [0,195,255]
];

let step = 0;
let colorIndices = [0,1,2,3];
let gradientSpeed = 0.002;

function updateGradient() {
    let c0_0 = colors[colorIndices[0]];
    let c0_1 = colors[colorIndices[1]];
    let c1_0 = colors[colorIndices[2]];
    let c1_1 = colors[colorIndices[3]];

    let istep = 1 - step;
    let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    let color1 = "rgb("+r1+","+g1+","+b1+")";

    let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    let color2 = "rgb("+r2+","+g2+","+b2+")";

    document.body.style.background = "linear-gradient(to right, "+color1+", "+color2+")";

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }
}

setInterval(updateGradient, 10);

const titulo = document.querySelector('header h1');
titulo.addEventListener('mouseenter', () => {
    titulo.style.textShadow = '0 0 15px #00c3ff';
});

titulo.addEventListener('mouseleave', () => {
    titulo.style.textShadow = 'none';
});
