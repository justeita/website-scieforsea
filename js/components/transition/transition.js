export const initTransition = (mainContainer) => {
    const handleTransition = (isActive, hasMusic) => {
        if (isActive) {
            mainContainer.classList.add('menu-active');
            if (hasMusic) {
                mainContainer.classList.add('with-music');
            }
        } else {
            mainContainer.classList.remove('menu-active');
            mainContainer.classList.remove('with-music');
        }
    };

    return { handleTransition };
};
