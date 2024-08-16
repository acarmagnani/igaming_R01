// Set the countdown time in minutes and seconds
const initialMinutes = 5;
const initialSeconds = 7;

// Calculate the total time in milliseconds
const totalMilliseconds = (initialMinutes * 60 + initialSeconds) * 1000;

// Set the target date by adding the total time to the current time
const targetDate = new Date().getTime() + totalMilliseconds;

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById('countdown').innerHTML = "0:00";
        clearInterval(countdownInterval);
        return;
    }

    // Calculate minutes and seconds
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Format time as mm:ss
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Display the result in the span
    document.getElementById('countdown').innerHTML = formattedTime;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();