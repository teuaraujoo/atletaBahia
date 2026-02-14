export function playVideo() {
    const playButton = document.querySelector('.play-button');
    const videoModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    const video = document.getElementById('highlightVideo');

    video.pause();

    playButton.addEventListener('click', () => {
        videoModal.show();
        video.play();
    });

    document.getElementById('staticBackdrop').addEventListener('hidden.bs.modal', () => {
        video.pause();
        video.currentTime = 0;
    });
}