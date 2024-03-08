const sentenceContainer = document.getElementById('sentence-container');
const imageContainer = document.getElementById('image-container');
const phraseImage = document.getElementById('phrase-image');
const wordContainer = document.getElementById('word-container');
const checkButton = document.getElementById('check-button');
const nextButton = document.getElementById('next-button');
const playButton = document.getElementById('play-button');
const message = document.getElementById('message');

const phrases = [
  { text: "like to play with my friends", image: "./imagenes/image3.jpg" },
  { text: "eat breakfast every morning", image: "./imagenes/image1.jpg" },
  { text: "go to the park on weekends", image: "./imagenes/image2.jpg" },
  { text: "love ice cream in the summer", image: "./imagenes/image5.jpg" },
  { text: "read books in my free time", image: "./imagenes/image4.jpg" }
];

let currentPhraseIndex = 0;
let currentUtterance = null;


let frasesAcertadas = 0;
let frasesIncorrectas = 0;

function showCurrentPhrase() {
  if (currentPhraseIndex < phrases.length) {
    const phrase = phrases[currentPhraseIndex];
    sentenceContainer.textContent = '';
    phraseImage.src = phrase.image; 
    resizeImage(); 

    
    if (currentUtterance) {
      speechSynthesis.cancel();
    }
    currentUtterance = new SpeechSynthesisUtterance(phrase.text);
    playButton.addEventListener('click', () => {
      speechSynthesis.speak(currentUtterance);
    });

    // Separar la frase en palabras y crear elementos interactivos
    const words = phrase.text.split(' ');
    for (const word of words) {
      const wordElement = document.createElement('div');
      wordElement.classList.add('word');
      wordElement.textContent = word;
      wordElement.addEventListener('click', () => {
        sentenceContainer.appendChild(wordElement);
      });
      wordContainer.appendChild(wordElement);

      // Asegúrate de que el botón "Siguiente" esté visible
      nextButton.style.display = 'block';
    }
  } else {
    // Mostrar el resultado del juego al final
    message.textContent = `Todas las frases han sido completadas. Frases acertadas: ${frasesAcertadas}, Frases incorrectas: ${frasesIncorrectas}`;

    // Ocultar el botón "Siguiente" al llegar al límite de frases
    nextButton.style.display = 'none';
  }
}

showCurrentPhrase();

// Función para verificar si la frase construida es correcta
function verificarFrase() {
  const words = Array.from(sentenceContainer.getElementsByClassName('word'));
  const userPhrase = words.map(word => word.textContent).join(' ').toLowerCase().trim();
  const correctPhrase = phrases[currentPhraseIndex].text.toLowerCase().trim();

  if (userPhrase === correctPhrase) {
    message.textContent = '¡Frase correcta!';
    message.className = '';
    frasesAcertadas++; // Incrementar el contador de frases acertadas
  } else {
    message.textContent = 'Frase incorrecta. Inténtalo de nuevo.';
    message.className = 'error';
    frasesIncorrectas++; // Incrementar el contador de frases incorrectas
  }
}

// Evento de clic en el botón "Siguiente"
nextButton.addEventListener('click', () => {
  if (currentPhraseIndex < phrases.length - 1) {
    currentPhraseIndex++;
    if (currentUtterance) {
      speechSynthesis.cancel();
      currentUtterance = null;
    }
    // Limpiar la frase y las palabras actuales
    sentenceContainer.textContent = '';
    phraseImage.src = '';
    wordContainer.textContent = '';
    message.textContent = '';
    showCurrentPhrase();
  }
});

// Evento de clic en el botón de verificación
checkButton.addEventListener('click', verificarFrase);

// Función para redimensionar la imagen
function resizeImage() {
  const image = document.getElementById('phrase-image');
  if (image) {
    image.style.width = '300px'; // Establece el ancho deseado en píxeles
    image.style.height = 'auto'; // Ajusta automáticamente la altura para mantener la proporción
  }
}

// Llama a la función de redimensionamiento cuando la página se carga y cuando se muestra una nueva imagen
window.addEventListener('load', resizeImage);