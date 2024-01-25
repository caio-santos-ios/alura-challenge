const screen = document.querySelector("#container_text")
const input = document.querySelector("input")

const btnCriptografar = document.querySelector("#btn_cri")
btnCriptografar.addEventListener("click", () => {
    criptografar(input.value)
    input.value = ""
})

const btnDescriptografar = document.querySelector("#btn_des")
btnDescriptografar.addEventListener("click", () => {
    descriptografar(screen.innerHTML)

    screen.innerHTML = ""

    const title = document.createElement("h2")
    title.innerText = "Nenhuma mensagem encontrada."

    const title2 = document.createElement("p")
    title2.innerText = "Digite um texto que você deseja criptografar ou descriptografar."
    
    // title.innerText = "Nenhuma mensagem encontrada."
    // document.querySelector("#title2").innerText = "Digite um texto que você deseja criptografar ou descriptografar."
    screen.append(title, title2)
})

const criptografar = (value) => {
    const valueArray = value.split("").reverse()
    screen.innerHTML = valueArray.join("")
}

const descriptografar = (value) => {
    const valueArray = value.split("").reverse()
    input.value = valueArray.join("")
}