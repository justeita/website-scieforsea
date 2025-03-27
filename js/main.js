import { initControls } from './components/menu/control.js';
import { initInformation } from './components/menu/information.js';
import { initSlider } from './components/menu/slider.js';
import { initMenu } from './components/menu/menu.js';

document.addEventListener('DOMContentLoaded', async () => {
    const isMobile = window.innerWidth <= 768;
    
    const menuButton = document.getElementById('menuButton');
    const mainContainer = document.querySelector('.main-container');
    const navContainer = document.getElementById('menuPanel');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playPauseButton = document.getElementById('playPauseButton');
    const stopButton = document.getElementById('stopButton');
    const songStatus = document.querySelector('.song-status');
    const timeSlider = document.querySelector('.time-slider');
    const currentTimeDisplay = document.querySelector('.current-time');
    const durationDisplay = document.querySelector('.duration');

    const { updatePlayingStatus } = initInformation(songStatus);
    
    const toggleMusicEffect = (playing) => {
        if (playing && mainContainer.classList.contains('menu-active')) {
            mainContainer.classList.add('with-music');
        } else {
            mainContainer.classList.remove('with-music');
        }
    };

    await new Promise(resolve => setTimeout(resolve, 100));
    
    const { isPlaying } = initControls(backgroundMusic, playPauseButton, stopButton, updatePlayingStatus, toggleMusicEffect);
    initSlider(backgroundMusic, timeSlider, currentTimeDisplay, durationDisplay, isMobile);
    initMenu(menuButton, mainContainer, navContainer, toggleMusicEffect, isPlaying, isMobile);
});