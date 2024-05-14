let puntero=1;
const codpos=[5500,1100,3300,2200,4400]
const tarifas=[
    {id:1,coef:2.3,entrega:1000,dire:5500},
    {id:2,coef:1,entrega:0,dire:1100},
    {id:4,coef:2,entrega:800,dire:2200},
    {id:5,coef:3,entrega:1200,dire:4400},
    {id:3,coef:1.5,entrega:500,dire:3300}
]
let indice=430;
const envios=[]
class Envio{
    id;
    tarifa;
    destino;
    bulto;
    domicilio;
    destinatario=[];
    constructor(){
        this.id=puntero
        puntero=puntero+1
    }
    buscarTarifa(tar){
        tarifas.forEach((tarifa)=>{
            if(tarifa.dire==tar){
                this.tarifa=tarifa.id
            }
            this.hablar()
        })
    }
    hablar(){
        console.log(this.tarifa)
    }
}
let envioAct=new Envio()

// let dest=document.getElementById("destino")
// let bul=document.getElementById("bulto")
// let ent=document.getElementById("entrega")
// let dom=document.getElementById("destinatario")
let next=document.getElementsByClassName("next")
let prev=document.getElementsByClassName("prev")
let submmit=document.getElementById(submit)

function nextStep(){
    let act=document.getElementsByClassName("active")[0]
    let sig=act.nextElementSibling
    act.classList.remove("active")
    sig.classList.add("active")
}
function prevStep(){
    let act=document.getElementsByClassName("active")[0]
    let pre=act.previousElementSibling
    act.classList.remove("active")
    pre.classList.add("active")
}

for(sig of next){
sig.addEventListener("click",nextStep)
}
for(ant of prev){
ant.addEventListener("click",prevStep)
}

let dest=document.getElementById("valord")
let valord=dest.options[dest.selectedIndex].value
dest.addEventListener('change',function(){envioAct.buscarTarifa(valord)})
//des.addEventListener("change",envioAct.buscarTarifa(dtar))


