const content = document.querySelector("#content")
const audio = document.querySelector("#audio")

const say = text =>{
    speechSynthesis.speak(new SpeechSynthesisUtterance(text))
    content.innerHTML = `<p>${text}</p>`
}

const speak = document.getElementById("speak").addEventListener('click',ev =>{
    ev.preventDefault()
    const listen = document.getElementById("text").value
    say(listen)
    audio.innerHTML = `<img src="icon.png" alt="Audio" title="Audio" class="audio">`
})