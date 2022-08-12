
let eventos = [
    {
        idEvento:1,
        descripcion:'Tomar desayuno',
        completado:false},
    {
        idEvento:2,
        descripcion:'Hacer ejercicio',
        completado:false},
    {
        idEvento:3,
        descripcion:'Daily diario',
        completado:false}
];

function agregaEvento(){

    const textEvento = document.querySelector('#evento');
    if(textEvento.value === ''){
        alert('debe tener un texto')
        return
    }
    
    const lastId = eventos[eventos.length - 1]
    ID = lastId.idEvento + 1
    const newObject = {
        idEvento:ID,
        descripcion:textEvento.value,
        completado:false
    }
    eventos.push(newObject)
    listaEventos()
    muestraInfo()
    contarRealizadas()
    textEvento.value = ''
}
function muestraInfo(){
    const total = document.querySelector('.numberTotal').innerHTML = eventos.length
    return total
}
function eliminaEstado(id){    
    const index = eventos.findIndex((ele) => ele.idEvento == id) /* 2.1 */
    eventos.splice(index, 1) /* 2.2 */
    listaEventos()
    muestraInfo()
    contarRealizadas()    
}
function contarRealizadas(){
    const realizados = eventos.filter( eventos => eventos.completado == true )
    document.querySelector('.numberRealizadas').innerHTML = realizados.length
}
function listaEventos(){
    let output = ''
    let inputText = document.getElementById('listaEvento')
    eventos.map(function(element, index, array){
        output += `<div class="row">
                        <div class="col">${element.idEvento}</div>
                        <div class="col">${element.descripcion}</div>
                        <div class="col"><input type="checkbox" id="check${element.idEvento}" onclick="actualizarEstado(${element.idEvento})"></div>
                        <div class="col cursor"><i class="fa-solid fa-xmark" onclick="eliminaEstado(${element.idEvento})"></i></div>
                    </div>` // 80
    })
    inputText.innerHTML = output
}
function actualizarEstado(id){
    if(document.getElementById('check' + id).checked === true){
        const newArr = eventos.map(obj => {
            if (obj.idEvento === id) {
                obj.completado = true
            }
            return obj;
          });
    }else{
        const newArr = eventos.map(obj => {
            if (obj.idEvento === id) {
                obj.completado = false
            }
            return obj;
          });

    }
    contarRealizadas()        
}
listaEventos()
muestraInfo()