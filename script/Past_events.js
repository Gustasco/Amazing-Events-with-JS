let categories = data.events.map((x)=> x.category);//toma todas las categorias del data
const categoriesNoRepeat = new Set(categories);//toma las categorias sin repetirlas
let categoryxd = Array.from(categoriesNoRepeat);//crea un array con las categorias desde el set
let card = document.getElementById("cardsita")//se llama al Id del div de card para añadirla
let createCheckBox = document.getElementById("checkboxing")//toma un formulario desde un ID para añadir un checkbox
let elementEvents = data.events
let buscador = document.getElementById("search")


crearCheckbox(categoryxd, createCheckBox)
crearCard(elementEvents, card)

function crearCheckbox(datos, cardsitas){//crea los checkbox
    cardsitas.innerHTML = "";
    let cardsotas = '';
    datos.forEach((x)=>{
    cardsotas +=`
    <input class="form-check-input ms-3" type="checkbox" value="${x}" id="${x}">
    <label class="form-check-label" for="flexCheckDefault">
    "${x}"
    </label>
    </div>`})
    cardsitas.innerHTML = cardsotas
}

function crearCard(datos, contenedor){//crea las cards
    contenedor.innerHTML = "";
    datos.forEach((x)=>{
        if(x.date>data.currentDate){
    contenedor.innerHTML += `
    <div class="col-sm-5">
        <div class="card">
            <img src="${x.image}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>`;}});    
};

createCheckBox.addEventListener('change', (xd)=>{//elimina o muestra las imagenes relacionadas al checkbox
    filter(elementEvents);
})
buscador.addEventListener('input', ()=>{
    let filterOFText = filterText(elementEvents, buscador.value)
    crearCard(filterOFText, card)
})

function filter(event) {//filtrador por categoria
    let filtrar = [...document.querySelectorAll("input[type ='checkbox']:checked")].map((element) => element.value);
    
    let newArrayWithFilter = filtrar.map(valor  => event.filter( object => {
    return object.category === valor
    }   )).flat() 
    console.log(newArrayWithFilter)
    
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




    


