// Ambil elemen HTML
const box = document.getElementById('box');
const scoreElement = document.getElementById('score');
const gameContainer = document.getElementById('game-container');

// Variabel untuk menyimpan skor
let score = 0;

// Fungsi untuk memindahkan kotak ke posisi acak
function moveBox() {
  const containerWidth = gameContainer.offsetWidth;
  const containerHeight = gameContainer.offsetHeight;
  const boxSize = box.offsetWidth;

  // Posisi acak
  const randomX = Math.random() * (containerWidth - boxSize);
  const randomY = Math.random() * (containerHeight - boxSize);

  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
}

// Event ketika kotak diklik
box.addEventListener('click', () => {
  score++;
  scoreElement.textContent = score; // Update skor pada layar

  // Kotak berpindah setelah diklik
  moveBox();
});

// Memindahkan kotak setiap 1.5 detik jika tidak diklik
setInterval(moveBox, 1500);

// Mulai dengan memindahkan kotak pertama kali
moveBox();
