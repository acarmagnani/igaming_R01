window.addEventListener('load', function() {
    // Function to format time in MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Initialize countdown time (5 minutes)
    let countdownTime = 5 * 60; // 5 minutes in seconds

    // Update countdown every second
    const updateCountdown = () => {
        const countdownElement = document.getElementById('countdown');
        if (countdownTime <= 0) {
            countdownElement.textContent = '00:00';
            return;
        }
        countdownElement.textContent = formatTime(countdownTime);
        countdownTime--;
    };

    // Show pop-up after 4 seconds and start countdown
    setTimeout(function() {
        document.getElementById('popup').classList.add('show');
        updateCountdown();
        setInterval(updateCountdown, 1000); // Update countdown every second
    }, 4000);
});
