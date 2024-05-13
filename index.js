let puntero=1;
const codpos=[5500,1100,3300,2200,4400]
const tarifas=[
    {id:1,coef:2.3,entrega:1000,dire:5500},
    {id:2,coef:1,entrega:0,dire:1100},
    {id:4,coef:2,entrega:800,dire:2200},
    {id:5,coef:3,entrega:1200,dire:4400},
    {id:3,coef:1.5,entrega:500,dire:3300}
]
indice=430;
const envios=[]
class Envio{
    id;
    precio;
    destino;
    bulto;
    domicilio;
    destinatario=[];
    constructor(){
        this.id=puntero
        puntero=puntero+1
    }
}
envioAct=new Envio()

// let dest=document.getElementById("destino")
// let bul=document.getElementById("bulto")
// let ent=document.getElementById("entrega")
// let dom=document.getElementById("destinatario")
let next=document.getElementsByClassName("next")
console.log(next)
let prev=document.getElementsByClassName("prev")
let submmit=document.getElementById(submit)

function nextStep(){
    let act=document.getElementsByClassName("active")[0]
    let sig=act.nextElementSibling
    console.log(act)
    console.log(sig)
    act.classList.remove("active")
    sig.classList.add("active")
}
function prevStep(){
    let act=document.getElementsByClassName("active")[0]
    let pre=act.previousElementSibling
    console.log(act)
    console.log(pre)
    act.classList.remove("active")
    pre.classList.add("active")
}

for(sig of next){
sig.addEventListener("click",nextStep)
}
for(ant of prev){
ant.addEventListener("click",prevStep)
}
let dtar=getElementById("destinos")
dtar.addEventListener("onblur",)
function dataTarifa(dtar.value){
        tarifas.forEach()
}
