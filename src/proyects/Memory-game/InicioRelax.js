function iniciar() {
    repartirTarjetas()//Invocamos a la funcion principal

document.querySelectorAll('.tarjeta').forEach(function(elemento){//Seleccionamos todos los elementos de la clase tarjeta
    elemento.addEventListener('click', descubrir)//Utilizamos el listener para cuando hagamos click, suceda la funcion descubrir
})

}
iniciar()