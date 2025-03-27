document.addEventListener('DOMContentLoaded', async () => {
    const isMobile = window.innerWidth <= 768;
    const phrases = ["Waiting Something Happened?..."];
    const heading = document.getElementById('dynamicHeading');
    const mainContainer = document.querySelector('.main-container');
    
    // Hanya set text tanpa animasi
    heading.textContent = phrases[0];
    let isAnimationStarted = false;
    
    if(window.innerWidth > 768) {
        // Setup width untuk animasi nanti
        const tempSpan = document.createElement('span');
        tempSpan.textContent = phrases[0];
        const headingStyles = window.getComputedStyle(heading);
        tempSpan.style.fontFamily = headingStyles.fontFamily;
        tempSpan.style.fontSize = headingStyles.fontSize;
        tempSpan.style.fontWeight = headingStyles.fontWeight;
        tempSpan.style.letterSpacing = headingStyles.letterSpacing;
        tempSpan.style.whiteSpace = 'nowrap';
        tempSpan.style.visibility = 'hidden';
        document.body.appendChild(tempSpan);
        
        const textWidth = tempSpan.offsetWidth;
        document.body.removeChild(tempSpan);
        
        heading.style.setProperty('--text-width', `${textWidth}px`);
        
        const charsPerSecond = 10;
        const duration = phrases[0].length / charsPerSecond;
        
        // Setup typing sound
        const typeSound = new Audio('assets/audio/audio-npc-talking.mp3');
        typeSound.volume = 0.15;
        typeSound.load();

        // Mulai animasi hanya ketika menu dibuka
        const startTypingAnimation = () => {
            if (isAnimationStarted) return;
            isAnimationStarted = true;
            heading.style.opacity = '1'; // Tampilkan teks
            
            // Reset width ke 0 sebelum animasi mulai
            heading.style.width = '0';
            
            // Set CSS variables untuk animasi
            heading.style.setProperty('--typing-duration', `${duration}s`);
            heading.style.setProperty('--char-count', phrases[0].length);
            
            // Start animation after a small delay
            setTimeout(() => {
                heading.classList.add('typing');
                
                const soundPool = Array(3).fill().map(() => {
                    const sound = new Audio('assets/audio/audio-npc-talking.mp3');
                    sound.volume = 0.15;
                    sound.load();
                    return sound;
                });
                
                let currentSound = 0;
                
                let currentChar = 0;
                const totalChars = phrases[0].length;
                const intervalTime = (duration * 1000) / totalChars;
                
                const typeEffect = setInterval(() => {
                    if (currentChar < totalChars) {
                        soundPool[currentSound].currentTime = 0;
                        soundPool[currentSound].play().catch(err => console.log('Audio error:', err));
                        currentSound = (currentSound + 1) % soundPool.length;
                        currentChar++;
                    } else {
                        clearInterval(typeEffect);
                        soundPool.forEach(sound => {
                            sound.pause();
                            sound.currentTime = 0;
                        });
                    }
                }, intervalTime);

                // Modifikasi random flash effect agar lebih halus
                const addTypeFlash = setInterval(() => {
                    if (currentChar < totalChars) {
                        // Kurangi frekuensi kedipan
                        if (Math.random() > 0.9) {
                            heading.style.opacity = '0.95';
                            setTimeout(() => {
                                heading.style.opacity = '1';
                            }, 50);
                        }
                    } else {
                        clearInterval(addTypeFlash);
                        heading.style.opacity = '1';
                    }
                }, 100); // Perlambat interval
            }, 100);
        };

        // Listen for menu open only
        mainContainer.addEventListener('transitionstart', (e) => {
            if (e.target === mainContainer && mainContainer.classList.contains('menu-active')) {
                startTypingAnimation();
            }
        });

        // Hapus event listener untuk reset animasi saat menu ditutup
    }
});

