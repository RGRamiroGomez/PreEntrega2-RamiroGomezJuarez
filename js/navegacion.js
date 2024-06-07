
function mostrarPrecio(precio) {
    const precioElement = document.createElement("span");
    precioElement.className = "";
    precioElement.innerHTML = `<h2>El total de su envio es: $${precio} </h2><button type="submit" id="nuevo">Hacer nuevo envio</button>`;
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active")
    document.body.appendChild(precioElement)
    precioElement.classList.add("active")
    const envioNuevo=document.getElementById("nuevo")
    addListener(envioNuevo)
}

function guardar(act){
    let envio=JSON.stringify(act)
    let segui = 'envio' + act.id;
    localStorage.setItem(segui,envio)
    localStorage.setItem('nseg',segui)
    Swal.fire({
        title:'Envio cargado',
        text:'Numero de envio : '+act.id 
    })
}

function cargar() {
    let nenv=localStorage.getItem('nenv')
    let envioCar
    if (localStorage.getItem(nenv)) {
        let envio = JSON.parse(localStorage.getItem(nenv));
        envioCar=envio
    }else{
        envioCar=new Envio()
    }
    return envioCar
}

function addListener(elemnt){
    elemnt.addEventListener("click",()=>{
        location.reload()
    })
}

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
async function cargaDest(padre){
    try{const res=await fetch("./db/destinos.json")
    const dest=await res.json()
    padre.appendChild(document.createElement("option"))
    dest.forEach(destino => {
        const des=document.createElement("option")
        des.value=destino.id
        des.text=destino.desc
        padre.appendChild(des)
    });
    }catch(err){
        Swal.fire({
            title: "No pude cargar destinos : " + err
        })
    }
}

