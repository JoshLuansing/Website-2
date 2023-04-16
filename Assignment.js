const greetingElem = document.getElementById("greeting");
const greetings = ["안녕하세요","Hi", "Hola", "Bonjour", "Zdravstvuyte", "Guten Tag", "こんにちは", "你好", "Olá",];
let index = 0;

setInterval(() => {
    greetingElem.style.opacity = 0; // set opacity to 0
    setTimeout(() => {
        greetingElem.textContent = greetings[index];
        greetingElem.style.opacity = 1; // set opacity to 1 after 0.5s delay
    }, 500);
    index = (index + 1) % greetings.length;
}, 2000);