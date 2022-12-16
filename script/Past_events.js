import { crearCheckbox,crearCardPasada } from "./Functions.js";
let categories = data.events.map((x)=> x.category);//toma todas las categorias del data
const categoriesNoRepeat = new Set(categories);//toma las categorias sin repetirlas
let categoryxd = Array.from(categoriesNoRepeat);//crea un array con las categorias desde el set
let card = document.getElementById("cardsita")//se llama al Id del div de card para añadirla
let createCheckBox = document.getElementById("checkboxing")//toma un formulario desde un ID para añadir un checkbox
let elementEvents = data.events
let buscador = document.getElementById("search")

crearCheckbox(categoryxd, createCheckBox)
crearCardPasada(elementEvents, card)

function filter(event) {//filtrador por categoria
    let filtrar = [...document.querySelectorAll("input[type ='checkbox']:checked")].map((element) => element.value);
    
    let newArrayWithFilter = filtrar.map(valor  => event.filter( object => {
    return object.category === valor
    }   )).flat()    
    if (!filtrar.length) {
        crearCard(elementEvents, card)
    }else {
        crearCard(newArrayWithFilter, card)
    }
    return newArrayWithFilter
}
function filterText(eventos, valueSearch){
    return eventos.filter( evento=>evento.name.toLowerCase().includes(valueSearch.toLowerCase()))
}
createCheckBox.addEventListener('change', (xd)=>{//elimina o muestra las cards relacionadas al checkbox
    filter(elementEvents);
})
buscador.addEventListener('input', ()=>{
    let filterOFText = filterText(elementEvents, buscador.value)
    crearCard(filterOFText, card)
})