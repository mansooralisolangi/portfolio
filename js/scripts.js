// 4. DNA PARTICLE SYSTEM (Canvas Based)


 const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

function initDNABackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 60;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = 'rgba(249, 115, 22, 0.2)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, index) => {
            p.update();
            p.draw();
            
            // Connect lines (DNA Structure look)
            for (let j = index; j < particles.length; j++) {
                const dx = p.x - particles[j].x;
                const dy = p.y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.strokeStyle = `rgba(249, 115, 22, ${0.15 - distance/1000})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ==========================================
// 5. FLOATING TECHNOLOGY ICONS
// ==========================================
function initFloatingIcons() {
    const icons = ['fa-laravel', 'fa-node-js', 'fa-js', 'fa-php', 'fa-database', 'fa-github'];
    const container = document.body;

    icons.forEach((icon, i) => {
        const iconEl = document.createElement('i');
        iconEl.className = `fab ${icon} floating-tech`;
        
        // Random positions
        iconEl.style.left = Math.random() * 90 + 'vw';
        iconEl.style.top = Math.random() * 90 + 'vh';
        
        // Random animation delay
        iconEl.style.animationDelay = (i * 2) + 's';
        iconEl.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        container.appendChild(iconEl);
    });
}

// DomContentLoaded ke andar inhein call karein:
document.addEventListener('DOMContentLoaded', () => {
    initDNABackground();
    initFloatingIcons();
    
});