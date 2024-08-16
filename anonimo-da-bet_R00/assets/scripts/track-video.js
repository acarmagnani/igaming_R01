var video = document.getElementById("videoElement");
var videoWatchedPercentages = [25, 50, 75, 100];
var videoPercentageTracked = {};

videoWatchedPercentages.forEach(function(percentage) {
    videoPercentageTracked[percentage] = false; // Initialize tracking status
});

video.addEventListener('timeupdate', function() {
    var percentageWatched = (video.currentTime / video.duration) * 100;

    videoWatchedPercentages.forEach(function(percentage) {
        if (!videoPercentageTracked[percentage] && percentageWatched >= percentage) {
            // Send event to Google Analytics
            trackVideoPercentage(percentage);
            videoPercentageTracked[percentage] = true; // Mark this percentage as tracked
        }
    });
});

function trackVideoPercentage(percentage) {
    var videoTitle = 'Video unico'; // Set your video title or another identifier
    var eventAction = percentage + '% Watched';

    button_click('Video', eventAction, videoTitle, 'anonimo-da-bet_R00/vsl.html', eventAction);
}