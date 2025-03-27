export const initMenu = (menuButton, mainContainer, navContainer, toggleMusicLight, isPlaying, isMobile) => {
    let isAnimating = false;

    const toggleMenu = () => {
        if (isAnimating) return;
        isAnimating = true;

        const isMenuOpen = mainContainer.classList.contains('menu-active');

        if (isMenuOpen) {
            mainContainer.classList.remove('menu-active');
            navContainer.classList.remove('active');
            menuButton.classList.remove('menu-active');
            document.body.style.overflow = '';
        } else {
            mainContainer.classList.add('menu-active');
            navContainer.classList.add('active');
            menuButton.classList.add('menu-active');
            document.body.style.overflow = 'hidden';
        }

        document.querySelectorAll('.nav-item').forEach((item, index) => {
            item.style.transitionDelay = !isMenuOpen ? `${index * 0.1}s` : '0s';
        });

        setTimeout(() => {
            toggleMusicLight(isPlaying());
            isAnimating = false;
        }, isMobile ? 150 : 200);
    };

    menuButton.addEventListener('click', () => toggleMenu());

    if (isMobile) {
        let touchStartX = 0;
        let touchMoveX = 0;

        document.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        document.addEventListener('touchmove', e => {
            touchMoveX = e.touches[0].clientX;
        }, { passive: true });

        document.addEventListener('touchend', () => {
            const diffX = touchMoveX - touchStartX;
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    toggleMenu(true);
                } else {
                    toggleMenu(false);
                }
            }
        }, { passive: true });
    }

    return { toggleMenu };
};
