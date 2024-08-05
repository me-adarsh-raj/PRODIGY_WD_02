// script.js

class Stopwatch {
    constructor() {
      this.hour = 0;
      this.min = 0;
      this.seconds = 0;
      this.interval = null;
    }
  
    updateDisplay() {
      document.getElementById("hour").innerText =
        (this.hour < 10 ? "0" : "") + this.hour + ":";
      document.getElementById("min").innerText =
        (this.min < 10 ? "0" : "") + this.min + ":";
      document.getElementById("seconds").innerText =
        (this.seconds < 10 ? "0" : "") + this.seconds;
    }
  
    start() {
      if (this.interval) return;
  
      this.interval = setInterval(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.min++;
          if (this.min === 60) {
            this.min = 0;
            this.hour++;
          }
        }
        this.updateDisplay();
      }, 1000);
    }
  
    stop() {
      clearInterval(this.interval);
      this.interval = null;
    }
  
    reset() {
      this.stop();
      this.hour = 0;
      this.min = 0;
      this.seconds = 0;
      this.updateDisplay();
    }
  }
  const object = new Stopwatch();