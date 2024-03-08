const alphabet = "abcdefghijklmnopqrstuvwxyz";
const words = [
    "Arbol",
    "Ballena",
    "Bolsa",
    "Cangrejo",
    "Casa",
    "Caballo",
    "Dado",
    "Delfín",
    "Elefante",
    "Estrella",
    "Flor",
    "Guitarra",
    "Hueso",
    "Hamburguesa",
    "Inodoro",
    "Iglú",
    "Jirafa",
    "Koala",
    "León",
    "Manzana",
    "Naranja",
    "Oveja",
    "Oso",
    "Pelota",
    "Perro",
    "Queso",
    "Reloj",
    "Raton",
    "Serpiente",
    "Tigre",
    "Triangulo",
    "Uva",
    "Vaca",
    "Wifi",
    "Xilófono",
    "Yunque",
    "Yoyo",
    "Zanahoria",
];

let correct;
let prevColor = "";
let prevLetter;
const letterToGuessEl = document.querySelector("#letter-to-guess");
const option1El = document.querySelector("#option-1");
const option2El = document.querySelector("#option-2");
const option3El = document.querySelector("#option-3");
const img1 = document.querySelector("#letra-img-1");
const img2 = document.querySelector("#letra-img-2");
const img3 = document.querySelector("#letra-img-3");
let correctAnsEl;
const scoreEl = document.querySelector("#score-number");
let score = 0;
let options;
function updateOptions() {
    scoreEl.textContent = score;
    scoreEl.style.color = getRandomScoreColor();

    const letter = alphabet[Math.floor(Math.random() * 26)].toUpperCase();
    while (letter == prevLetter) { letter = alphabet[Math.floor(Math.random() * 26)].toUpperCase(); }
    prevLetter = letter;
    letterToGuessEl.textContent = letter.toUpperCase();
    letterToGuessEl.style.color = getRandomColor();
    const correctOptions = words.filter(word => word[0] == letter);
    const incorrectOptions = words.filter(word => word[0] != letter);

    do {
        options = [correctOptions[Math.floor(Math.random() * correctOptions.length)], incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)], incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)]];
    } while (options[1] == options[2]);

    options.sort(() => Math.random() - 0.5);
    correctAnsEl = options.indexOf(options.filter(word => word[0] == letter)[0]);
    img1.setAttribute('src', 'resources/' + options[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '.png');
    img2.setAttribute('src', 'resources/' + options[1].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '.png');
    img3.setAttribute('src', 'resources/' + options[2].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '.png');


}

function handleOptionClick(event) {
    const target = event.target;
    const answers = [option1El, option2El, option3El];

    if (target == answers[correctAnsEl]) {
        document.getElementById("congrats").textContent = "CORRECTO :)"
        document.getElementById("congrats").style.color = "limegreen";
        correct = true;
        score++;
        showCongratulations();
    } else {
        document.getElementById("congrats").textContent = "INCORRECTO :("
        document.getElementById("congrats").style.color = "crimson";
        score = 0;
        showCongratulations();
    }


}

function handleTextToSpeechClick(event) {
    speechSynthesis.cancel();
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "es-Es";

    if (event.target == document.getElementById("tts-letter")) {
        if (letterToGuessEl.textContent == 'W') speech.text = "Doble B!";
        else if (letterToGuessEl.textContent == 'W') speech.text = "Y Griega!";
        else if (letterToGuessEl.textContent == 'V') speech.text = "B Corta!";
        else if (letterToGuessEl.textContent == 'B') speech.text = "VE!";
        else if (letterToGuessEl.textContent == 'C') speech.text = "SE!";
        else speech.text = letterToGuessEl.textContent + "!";
    }
    else {
        if (event.target == document.getElementById("tts-1")) speech.text = options[0] + "!";
        if (event.target == document.getElementById("tts-2")) speech.text = options[1] + "!";
        if (event.target == document.getElementById("tts-3")) speech.text = options[2] + "!";
    }
    if (speech.text == "Arbol!") speech.text = "Árbol!"
    speechSynthesis.speak(speech);
}

option1El.addEventListener("click", handleOptionClick);
option2El.addEventListener("click", handleOptionClick);
option3El.addEventListener("click", handleOptionClick);
document.getElementById("tts-letter").addEventListener("click", handleTextToSpeechClick);
document.getElementById("tts-1").addEventListener("click", handleTextToSpeechClick);
document.getElementById("tts-2").addEventListener("click", handleTextToSpeechClick);
document.getElementById("tts-3").addEventListener("click", handleTextToSpeechClick);

function showCongratulations() {

    document.getElementById("congrats").style.display = "block";
    document.getElementById("congrats-bg").style.display = "block";

    if (correct) document.getElementById("my-canvas").style.display = "block";

    setTimeout(function () {
        document.getElementById("congrats-bg").style.display = "none";
        document.getElementById("congrats").style.display = "none";
        document.getElementById("my-canvas").style.display = "none";
        correct = false;
        updateOptions();
    }, 4000);
}

updateOptions();




function getRandomColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "#815119", "black", "turquoise", "indigo", "violet", "magenta", "teal", "olive", "navy", "maroon", "lime", "khaki", "jade", "hot pink", "gold", "fuchsia", "cyan", "chartreuse", "burnt orange", "aquamarine", "apricot"];
    color = colors[Math.floor(Math.random() * colors.length)];

    while (prevColor == color) { color = colors[Math.floor(Math.random() * colors.length)]; console.log() }
    prevColor = color;
    return color;
}
function getRandomScoreColor() {
    const colors = ["red", "orange", "yellow", "green", "black", "purple", "pink", "violet", "magenta", "lime", "hot pink", "gold", "fuchsia"];
    color = colors[Math.floor(Math.random() * colors.length)];

    while (prevColor == color) { color = colors[Math.floor(Math.random() * colors.length)]; console.log() }
    prevColor = color;
    return color;
}

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

