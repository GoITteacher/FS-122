//!======================================================
const refs = {
  clockface: document.querySelector('.js-clockface'),
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
};

//!======================================================

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) return;
    this.isActive = true;
    const initTime = new Date('11.12.2025 21:51');

    this.intervalId = setInterval(() => {
      const currentTime = new Date();
      const diffMS = initTime - currentTime;
      const result = convertMsToTime(diffMS);
      refs.clockface.textContent = result;

      if (diffMS < 0) {
        this.stop();
      }
    }, 1000);
  },

  stop() {
    if (!this.isActive) return;
    this.isActive = false;
    console.log('STOP');
    clearInterval(this.intervalId);
    refs.clockface.textContent = '00:00:00';
  },
};

//!======================================================
refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

//!======================================================
// function getTimeComponents(time) {
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);

//   return { hours, mins, secs };
// }

function convertMsToTime(milliseconds) {
  // Calculate total seconds
  let totalSeconds = Math.floor(milliseconds / 1000);

  // Calculate hours
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600; // Remaining seconds after extracting hours

  // Calculate minutes
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60; // Remaining seconds after extracting minutes

  // Pad with leading zeros if necessary
  const pad = num => String(num).padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
