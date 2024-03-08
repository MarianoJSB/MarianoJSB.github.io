function iniciarJuego(juego){
    document.querySelector('.cajaMadre_Inicio').style.display = 'none';
    if(juego === 'juego1'){
        var j = document.querySelector('.cajaMadre_Juego1');
    }
    else if(juego === 'juego2'){
        var j = document.querySelector('.cajaMadre_Juego2');
    }
    else{
        var j = document.querySelector('.cajaMadre_Juego3');
    }
    j.style.display = 'block';
}