function repartirTarjetas() {//Funcion principal
    let mesa = document.querySelector('.mesa')//Seleccionamos el div con la clase mesa
    let tarjetasMezcladas = mezclarTarjetas()
    mesa.innerHTML = ""

    tarjetasMezcladas.forEach(function(elemento){//Creamos el ciclo foreach para recorrer el array
        let tarjeta = document.createElement("div")//Creamos un div hijo para luego utilizarlo con el metodo appendChild

        tarjeta.innerHTML = `<div class="tarjeta" data-valor="${elemento}">
        <div class="contenidoTarjeta">${elemento}</div>
        </div>`//Asignamos un div para cada elemento del array

        mesa.appendChild(tarjeta)//Hacemos el hijo del clase mesa
    })
}