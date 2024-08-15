// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.getElementById('matrix-rain').appendChild(canvas);
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const columns = Math.floor(canvas.width / 20);
    const drops = [];
  
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
  
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        ctx.fillStyle = '#0F0';
        ctx.font = '12px monospace';
  
        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.random() * 128);
            ctx.fillText(text, i * 20, drops[i] * 20);
  
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
  
            drops[i]++;
        }
    }
  
    setInterval(draw, 33);
  }
  
  // Typing effect
  function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i), 50);
    }
  }
  
  // Initialize everything
  document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
  
    const terminalBody = document.querySelector('.terminal-body');
  
    // Glitch effect on hover for cyber-headers
    document.querySelectorAll('.cyber-header').forEach(header => {
        header.addEventListener('mouseover', () => {
            header.style.animation = 'glitch 500ms infinite';
        });
        header.addEventListener('mouseout', () => {
            header.style.animation = 'none';
        });
    });
});
  