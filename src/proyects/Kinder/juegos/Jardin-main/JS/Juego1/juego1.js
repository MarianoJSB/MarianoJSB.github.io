let ronda = 1;
let opcionCorrecta = 'opcion1';
let win = false;
let playingAudio = false;
let animalAnterior = 'PERRO';
let puntos = 0;
let tutorialIniciado = false;
const cosas = [
    'zapato',
    'manzana',
    'naranja',
    'silla',
    'pelota',
    'a',
    'e',
    'p',
    'b',
    'o',


];

const audioAnimal = document.querySelector(".AUX_ruido_animal");
const hoverDiv = document.getElementById('escucharAnimal');
const opcion1 = document.getElementById('opcion1');
const opcion2 = document.getElementById('opcion2');

const toggleH2Display = (element, displayValue) => {
  element.querySelector('h2').style.display = displayValue;
};

opcion1.addEventListener('mouseover', () => toggleH2Display(opcion1, 'flex'));
opcion1.addEventListener('mouseout', () => toggleH2Display(opcion1, 'none'));
opcion2.addEventListener('mouseover', () => toggleH2Display(opcion2, 'flex'));
opcion2.addEventListener('mouseout', () => toggleH2Display(opcion2, 'none'));


hoverDiv.addEventListener('mouseenter', () => audioAnimal.play());
hoverDiv.addEventListener('mouseleave', () => {
  audioAnimal.pause();
  audioAnimal.currentTime = 0;
});

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  if (keyPressed === 'a' || keyPressed === 'A') {
    if(tutorialIniciado === false){
      playTutorial();
    }
    tutorialIniciado = true;
  }
});

const checkWin = (element) => {
  const juego = document.querySelector(".juego");

  win = opcionCorrecta === element.id;

  if (win) {
    puntos++;
    document.getElementById('puntos').textContent = 'Puntaje: '+puntos;
    console.log('GANÓ');
    var audio = document.querySelector(".AUX_ahoradime");
    audio.play();

    audio.addEventListener("ended", () => {
      audioAnimal.play();
      document.getElementById('escucharAnimal').style.padding = '20px';
      document.getElementById('escucharAnimal').style.borderRadius = '200px';
      document.getElementById('escucharAnimal').style.backgroundColor = 'white';

      audioAnimal.addEventListener("ended", () => {
        document.getElementById('escucharAnimal').style.padding = '0';
        document.getElementById('escucharAnimal').style.borderRadius = '0';
        document.getElementById('escucharAnimal').style.backgroundColor = '#00000000';
      });
    });
    

    const cajaOpcion1 = document.getElementById('opcion1');
    const cajaOpcion2 = document.getElementById('opcion2');

    cajaOpcion1.classList.add('desaparecer');
    cajaOpcion2.classList.add('desaparecer');

    setTimeout(() => {
      cajaOpcion1.classList.remove('desaparecer');
      cajaOpcion2.classList.remove('desaparecer');
    }, 2000);

    setTimeout(() => {
      nuevaRonda();
    }, 600);

  } else {
    console.log('PERDIÓ');
    var audio = document.querySelector(".AUX_incorrecto");
    audio.play();
  }
};

const nuevaRonda = () => {
   
    const randomIdx1 = Math.floor(Math.random() * cosas.length);
    let randomIdx2 = Math.floor(Math.random() * cosas.length);
    while (randomIdx2 === randomIdx1) {
        randomIdx2 = Math.floor(Math.random() * cosas.length);
    }

    const randomPos = Math.floor(Math.random() * 2) + 1;
    opcionCorrecta = 'opcion'+randomPos;

    const opcion1 = document.getElementById('opcion1');
    const opcion2 = document.getElementById('opcion2');

    const opciones = [opcion1, opcion2];
    const animalesElegidos = [cosas[randomIdx1], cosas[randomIdx2]];

    opciones.forEach((opcion, index) => {
        const cosas = animalesElegidos[index];
        opcion.setAttribute('data-index', cosas);
        opcion.querySelector('h2').textContent = cosas;
        opcion.style.backgroundImage = `url(IMG/Juego1/${cosas}.jpg)`;
    });

    animalAudio = document.getElementById(opcionCorrecta).getAttribute('data-index');
    console.log(animalAudio+'lel')
    audioAnimal.querySelector('source').setAttribute('src', `AUD/Juego1/ruidos/${animalAudio}.mp3`);
    audioAnimal.load();

    console.log(opcionCorrecta);

    ronda++;
    console.log('Ronda ' + ronda + ' en curso');
}


const playAgain = () => {
  const audioBoton = document.querySelector(".AUX_boton");
  audioBoton.play();
  audioBoton.addEventListener("ended", () => audioAnimal.play());
};

const playTutorial = () => {
  const audioTutorial = document.querySelector(".AUX_tutorial");
  const audioFondo = document.querySelector(".AUX_fondo")
  audioFondo.play();
  audioTutorial.play();
  audioTutorial.addEventListener("ended", () => {
    audioAnimal.play();
    document.getElementById('principal_a').style.display = 'block';
  });
  document.querySelector('#interactividadPROVISIONAL').style.display = 'none';
  document.querySelector('h2').style.display = 'flex';

  setTimeout(() => {
    document.querySelector('h2').style.display = 'none';
    document.querySelector('.tuto_2').style.display = 'block';
    setTimeout(() => {
      document.querySelector('.tuto_2').style.display = 'none';
      document.querySelector('.cajaTutorial').style.display = 'none';
      document.querySelector('.cajaJuego').style.display = 'flex';
      document.querySelector('.juego').style.display = 'block';
    }, 3200);
  }, 1500);
};

const back = () => {
  const body = document.querySelector('body')
  body.classList.add('desaparecer');
}