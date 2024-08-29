const form = document.querySelector('.form')
form.addEventListener('submit',eve=>{

    eve.preventDefault()

    const successfully = document.getElementById('successfully')
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    const body = `Name:${name}<br>
    Email:${email}<br>
    Message:${message}
    `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mariano.n.aguiar@gmail.com",
        Password : "80352459D6CD1AF3AC344B489223F4DEEE8F",
        To : 'mariano.n.aguiar@gmail.com',
        From : 'mariano.n.aguiar@gmail.com',
        Subject : "Portfolio",
        Body : `${body}`
    }).then(() => successfully.style.display = "flex");

    form.reset();
})