let recognition
const text = document.getElementById("content")

    if (!("webkitSpeechRecognition" in window)) {//Will be executed if voice recognition can't be started
    	alert("Sorry, the voice recognition doesn't work")
    } else {//Will be executed if voice recognition can be started
    	recognition = new webkitSpeechRecognition()
    	recognition.lang = "es-AR"//Speech language
    	recognition.continuous = true
    	recognition.interim = true
    	recognition.addEventListener("result" , ev=>{
            for (let i = ev.resultIndex; i < ev.results.length; i++){//This for transcribes your voice to text
                text.innerHTML = ev.results[i][0].transcript
            }
    })
}

recognition.start()