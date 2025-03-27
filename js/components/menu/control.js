export const initControls = (backgroundMusic, playPauseButton, stopButton, updatePlayingStatus, toggleMusicLight) => {
    let isPlaying = false;
    
    backgroundMusic.volume = 0.5;
    // Remove any auto-start functionality

    const playMusic = () => {
        backgroundMusic.play().then(() => {
            isPlaying = true;
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            toggleMusicLight(true);
            updatePlayingStatus(true);
        }).catch(error => {
            console.error('Error playing audio:', error);
        });
    };

    const pauseMusic = () => {
        backgroundMusic.pause();
        isPlaying = false;
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        toggleMusicLight(false);
        updatePlayingStatus(false);
    };

    playPauseButton.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            playMusic();
        } else {
            pauseMusic();
        }
    });

    stopButton.addEventListener('click', () => {
        pauseMusic();
        backgroundMusic.currentTime = 0;
    });

    const skipTime = 5; // 5 detik

    const rewindButton = document.getElementById('rewindButton');
    const forwardButton = document.getElementById('forwardButton');

    const handleTimeSkip = (direction) => {
        const targetTime = Math.max(0, Math.min(
            backgroundMusic.currentTime + (direction * skipTime),
            backgroundMusic.duration
        ));

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

    rewindButton.addEventListener('click', () => handleTimeSkip(-1));
    forwardButton.addEventListener('click', () => handleTimeSkip(1));

    return { isPlaying: () => isPlaying };
};
