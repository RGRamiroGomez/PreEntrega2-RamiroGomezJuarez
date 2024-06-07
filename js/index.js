const aforo=250
//DECLARO E INSTANCIO UN ENVIO() 
const envioAct=new Envio()

// Elementos del DOM

const entrega=document.getElementById("entrega")
const nombre=document.getElementById("nombre")
const apellido=document.getElementById("apellido")
const email=document.getElementById("email")
const telefono=document.getElementById("tel")
const largo=document.getElementById("largo")
const ancho=document.getElementById("ancho")
const alto=document.getElementById("alto")
const peso=document.getElementById("peso")
const destinoSelect = document.getElementById("valord")
const nextButtons = document.getElementsByClassName("next")
const prevButtons = document.getElementsByClassName("prev")
const submitButton = document.getElementById("submit")

cargaDest(destinoSelect)

// Creo Event Listeners para los botones de navegacion

for (const button of nextButtons) {
    button.addEventListener("click", nextStep)
}

for (const button of prevButtons) {
    button.addEventListener("click", prevStep)
}

let valord

destinoSelect.addEventListener("change", () => {
    valord = destinoSelect.options[destinoSelect.selectedIndex];
    envioAct.buscarTarifa(valord.value)
})

entrega.addEventListener("change",()=>{
    pideDomi()
})

submitButton.addEventListener("click",async()=>{
    envioAct.carga(largo.value,ancho.value,alto.value,peso.value)
    envioAct.destinatarios(nombre.value,apellido.value,email.value,telefono.value)
    const dom=document.getElementById("domi")
    const domicilio=dom.value
    envioAct.calculaEntrega(domicilio)
    let pre= await envioAct.calculoTotal()
    mostrarPrecio(pre)
    guardar(envioAct)
})





