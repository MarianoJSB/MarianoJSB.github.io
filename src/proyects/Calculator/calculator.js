const screen = document.getElementById('display')//Get the calculator screen//

const calculator = document.querySelectorAll('button')//Get the calculator buttons//

//We iterate the div btns and use the method foreach//
calculator.forEach(item => {
    //foreach element in the const calculator when the user do click//
    item.onclick = () =>{
        if(item.id == 'restart'){//conditional when the user do click on reset C//
            screen.innerText = ""
        }
        else if(item.id == 'backspace'){//conditional when the user do click on the backspace//
            let string = screen.innerText.toString()//This variable turns that is in the calculator screen to string//
            screen.innerText = string.substr(0,string.length-1)//Function that delete the string from the first caracter until the str variable length - 1//
        }
        else if(screen.innerText != "" && item.id == 'equal'){//conditional is used when the user do click on equal =//
            screen.innerText = eval(screen.innerText)//eval function gather the values on the screen//
        }
        else{
            screen.innerText += item.id//This sum the numbers on the screen//
        }
    }
})