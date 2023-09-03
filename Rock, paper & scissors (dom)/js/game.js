const formu = document.getElementById("formulario")
//Player counter//
let playerCounter = 0

//Bot counter//
let botCounter = 0

formu.addEventListener('submit', e => {
    e.preventDefault()

    const content = document.getElementById("content")

    //Player//
    let playerOption = document.querySelector('input[name="attack"]:checked')

    if(playerOption){
        player = playerOption.value
    }

    //Bot//
    let bot = Math.round(Math.random() * 2)
    //0 == Rock//
    //1 == Paper//
    //2 == Scissors//

    
    //Bot chooses Rock//
    const botChoosesRock = () => {
        if(bot === 0){
            if(player === "0"){
                content.innerHTML = `
                <p>The Bot has choosen rock. There is a tie</p>
                <pre>Player<div class="playerPoints"><p>${playerCounter}</p></div>-<div class="botPoints"><p>${botCounter}</p></div>bot</pre>
                `
            }
            else if(player === "1"){
                playerCounter++
                content.innerHTML = `
                <p>The Bot has choosen rock. Player wins</p>
                <pre>Player<div class="playerPoints"><p>${playerCounter}</p></div>-<div class="botPoints"><p>${botCounter}</p></div>bot</pre>
                `
            }
            else if(player === "2"){
                botCounter++
                content.innerHTML = `
                <p>The Bot has choosen rock. Bot wins</p>
                <pre>Player<div class="playerPoints"><p>${playerCounter}</p></div>-<div class="botPoints"><p>${botCounter}</p></div>bot</pre>
                `
            }
        }
    }
    botChoosesRock()

    //Bot chooses Paper//
    const botChoosesPaper = () => {
        if(bot === 1){
            if(player === "0"){
                botCounter++
                content.innerHTML = `
                <p>The Bot has choosen paper. Bot wins</p>
                <pre>Player<div class="playerPoints"><p>${playerCounter}</p></div>-<div class="botPoints"><p>${botCounter}</p></div>bot</pre>
                `
            }
            else if(player === "1"){
                content.innerHTML = `
                <p>The Bot has choosen paper. There is a tie</p>
                <pre>Player<div class="playerPoints"><p>${playerCounter}</p></div>-<div class="botPoints"><p>${botCounter}</p></div>bot</pre>
                `
            }
            else if(player === "2"){
                playerCounter++
                content.innerHTML = `
                <p>The Bot has choosen paper. Player wins</p>
                <pre>Player<div class="playerPoints"><p>${playerCounter}</p></div>-<div class="botPoints"><p>${botCounter}</p></div>bot</pre>
                `
            }
        }
    }
    botChoosesPaper()

    //Bot chooses Scissors//
    const botChoosesScissors = () => {
        if(bot === 2){
            if(player === "0"){
                playerCounter++
                content.innerHTML = `
                <p>The Bot has choosen scissors. Player wins</p>
                <pre>Player<div class="playerPoints"><p>${playerCounter}</p></div>-<div class="botPoints"><p>${botCounter}</p></div>bot</pre>
                `
            }
            else if(player === "1"){
                botCounter++
                content.innerHTML = `
                <p>The Bot has choosen Scissors. Bot wins</p>
                <pre>Player<div class="playerPoints"><p>${playerCounter}</p></div>-<div class="botPoints"><p>${botCounter}</p></div>bot</pre>
                `
            }
            else if(player === "2"){
                content.innerHTML = `
                <p>The Bot has choosen scissors. There is a tie</p>
                <pre>Player<div class="playerPoints"><p>${playerCounter}</p></div>-<div class="botPoints"><p>${botCounter}</p></div>bot</pre>
                `
            }
        }
    }
    botChoosesScissors()
    
    const playerWinsMatch = () =>{
        if(playerCounter >= 3 && botCounter < 3){
            content.innerHTML = `<div class="finishMatch">¡¡Player has won the match!!</div>`
            playerCounter = 0
            botCounter = 0
        }
    }
    playerWinsMatch()

    const botWinsMatch = () => {
        if(playerCounter < 3 && botCounter >= 3){
            content.innerHTML = `<div class="finishMatch">¡¡Bot has won the match!!</div>`
            playerCounter = 0
            botCounter = 0
        }
    }
    botWinsMatch()
    
})