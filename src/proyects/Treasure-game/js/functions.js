//This function is for that we can get a random number where the treasure will be//
const randomNumber = size => {
    return Math.floor(Math.random() * size)
}

//Function for that we can know the distance between the target and the event//
let distanceTarget = (e, target) => {
    let diffX = e.offsetX - target.x //The variable x is to get the distance between the event on  the x-axis and the target on the x-axis//
    let diffY = e.offsetY - target.y //And this variable is the same as the previous variable with the difference that it is on the y-axis//
    return Math.sqrt(diffX * diffX + diffY * diffY)//The function Math.sqrt() is used to calculate the square root//
    //We return the hypotenuse//
}

//This function helps the player know the distance//
let hints = distance => {
    if(distance < 40){
        return `It is Qatar`
    }
    else if(distance < 80){
        return `Really hot`
    }
    else if(distance < 120){
        return `Hot`
    }
    else if(distance < 180){
        return `Warm`
    }
    else if(distance < 250){
        return `Cold`
    }
    else if(distance < 310){
        return `Really cold`
    }
    else{
        return `It is the Antarctica`
    }
}
