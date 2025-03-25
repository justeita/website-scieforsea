const phrases = [
    "HOK > ML secara subjektif..."
];

// Pilih random phrase
const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

// Set heading dan sesuaikan kecepatan animasi
const heading = document.getElementById('dynamicHeading');
heading.textContent = randomPhrase;

// Sesuaikan waktu animasi berdasarkan panjang teks
const animationTime = randomPhrase.length / 10;
heading.style.animationDuration = `${animationTime}s, 0.75s`;