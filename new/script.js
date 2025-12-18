// This function will run every second to update the clock
function updateClock() {
    // 1. Get the current date and time
    const now = new Date();

    // 2. Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 3. Add a leading zero if the number is less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 4. Create the time string
    const timeString = `${hours}:${minutes}:${seconds}`;

    // 5. Display the time in the HTML element
    document.getElementById('digital-clock').textContent = timeString;
}

// Update the clock immediately when the page loads
updateClock();

// Then, update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);