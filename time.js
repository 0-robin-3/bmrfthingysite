function getMountainTime() {
    const options = {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    return new Date().toLocaleTimeString('en-US', options);
}

function updateClock() {
    const clock = document.getElementById('time_mdt');
    if (clock) {
        clock.textContent = 'The Time Is: ' + getMountainTime();
    }
}

setInterval(updateClock, 1000);
window.onload = updateClock;