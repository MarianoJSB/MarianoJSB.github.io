//Make the image dimensions//
const wid = 400
const hei = 400

//Object called target where we assign as method the function randomNumber() and pass it as parameter wid when the property is axisX and hei when the property is axisY//
let target = {
    x : randomNumber(wid),
    y : randomNumber(hei)
}

//Select the picture//
const picture = document.getElementById('image')

//Select the side where we are going to enter the distance messages//
const messages = document.getElementById('distance')

//Variable attemps//
let attempts = 0

picture.addEventListener('click', (e) => {
    let distance = distanceTarget(e, target)//Variable distance will be used to know the distance between the event click and the target//
    let hint = hints(distance)//Variable calls the hints() function and pass as parameter the distance(previous variable)//
    messages.innerHTML = hint//Enter the messages in the HTML//
    attempts++

    if(distance < 20){//Conditional to know where the player won and in how many attemps//
        alert(`¡CONGRATULATIONS! You have found the treasure in ${attempts} attempts`)
        location.reload()//Reload the game//
    }
})