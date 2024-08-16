// Get the video element
const video = document.getElementById('myVideo');

// Add an event listener to the document to toggle play/pause on click
document.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});