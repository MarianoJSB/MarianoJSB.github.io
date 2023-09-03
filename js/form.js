const form = document.getElementById('form')
form.addEventListener('submit',eve=>{

    eve.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('text').value
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
        Subject : document.getElementById('subject').value,
        Body : `${body}`
    }).then(message => alert(message));
})