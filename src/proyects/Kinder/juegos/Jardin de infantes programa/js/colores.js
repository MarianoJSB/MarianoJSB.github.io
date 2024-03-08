const colors = [
    { name: "Rojo", color: "red" },
    { name: "Azul", color: "blue" },
    { name: "Verde", color: "green" },
    { name: "Amarillo", color: "yellow" },
    { name: "Naranja", color: "orange" },
    { name: "Morado", color: "purple" },
    { name: "Rosa", color: "pink" },
    { name: "Marron", color: "#815119" },
    { name: "Negro", color: "black" },
    { name: "Blanco", color: "white" }
];

let prevColor = "";
let correct;
const colorToGuessEl = document.querySelector("#color-to-guess");
const option1El = document.querySelector("#option-1");
const option2El = document.querySelector("#option-2");
const option3El = document.querySelector("#option-3");
let correctOption;
const scoreEl = document.querySelector("#score-number");
let score = 0;

function updateOptions() {
    scoreEl.textContent = score;
    scoreEl.style.color = getRandomScoreColor();
    let randomIndex = Math.floor(Math.random() * colors.length);
    let color = colors[randomIndex];

    while (prevColor == color.name) {
        randomIndex = Math.floor(Math.random() * colors.length);
        color = colors[randomIndex];
    }
    prevColor = color.name;
    colorToGuessEl.style.backgroundColor = color.color;

    correctOption = color.name;
    let incorrectOptions = colors.filter(c => c.name !== correctOption).map(c => c.name);
    incorrectOptions = incorrectOptions.sort(() => Math.random() - 0.5);
    incorrectOptions = incorrectOptions.slice(0, 2);
    const options = [correctOption, ...incorrectOptions];
    options.sort(() => Math.random() - 0.5);

    option1El.textContent = options[0];
    option2El.textContent = options[1];
    option3El.textContent = options[2];

}

function handleOptionClick(event) {

    const target = event.target;
    const optionText = target.textContent;

    if (optionText == correctOption) {
        document.getElementById("congrats").textContent = "CORRECTO :)"
        document.getElementById("congrats").style.color = "limegreen";
        score++;
        correct = true;
        showCongratulations();
    } else {
        document.getElementById("congrats").textContent = "INCORRECTO :("
        document.getElementById("congrats").style.color = "crimson";
        score = 0;
        showCongratulations();
    }


}

function handleTextToSpeechClick(event) {
    const target = event.target;
    const text = document.getElementById(target.id).previousElementSibling.textContent;
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));

}

option1El.addEventListener("click", handleOptionClick);
option2El.addEventListener("click", handleOptionClick);
option3El.addEventListener("click", handleOptionClick);
[...document.getElementsByClassName("text-to-speech")].forEach(element => {
    element.addEventListener("click", handleTextToSpeechClick);
});

updateOptions();
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

