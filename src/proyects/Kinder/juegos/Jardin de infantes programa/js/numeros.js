let correct;
let prevColor = "";
let prevNum;
const numberToGuessEl = document.querySelector("#number-to-guess");
const option1El = document.querySelector("#option-1");
const option2El = document.querySelector("#option-2");
const option3El = document.querySelector("#option-3");
let correctAnsEl;
const scoreEl = document.querySelector("#score-number");
let score = 0;

function updateOptions() {
    scoreEl.textContent = score;
    scoreEl.style.color = getRandomScoreColor();

    while (option1El.hasChildNodes()) option1El.removeChild(option1El.firstElementChild);
    while (option2El.hasChildNodes()) option2El.removeChild(option2El.firstElementChild);
    while (option3El.hasChildNodes()) option3El.removeChild(option3El.firstElementChild);

    const number = 1 + (Math.floor(Math.random() * 9));
    while (number == prevNum) { number = 1 + (Math.floor(Math.random() * 9)); }
    prevNum = number;
    numberToGuessEl.textContent = number;
    numberToGuessEl.style.color = getRandomColor();
    const correctOption = number;
    let incorrectOptions = [1 + Math.floor(Math.random() * 9), 1 + Math.floor(Math.random() * 9)];

    while (incorrectOptions.includes(number) || incorrectOptions[0] == incorrectOptions[1]) {
        incorrectOptions = [1 + Math.floor(Math.random() * 9), 1 + Math.floor(Math.random() * 9)];
    }

    let options = [correctOption, ...incorrectOptions];

    options.sort(() => Math.random() - 0.5);
    correctAnsEl = options.indexOf(number);
    console.log("correct:" + options)
    console.log("correct:" + correctAnsEl)

    function createImage(src, alt) {
        let img = document.createElement('img');
        img.setAttribute('src', src);
        img.setAttribute('alt', alt); // Add the 'alt' attribute here
        img.setAttribute('class', 'option-img');
        return img;
    }

    if (options[0] > 5) {
        let diff = parseInt(options[0]) - 5;
        option1El.appendChild(createImage('resources/hand-5.png', 'Hand 5'));
        option1El.appendChild(createImage('resources/hand-' + diff + '.png', 'Hand ' + diff));
    } else {
        option1El.appendChild(createImage('resources/hand-' + options[0] + '.png', 'Hand ' + options[0]));
    }

    if (options[1] > 5) {
        let diff = parseInt(options[1]) - 5;
        option2El.appendChild(createImage('resources/hand-5.png', 'Hand 5'));
        option2El.appendChild(createImage('resources/hand-' + diff + '.png', 'Hand ' + diff));
    } else {
        option2El.appendChild(createImage('resources/hand-' + options[1] + '.png', 'Hand ' + options[1]));
    }

    if (options[2] > 5) {
        let diff = parseInt(options[2]) - 5;
        option3El.appendChild(createImage('resources/hand-5.png', 'Hand 5'));
        option3El.appendChild(createImage('resources/hand-' + diff + '.png', 'Hand ' + diff));
    } else {
        option3El.appendChild(createImage('resources/hand-' + options[2] + '.png', 'Hand ' + options[2]));
    }
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
    speechSynthesis.speak(new SpeechSynthesisUtterance(numberToGuessEl.textContent));
}

option1El.addEventListener("click", handleOptionClick);
option2El.addEventListener("click", handleOptionClick);
option3El.addEventListener("click", handleOptionClick);
document.getElementById("tts-number").addEventListener("click", handleTextToSpeechClick);

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