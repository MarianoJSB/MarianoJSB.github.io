const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const imagen = document.querySelector("#logoNav");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    imagen.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    imagen.classList.remove("visible");
})