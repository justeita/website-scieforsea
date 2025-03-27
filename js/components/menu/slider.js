export const initSlider = (backgroundMusic, timeSlider, currentTimeDisplay, durationDisplay, isMobile) => {
    const formatTime = (seconds) => {
        if (isNaN(seconds) || seconds === Infinity) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    let isDragging = false;

    const waitForLoad = () => {
        return new Promise((resolve) => {
            if (backgroundMusic.readyState >= 2) {
                resolve();
            } else {
                backgroundMusic.addEventListener('loadeddata', () => resolve());
            }
        });
    };

    // Tunggu audio benar-benar ter-load
    waitForLoad().then(() => {
        // Pastikan durasi terbaca penuh
        const fullDuration = backgroundMusic.duration;
        timeSlider.min = 0;
        timeSlider.max = fullDuration;
        timeSlider.step = 0.1; // Untuk kontrol yang lebih halus
        durationDisplay.textContent = formatTime(fullDuration);
    });

    // Update progress bar
    const updateProgress = () => {
        if (!isDragging) {
            const progress = (backgroundMusic.currentTime / backgroundMusic.duration) * 100;
            timeSlider.value = backgroundMusic.currentTime;
            timeSlider.style.setProperty('--progress', `${progress}%`);
            currentTimeDisplay.textContent = formatTime(backgroundMusic.currentTime);
        }
    };

    // Event listeners
    timeSlider.addEventListener('input', (e) => {
        const time = parseFloat(e.target.value);
        const progress = (time / backgroundMusic.duration) * 100;
        timeSlider.style.setProperty('--progress', `${progress}%`);
        currentTimeDisplay.textContent = formatTime(time);
    });

    const smoothSeek = (targetTime) => {
        const fadeOutDuration = 50;
        const fadeInDuration = 50;
        const currentVolume = backgroundMusic.volume;

        // Fade out
        const fadeOut = setInterval(() => {
            if (backgroundMusic.volume > 0.1) {
                backgroundMusic.volume -= 0.1;
            } else {
                clearInterval(fadeOut);
                backgroundMusic.volume = 0;
                
                // Set new time and fade in
                backgroundMusic.currentTime = targetTime;
                const fadeIn = setInterval(() => {
                    if (backgroundMusic.volume < currentVolume) {
                        backgroundMusic.volume += 0.1;
                    } else {
                        backgroundMusic.volume = currentVolume;
                        clearInterval(fadeIn);
                    }
                }, 10);
            }
        }, 10);
    };

    timeSlider.addEventListener('change', (e) => {
        smoothSeek(parseFloat(e.target.value));
    });

    timeSlider.addEventListener('mousedown', () => isDragging = true);
    timeSlider.addEventListener('mouseup', () => isDragging = false);
    timeSlider.addEventListener('mouseleave', () => isDragging = false);

    backgroundMusic.addEventListener('timeupdate', updateProgress);
};
