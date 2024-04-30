function updateTime() {
    const now = new Date();
    let hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    const seconds: number = now.getSeconds();
    const ampm: string = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Handle midnight

    document.getElementById('time')!.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('ampm')!.textContent = ampm;
  }

  setInterval(updateTime, 1000);
  updateTime(); // Initial call