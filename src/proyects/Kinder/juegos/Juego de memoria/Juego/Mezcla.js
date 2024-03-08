function mezclarTarjetas(){//Funcion para devolver los valores de la baraja mezclada
    let mezcla = sumaTarjetas.sort(function(){//LLamamos el array sumaTarjetas para utilizar el metodo sort. Luego le pasamos como parametro
        return 0.5 -  Math.random() * 8//Una funcion en donde retornamos la baraja mezclada con el objeto Math y su metodo random()
    })
    return mezcla//Retornamos la mezcla
}