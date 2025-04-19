document.addEventListener('DOMContentLoaded', function() {
    // Crear partículas de fondo
    const bgContainer = document.getElementById('bg-animation');
    const particleColors = [
        'rgba(255, 255, 255, 0.5)',
        'rgba(255, 230, 240, 0.5)',
        'rgba(230, 240, 255, 0.5)',
        'rgba(147, 112, 219, 0.2)',
        'rgba(255, 105, 180, 0.2)'
    ];
    
    function createParticles() {
        // Limpiar contenedor
        bgContainer.innerHTML = '';
        
        // Número de partículas basado en el tamaño de la ventana
        const numParticles = Math.floor(window.innerWidth * window.innerHeight / 15000);
        
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('bg-particle');
            
            // Posición aleatoria
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Tamaño aleatorio
            const size = 3 + Math.random() * 8;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Color aleatorio
            particle.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
            
            // Animación aleatoria
            particle.style.animationDuration = 8 + Math.random() * 20 + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            // Añadir al contenedor
            bgContainer.appendChild(particle);
        }
    }
    
    // Crear partículas iniciales
    createParticles();
    
    // Recrear partículas cuando cambia el tamaño de la ventana
    window.addEventListener('resize', createParticles);
    
    // Countdown to birthday (May 18)
    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        
        // Set birthday date - May 18
        let birthday = new Date(currentYear, 4, 18); // Month is 0-indexed
        
        // If this year's birthday has passed, set for next year
        if (now > birthday) {
            birthday = new Date(currentYear + 1, 4, 18);
        }
        
        // Calculate time difference
        const diff = birthday - now;
        
        // Calculate days, hours, minutes
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        // Display countdown
        document.getElementById('countdown').innerHTML = 
            `${days} días, ${hours} horas y ${minutes} minutos`;
    }
    
    // Update countdown every minute
    updateCountdown();
    setInterval(updateCountdown, 60000);
    
    // Add more floating hearts and animal emojis
    const floatingHearts = document.querySelector('.floating-hearts');
    const emojis = ['❤️', '💖', '💕', '💗', '🐱', '🦜', '😺', '😸', '🦜', '💝'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = 12 + Math.random() * 15 + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.opacity = 0.3 + Math.random() * 0.4;
        floatingHearts.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 30000);
    }
    
    // Create initial hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 600);
    }
    
    // Continue creating hearts occasionally
    setInterval(createHeart, 4000);
    
    // Add hover effect to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.12)';
        });
    });
    
    // Add special message that appears after a few seconds
    setTimeout(() => {
        const specialMessage = document.createElement('div');
        specialMessage.innerHTML = `
            <div class="special-message animate__animated animate__bounceIn">
                <p>¡Sonríe, Lesly! Tu sonrisa ilumina el mundo 🌟 <span style="font-size: 1.2em;">🐱🦜</span></p>
            </div>
        `;
        specialMessage.style.position = 'fixed';
        specialMessage.style.bottom = '20px';
        specialMessage.style.right = '20px';
        specialMessage.style.background = 'linear-gradient(135deg, #FFD3E0, #FFF0F0)';
        specialMessage.style.padding = '15px 20px';
        specialMessage.style.borderRadius = '10px';
        specialMessage.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.12)';
        specialMessage.style.zIndex = '1000';
        specialMessage.style.maxWidth = '300px';
        specialMessage.style.textAlign = 'center';
        specialMessage.style.fontFamily = "'Pacifico', cursive";
        specialMessage.style.color = '#9370DB';
        specialMessage.style.border = '1px solid rgba(255, 105, 180, 0.3)';
        document.body.appendChild(specialMessage);
        
        // Remove after 10 seconds
        setTimeout(() => {
            specialMessage.classList.add('animate__fadeOut');
            setTimeout(() => {
                specialMessage.remove();
            }, 1000);
        }, 10000);
    }, 5000);
    
    // Add click effect on pet cards
    const petCards = document.querySelectorAll('.pet-card');
    petCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.add('animate__animated', 'animate__heartBeat');
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
            setTimeout(() => {
                this.classList.remove('animate__animated', 'animate__heartBeat');
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }, 1000);
        });
    });
}); 