// Constants
const codpos = [5500, 1100, 3300, 2200, 4400];
const tarifas = [
    { id: 1, coef: 2.3, entrega: 1000, dire: 5500 },
    { id: 2, coef: 1, entrega: 0, dire: 1100 },
    { id: 4, coef: 2, entrega: 800, dire: 2200 },
    { id: 5, coef: 3, entrega: 1200, dire: 4400 },
    { id: 3, coef: 1.5, entrega: 500, dire: 3300 }
];
const aforo=25
// Creo un objevo Envio
class Envio {
    id
    tarifa
    destino
    bulto
    domicilio
    destinatario
    total

    constructor() {
        this.id = Envio.nextId++
    }

    static nextId = 1;

    hablar(prop) {
        console.log(prop)
    }

    buscarTarifa(tar) {
        this.tarifa = tarifas.find((tarifa) => tarifa.dire === tar)?.id
        this.destino = tar
    }

    carga(largo,ancho,alto,peso){
        console.log("Entre")
        console.log(largo.value + ancho.value + alto.value + peso.value)
        const vol=largo.value*ancho.value*alto.value
        this.calculaBulto(peso.value,vol)
        this.hablar(envioAct.bulto)
    }
    
    calculaBulto(peso,vol){
        const volAforado=vol*aforo
        if(volAforado>peso){
            this.bulto=volAforado
        }else{
            this.bulto=peso
        }
    }

    destinatario(nombre,apellido,email,tel){
        this.destinatario.push(nombre.value)
        this.destinatario.push(apellido.value)
        this.destinatario.push(email.value)
        this.destinatario.push(tel.value)
    }
    calculaEntrega(direcEntrega){
        this.domicilio=direcEntrega
    }

    calculoTotal(){
        let tar=tarifas.find((tarifa)=>tarifa.id==this.tarifa)
        if(this.domicilio!=''){
            this.total=(tar.coef*this.bulto*1000)+tar.entrega
            console.log(this.total)
        }else{
            this.total=tar.coef*this.bulto*1000
            console.log(this.total + "ent")
        }
        return this.total
    }
}

//Instancio un nuevo Envio
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

// Funciones de botones de navegacion
function nextStep() {
    const activeElement = document.getElementsByClassName("active")[0]
    const nextElement = activeElement.nextElementSibling
    activeElement.classList.remove("active")
    nextElement.classList.add("active")
}

function prevStep() {
    const activeElement = document.getElementsByClassName("active")[0]
    const prevElement = activeElement.previousElementSibling
    activeElement.classList.remove("active")
    prevElement.classList.add("active")
}

function pideDomi() {
    const fieldEntrega=document.getElementById("entregas")
    if(entrega.checked){
        let domi=document.createElement("input")
        domi.id="domi"
        domi.type="text"
        domi.placeholder="Ingrese el domicilio destino"
        fieldEntrega.appendChild(domi)
    }else{
        fieldEntrega.removeChild(document.getElementById("domi"))
    }
}

function mostrarPrecio(precio){
    const mostPre = document.createElement("div")
    mostPre.innerHTML=`<h2>${precio}</h2>`
    const activeElement = document.getElementsByClassName("active")[0]
    activeElement.classList.remove("active")
    mostPre.classList.add("active")
}
// Creo Event Listeners para los botones de navegacion
for (const button of nextButtons) {
    button.addEventListener("click", nextStep)
}

for (const button of prevButtons) {
    button.addEventListener("click", prevStep)
}

let valord

destinoSelect.addEventListener("change", () => {
    valord = destinoSelect.options[destinoSelect.selectedIndex].value;
    envioAct.buscarTarifa(Number(valord))
})

entrega.addEventListener("change",()=>{
    pideDomi()
})

submitButton.addEventListener("click",()=>{
    let pre=envioAct.calculoTotal()
    mostrarPrecio(pre)
    console.log(pre)
    console.log(envioAct)
})



