const botonSvg = document.getElementById("botonSvg");
const botonLinks = document.getElementById("links")
botonSvg.addEventListener("click", () => {

    botonSvg.setAttribute("style","display: none")
    botonLinks.setAttribute("style","display: flex")
})
botonLinks.addEventListener("click", () => {

    botonSvg.setAttribute("style","display: block")
    botonLinks.setAttribute("style","display: none")
})
const abrirPestana = link => {
    window.open(link, "_blank")
}