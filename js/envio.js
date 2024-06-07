class Envio {
    id
    tarifa
    destino
    bulto
    domicilio
    destinatario=[]
    total

    constructor() {
        this.id = Envio.nextId++
    }

    static nextId = 1;

    hablar(prop) {
        console.log(prop)
    }


    // buscarTarifa(tar) {
    //     this.tarifa = tarifas.find((tarifa) => tarifa.dire == tar)?.id
    //     this.destino = tar
    //     console.log(this.tarifa)
    // }
    async buscarTarifa(tar) {
        try{
            const res=await fetch("./db/tarifas.json")
            const data=await res.json()
            this.tarifa=data.find((tarifa)=> tarifa.dire==tar)?.id
            this.destino= tar
        }catch(err){
            Swal.fire({
                title:'Tarifa no encontrada:' + err,
                text:'Por favor ingresar un destino valido',
                confirmButtonText:'ok'
            })
        }
    }

    
    
    carga(largo,ancho,alto,peso){
        const vol=(largo*ancho*alto)/1000
        this.calculaBulto(peso,vol)
    }
    
    //Metodo para calcaular kg aforados
    calculaBulto(peso,vol){
        const volAforado=vol*aforo
        if(volAforado>peso){
            this.bulto=volAforado
        }else{
            this.bulto=peso
        }
    }

    destinatarios(nombre,apellido,email,tel){
        this.destinatario.push(nombre)
        this.destinatario.push(apellido)
        this.destinatario.push(email)
        this.destinatario.push(tel)
    }
    calculaEntrega(direcEntrega){
        this.domicilio=direcEntrega
    }

    //METODO PARA CALCULAR EL TOTAL DEL ENVIO
    async calculoTotal(){
        try{
            let res=await fetch("./db/tarifas.json")
            let tarifas=await res.json()
            let tar=tarifas.find((tarifa)=>tarifa.id==this.tarifa)
            if(this.domicilio!=''){
                this.total=(tar.coef*this.bulto)+tar.entrega
            }else{
                this.total=tar.coef*this.bulto
            }
        }catch(err){
            Swal.fire({
                title:'No se puedo calcular el valor del envio:'+ err
            })
        }
        return this.total
    }
}