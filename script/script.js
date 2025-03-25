const phrases = [
    "Waiting Something Happened?...",
];

const mainContainer = document.querySelector('.main-container');

const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

const heading = document.getElementById('dynamicHeading');
heading.textContent = randomPhrase;

const animationTime = randomPhrase.length * 0.1; //cepat ketik
heading.style.animationDuration = `${Math.max(animationTime, 2)}s, 0.75s`;
