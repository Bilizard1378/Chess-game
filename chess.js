
document.addEventListener("DOMContentLoaded", () => {
  const chessboard = document.getElementById("chessboard");
  const bgMusic = document.getElementById("background-music");
  bgMusic.play();

  // Placeholder board generation
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    chessboard.appendChild(square);
  }

  // Timer logic
  let seconds = 0;
  const timerDisplay = document.getElementById("timer-display");
  setInterval(() => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, 1000);
});
