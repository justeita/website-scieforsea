export const initInformation = (songStatus) => {
    const updatePlayingStatus = (playing) => {
        songStatus.textContent = playing ? "Now Playing" : "Not Playing";
        songStatus.style.color = playing ? "#4ecdc4" : "rgba(78, 205, 196, 0.7)";
    };

    return { updatePlayingStatus };
};
