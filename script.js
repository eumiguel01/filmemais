let secaoAdicionarFilme = document.querySelector("#secaoAdicionarFilme")
let cabecalho = document.querySelector("#header")
let principal = document.querySelector("#main")
const adicionarFilme = document.querySelector("#criar")
adicionarFilme.addEventListener("click", () => {
    secaoAdicionarFilme.style.display = "block"
    cabecalho.style.filter =  "blur(2px)"
    principal.style.filter =  "blur(2px)"
})