for (let i = 9; i <= 13; i++) {
    const imagenID = 'imagen' + i;
    const videoID = 'video' + i;

    const imagenElement = document.getElementById(imagenID);
    const videoElement = document.getElementById(videoID);

    imagenElement.addEventListener('mouseover', function() {
        imagenElement.style.display = 'none';
        videoElement.style.display = 'flex';
    });

    videoElement.addEventListener('mouseout', function() {
        imagenElement.style.display = 'flex';
        videoElement.style.display = 'none';
    });
}