function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Handle midnight
    document.getElementById('time').textContent = "".concat(hours, ":").concat(minutes.toString().padStart(2, '0'), ":").concat(seconds.toString().padStart(2, '0'));
    document.getElementById('ampm').textContent = ampm;
}
setInterval(updateTime, 1000);
updateTime(); // Initial call
