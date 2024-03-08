function descubrir() {//Funcion para descubrir las cartas
    let totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)")//Declaramos la lista donde se guarden las tarjetas descubiertas

    if (totalDescubiertas.length > 1){//Comparamos para que no pueda girar mas de dos tarjetas
        return
    }

    this.classList.add("descubierta")//Con esto creamos la clase descubierta para estilizarla en el css y luego darla vuelta

    document.getElementById("sonido-carta").cloneNode().play()

    let descubiertas = document.querySelectorAll(".descubierta:not(.acertada)")//Declaramos la variable de las tarjetas descubiertas

    if (descubiertas.length < 2){//Comparamos que el maximo de tarjetas descubiertas sea 2
        return
    }

    comparar(descubiertas)//Llamamos a la funcion comparar

    let pendientes = document.querySelectorAll(".tarjeta:not(.acertada)")
    if(pendientes.length == 0){
        location.href = "pagina.html"
    }
}