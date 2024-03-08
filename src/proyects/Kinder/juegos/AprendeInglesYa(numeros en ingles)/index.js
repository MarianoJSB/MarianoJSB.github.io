let cont =0 
let conta =0
let imgSelec = ""
let textoSelec = ""
let intentos = 3 // de esta variable depende cuantas imagenes y palabras se van a crear
let errados = 0
let numerosUsados = []
let palabras = [
    'number one', 'number two', 'number three', 'number four', 'number five', 'number six', 'number seven', 'number eight', 'number nine', 'number ten'
  ];
  
let opciones = []
function generadorNumerosAleatorios() {
        if (numerosUsados.length === palabras.length) {
            throw new Error('No hay más números disponibles');
        }
        let numeroAleatorio;
        do {
            numeroAleatorio = Math.floor(Math.random() * palabras.length);
        } while (numerosUsados.includes(numeroAleatorio));
        numerosUsados.push(numeroAleatorio);
        return numeroAleatorio;
    // esta funcion es para que no se repitan los numeros
}
async function opcioness() {
		const codigo = document.getElementById(`palabras`)
    for (let index = 1; index <= intentos; index++) {
        let num = generadorNumerosAleatorios()
        opciones[index] = palabras[num]
        codigo.innerHTML += `
        <div class="palabra" id="op${index}">                            
            <input type="radio" name="palabra" id="palabra${index}">
            <label id="pal${index}" for="palabra${index}">${opciones[index]}</label>
        </div>
        `
        
    }
    // acá creo las palabras en base a los numeros aleatorios 


        var parent = document.getElementById("palabras");
        var divs = parent.children;
        var frag = document.createDocumentFragment();
        while (divs.length) {
        frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
        }
        parent.appendChild(frag);
    // aca desordeno las palabras en el php para que no esten en el mismo lugar que las imagenes
    
        const codigo2 = document.getElementById(`imagenes`)
	for (let index = 1; index <= intentos; index++) {
        imagen = await buscar(opciones[index])
        codigo2.innerHTML += `
        <div class="imagen" id="img${index}">
            <input type="radio" name="imagen" id="imagen${index}"> 
            <img src="${imagen}" id="img${index}" for="imagen${index}">   
        </div>
        `; 
	}
    // aca creo las imagenes llamando a la funcion buscar(que usa la api de bing)
}
opcioness()
function imgChecker(input) {
    var radius = document.getElementsByName(input);
        for (var i = 0; i < radius.length; i++) {
            if (radius[i].checked) {
                // El radius está marcado
                imgSelec=radius[i].id
                imgSelec = imgSelec.replace("imagen", "palabra");
                console.log(imgSelec+" seleccionada");
            } else {
                // El radius no está marcado
            }
        }
}
// esta funcion se fija cual input:radio esta siendo "checked" para guardarlo en un variable con "palabra" + concatenado con el id del input
function textChecker(input) {
    var radius = document.getElementsByName(input);
        for (var i = 0; i < radius.length; i++) {
            if (radius[i].checked) {
                textoSelec=radius[i].id
                console.log(textoSelec+" seleccionada");
            } else {
            }
        }
}
// esta funcion se fija cual input:radio esta siendo "checked" para guardarlo en un variable con "palabra" + concatenado con el id del input xd
document.addEventListener('click', function(event) { // esta funcion hace que lo que viene funcione cada vez que se hace click en cualquier input de la pagina
    if (event.target.tagName === 'INPUT') {
        imgChecker('imagen')
        textChecker('palabra')
        const codigo3 = document.getElementById("cod") // "cod" es una caja en el index que tiene un display none para que se puedan insertar fragmentos de codigo como el audio pero sin que se vea en la pagina
        let conta = 1
        for (let index = 1; index <= intentos; index++) { //este ciclo lo que hace es fijarse cuando los 3 input estan disabled
            const palabra = document.getElementById(`palabra${index}`);
            if (palabra.disabled == true) {
                conta +=1
            }
        }
        if (imgSelec != "" && textoSelec != "") {
            console.log("definido")
            //este codigo se acciona cuando el usuario ya eligio una imagen y un texto
                    let usuario = document.getElementById('nickname')
            if (imgSelec == textoSelec) {
                //este codigo se acciona cuando la imagen y el texto coinciden
                console.log("iguales!");
                let cont = 0;
                let intervalo = setInterval(() => { // este intervalo suma 5 puntos dividido en 5 segundos para que haga la ""animacion"" 
                   
                    
                    cont += 1;
                    if (cont >= 5) {
                        clearInterval(intervalo);
                    }
                }, 100);
                // aca creo reproduzco el audio corto para cuando la imagen y la palabra coinciden
                codigo3.innerHTML += ` 
                    <audio autoplay id="audioo">
                        <source src="audios/Ganaste.mp3" type="audio/mpeg">
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                `;
                setTimeout( // en todo este timeout, al pasar los 900 milisegundos del audio (no son esos con exactitud en el audio) borra el fragmento de texto del audio para que no se vuelva a reproducir en el futuro, le saco el checked a los inputs clickeados y los deshabilito
                    function name(params) {
                    const codigo4 =document.getElementById('audioo')
                    codigo4.remove()
                    // quitar cheked de input:radio
                    for (var i = 1; i <= intentos; i++) {
                        let miOpcion = document.getElementById(`palabra${i}`);
                        let palabra = document.getElementById(`pal${i}`)
                        if (miOpcion.checked == true) {
                            palabra.style.opacity = "50%"; //esto se le aplica a la palabra despues de que acierta
                            miOpcion.checked= false
                            miOpcion.disabled = true;
                            console.log(miOpcion)
                        }
                    }
                    for (var i = 1; i <= intentos; i++) {
                        let miOpcion2 = document.getElementById(`imagen${i}`);
                        let imagen = document.getElementById(`img${i}`)
                        if (miOpcion2.checked == true) {
                            imagen.style.opacity = "50%"; //esto se le aplica a la imagen despuesde que acierta
                            miOpcion2.checked = false
                            miOpcion2.disabled = true; 
                        console.log(miOpcion2)
                        }
                    }
                    console.log(conta)
                    if (conta == intentos) {// este if se acciona cuando los 3 input de abajo estan deshabilitados
                        if (errados > intentos/2) {// este if se fija cuantas veces se equivoco el usuario para saber si poner el audio "Ganastee.mp3" o "Perdistee.mp3" (todavia no se bien que poner en la condicion ya que no se tampoco si vamos a seguir usando 3 palabras o mas)
                            
                            codigo3.innerHTML += `
                                <audio autoplay id="audioo">
                                    <source src="audios/Perdistee.mp3" type="audio/mpeg">
                                    Tu navegador no soporta el elemento de audio.
                                </audio>
                            `;
                            
                            let form = document.getElementById("actualizarPuntos");
                            setTimeout(() => {
                                
                                const codigo4 =document.getElementById('audioo')
                                codigo4.remove()
                            form.innerHTML += `
                               
                                <input type="text" name="nombre" value="${usuario.innerHTML}">
                                <input type="submit">
                            `
                            event.preventDefault()
                            form.submit()
                            }, 1000);
                        } else {
                            
                        codigo3.innerHTML += `
                            <audio autoplay id="audioo">
                                <source src="audios/Ganastee.mp3" type="audio/mpeg">
                                Tu navegador no soporta el elemento de audio.
                            </audio>
                        `;
                        
                        let form = document.getElementById("actualizarPuntos");
                        setTimeout(() => {
                            
                            const codigo4 =document.getElementById('audioo')
                            codigo4.remove()
                            form.innerHTML += `
                                <input type="text" name="nombre" value="">
                                <input type="submit">
                            `
                            event.preventDefault()
                            form.submit()
                        }, 1500);
                        }
                    }
                    },400);


            }else{
                console.log("no iguales")
                codigo3.innerHTML += `
                    <audio autoplay id="audioo">
                        <source src="audios/Perdiste.mp3" type="audio/mpeg">
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                `
                
                setTimeout(
                    function a(params) {
                    const codigo4 =document.getElementById('audioo')
                    codigo4.remove()
                // quitar cheked de input:radio
                for (var i = 1; i <= intentos; i++) {
                    let miOpcion = document.getElementById(`palabra${i}`);
                    console.log(miOpcion)
                    if (miOpcion.checked == true) {
                            miOpcion.checked =false
                    }
                }
                for (var i = 1; i <= intentos; i++) {
                    var miOpcion = document.getElementById(`imagen${i}`);
                    if (miOpcion.checked == true) {
                        miOpcion.checked = false
                    }
                }
                }, 400);
                errados += 1
            }
        }else{
            console.log("indefinido")

        }
        imgSelec = ""
        textoSelec = ""
        
    }
});