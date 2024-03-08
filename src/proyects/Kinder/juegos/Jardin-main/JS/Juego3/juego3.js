window.addEventListener('DOMContentLoaded', (event) => {
    const contenedorOvejas = document.getElementById('ovejas');
    const contenedorBotones = document.getElementById('botones');
    const mensajeResultado = document.getElementById('resultado');
    let respuestaCorrecta;
    const buttonCount = 3;
  
    function generarNumeroRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function generarBotones() {
      contenedorBotones.innerHTML = '';
  
      const numbersSet = new Set();
      while (numbersSet.size < buttonCount - 1) {
        numbersSet.add(generarNumeroRandom(1, 5));
      }
      numbersSet.add(respuestaCorrecta);
  
      const numbersArray = Array.from(numbersSet);
      shuffleArray(numbersArray);
  
      numbersArray.forEach((number) => {
        const button = document.createElement('button');
        button.innerText = number;
        button.addEventListener('click', () => {
          if (button.innerText === respuestaCorrecta.toString()) {
            mensajeResultado.innerText = '¡Felicitaciones! ¡Has ganado!';
          } else {
            mensajeResultado.innerText = '¡Has perdido! Inténtalo de nuevo.';
          }

          resetGame();
        });
        contenedorBotones.appendChild(button);
      });
    }
  
    function resetGame() {
      respuestaCorrecta = generarNumeroRandom(1, 5);
      createSheep(respuestaCorrecta);
      generarBotones();
    }
  
    function createSheep(sheepCount) {
      contenedorOvejas.innerHTML = '';
    
      const imagenesOvejas = ['oveja1.png', 'oveja2.png', 'oveja3.png', 'oveja4.png'];
    
      for (let i = 0; i < sheepCount; i++) {
        const sheepImg = document.createElement('img');
        const randomIndex = generarNumeroRandom(0, imagenesOvejas.length - 1);
        sheepImg.src = 'IMG/Juego3/' + imagenesOvejas[randomIndex];
        contenedorOvejas.appendChild(sheepImg);
      }
    }
    
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    function generarBotones() {
      contenedorBotones.innerHTML = '';
    
      const numbersArray = [];
      while (numbersArray.length < buttonCount - 1) {
        const randomNumber = generarNumeroRandom(1, 5);
        if (!numbersArray.includes(randomNumber) && randomNumber !== respuestaCorrecta) {
          numbersArray.push(randomNumber);
        }
      }
    
      const indexRespuestaCorrecta = generarNumeroRandom(0, buttonCount - 1);
      numbersArray.splice(indexRespuestaCorrecta, 0, respuestaCorrecta);
      
      numbersArray.forEach((number) => {
        const button = document.createElement('button');
        button.innerText = number;
        button.addEventListener('click', () => {
          if (parseInt(button.innerText) === respuestaCorrecta) {
            mensajeResultado.innerText = '¡Felicitaciones! ¡Has ganado!';
          } else {
            mensajeResultado.innerText = '¡Has perdido! Inténtalo de nuevo.';
          }
          resetGame();
        });
        contenedorBotones.appendChild(button);
      });
    }
      
    resetGame();
  });
  