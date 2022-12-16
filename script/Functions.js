export function crearCheckbox(datos, cardsitas) {//crea los checkbox normalmente
  cardsitas.innerHTML = "";
  let cardsotas = "";
  datos.forEach((x) => {
    cardsotas += `
    <input class="form-check-input ms-3" type="checkbox" value="${x}" id="${x}">
    <label class="form-check-label" for="flexCheckDefault">
    "${x}"
    </label>
    </div>`;
  });
  cardsitas.innerHTML = cardsotas;
}
export function crearCard(datos, contenedor) {//crea las cards normalmente
  contenedor.innerHTML = "";
  datos.forEach((x) => {
    contenedor.innerHTML += `
    <div class="col-sm-5">
        <div class="card">
            <img src="${x.image}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.description}</p>
            <a href="./Details.html?id=${x._id}" class="btn btn-primary">See More</a>
        </div>
        </div>
    </div>`;
  });
}
export function crearCardPasada(datos, contenedor){//crea las cards contemplando que sean antes de la fecha
    contenedor.innerHTML = "";
    datos.forEach((x)=>{
        if(x.date<data.currentDate){
    contenedor.innerHTML += `
    <div class="col-sm-5">
        <div class="card">
            <img src="${x.image}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.description}</p>
            <a href="./Details.html?id=${x._id}" class="btn btn-primary">See More</a>
        </div>
        </div>
    </div>`;}});    
};
export function crearCardFutura(datos, contenedor){//crea las cards que son futuras a la fecha
    contenedor.innerHTML = "";
    datos.forEach((x)=>{
        if(data.currentDate<x.date){
    contenedor.innerHTML += `
    <div class="col-sm-5">
        <div class="card">
            <img src="${x.image}" class="card-img-top" alt="${x.name}">
        <div class="card-body">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.description}</p>
            <a href="./Details.html?id=${x._id}" class="btn btn-primary">See More</a>
        </div>
        </div>
    </div>`;}});    
};