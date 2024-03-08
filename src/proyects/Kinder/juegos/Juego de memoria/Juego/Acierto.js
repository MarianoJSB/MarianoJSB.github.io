function adivinarBien(cartas){//Funcion para cuando se adivinen las cartas seleccionadas
    cartas.forEach(function(elemento){
        elemento.classList.add("acertada")
    })
    document.getElementById("sonido-acierto").play()
}

function adivinarMal(cartas){//Funcion para cuando no se adivinen las cartas seleccionadas
    cartas.forEach(function(elemento){
        elemento.classList.add("desacierto")
    })

    setTimeout(function(){
        cartas.forEach(function(elemento){
            elemento.classList.remove("descubierta")
            elemento.classList.remove("desacierto")
        })
    },1000)
    document.getElementById("sonido-desacierto").play()
}