const player = document.getElementById('player')
const square = document.getElementById('square')
let score = 0

const jump = () => {
    if(player.classList == "jump"){
        return
    }
    player.classList.add('jump')
    setTimeout(()=>{
        player.classList.remove('jump')
    }, 500)
}

const gameOver = setInterval(() =>{
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    let squareLeft = parseInt(window.getComputedStyle(square).getPropertyValue('left'))

    if(squareLeft<25 && squareLeft>0 && playerTop>=245){
        alert(`¡GAME OVER!
	Score: ` + Math.floor(score/100))
        score = 0
    }
    else{
        score++;
        document.getElementById('score').innerHTML =  Math.floor(score/100)
    }
}, 10)
document.addEventListener('keydown', jump)