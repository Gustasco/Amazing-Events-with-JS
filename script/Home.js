import {crearCheckbox, crearCard} from "./Functions.js";
let categories = data.events.map((x)=> x.category);//toma todas las categorias del data
const categoriesNoRepeat = new Set(categories);//toma las categorias sin repetirlas
let categoryxd = Array.from(categoriesNoRepeat);//crea un array con las categorias desde el set
let card = document.getElementById("cardsita")//se llama al Id del div de card para añadirla
let createCheckBox = document.getElementById("checkboxing")//toma un formulario desde un ID para añadir un checkbox
let elementEvents = data.events//llama al objeto "events" dentro del array data
let buscador = document.getElementById("search")//se llama al al imput texto para volverlo un buscador

crearCheckbox(categoryxd, createCheckBox)//se crea en el html los checkboxes
crearCard(elementEvents, card)//se crea en el html las cards

createCheckBox.addEventListener('change', (xd)=>{//elimina o muestra las cards relacionadas al checkbox
    filter(elementEvents);
})

buscador.addEventListener('input', ()=>{//elimina o muestra las cards relacionadas al texto que se escriba en el imput texto
    let filterOFText = filterText(elementEvents, buscador.value)
    crearCard(filterOFText, card)
})

function filter(event) {//filtrador por categoria
    let filtrar = [...document.querySelectorAll("input[type ='checkbox']:checked")].map((element) => element.value);//transforma los checkbox en array para tomar el value de cada uno
    
    let newArrayWithFilter = filtrar.map(valor  => event.filter( object => {
    return object.category === valor
    }   )).flat() 
    console.log(newArrayWithFilter)
    
    if (!filtrar.length) {//Si no hay ningun checkbox marcado, se imprimen todas las cards
        crearCard(elementEvents, card)
    }else {//Si se marca un checkbox se compara el value del checkbox marcado 
        crearCard(newArrayWithFilter, card)
    }
    return newArrayWithFilter
    }
function filterText(eventos, valueSearch){//filtrado por texto
    return eventos.filter( evento=>evento.name.toLowerCase().includes(valueSearch.toLowerCase()))
}
