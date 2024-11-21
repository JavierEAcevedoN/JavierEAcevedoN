const botonImg = document.getElementById("botonImg");
const botonLinks = document.getElementById("links")
botonImg.addEventListener("click", () => {

    botonImg.setAttribute("style","display: none")
    botonLinks.setAttribute("style","display: flex")
})
botonLinks.addEventListener("click", () => {

    botonImg.setAttribute("style","display: block")
    botonLinks.setAttribute("style","display: none")
})
const abrirPestana = link => {
    window.open(link, "_blank")
}