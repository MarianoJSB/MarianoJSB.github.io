function temporizador() {
    let segundos = 60
    let segundosTXT
    let cronometro
    function contador() {
    segundos--
        if(segundos < 0){
            segundos = 0
            clearInterval(cronometro)
            iniciar()
        }
    segundosTXT = segundos
        if(segundos < 10){
            segundosTXT = "0" + segundos
            document.getElementById("sonido-reloj").play()
        }
    document.getElementById("temporizador").innerHTML = segundosTXT
    }

    function reiniciar(){
        segundos = 60
        clearInterval(cronometro)
        document.getElementById("sonido-reloj").pause()
    }

    document.querySelector(".reiniciar").addEventListener('click',reiniciar)

    cronometro = setInterval(contador,1000)
}