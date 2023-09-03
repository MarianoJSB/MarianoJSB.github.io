//BUTTONS VARIABLES//
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")
const restart = document.querySelector("#restart")

//CONTENT//
const content = document.querySelector(".content")

//CREATING A COUNTER//
let counter = 0

//counter initialization//
content.innerHTML = `<h1>${counter}</h1>`

//INCREASE COUNTER VALUE//
increase.addEventListener('click', ev => {
    ev.preventDefault()
    counter++
    content.innerHTML = `<h1>${counter}</h1>`
})

//DECREASE COUNTER VALUE//
decrease.addEventListener('click', ev =>{
    ev.preventDefault()
    counter--
    content.innerHTML = `<h1>${counter}</h1>`
})

//RESTART COUNTER VALUE TO 0//
restart.addEventListener('click', ev =>{
    ev.preventDefault()
    counter = 0
    content.innerHTML = `<h1>${counter}</h1>`
})