function comparar(tarjetasComparadas){//Funcion para comparar si las tarjetas seleccionadas son iguales
    if (tarjetasComparadas[0].dataset.valor === tarjetasComparadas[1].dataset.valor){
        adivinarBien(tarjetasComparadas)//Llamamos a funcion en caso de adivinar las cartas 
    }
    else{
        adivinarMal(tarjetasComparadas)//SetTimeOut es una funcion para establacer en tiempo determinado a una funcion
    }
}