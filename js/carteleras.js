const filtroPeliculas = (x)=>{
  mainSeleccion.innerHTML = '';
  peliculasElegidas = peliculas.filter(i => i.genero === x);
  peliculasElegidas.forEach(i => armadorCarteleras(i));
}

const armadorCarteleras = (i) => {
  const cartelera = document.createElement('div');
  cartelera.classList.add('cartelera');
  cartelera.innerHTML =`
  <div class="cartelera_imagen">
    <img src="${i.imagen}" alt="${i.nombre}">
  </div>
  <div class="cartelera_titulo">
    <h3>${i.nombre}</h3>
  </div>
  <div class="cartelera_info">
    <h5 class="year">${fechaPelis(i)}</h5>
    <h5 class="price">$ ${i.precio}</h5>
  </div>
  <div class="cartelera_boton">
    <button id="${i.nombre}">Comprar</button>
  </div>
  `
  mainSeleccion.append(cartelera)

  botones('button');
  buscador()
}

filtros.addEventListener('click', (e) => {
  switch (e.target.value) {
    case 'Drama':
      filtroPeliculas(e.target.value);
      break;
    case 'Comedia':
      filtroPeliculas(e.target.value);
      break;
    case 'Accion':
      filtroPeliculas(e.target.value);
      break;
    case 'Ciencia Ficcion':
      filtroPeliculas(e.target.value);
      break;
    case 'Romance':
      filtroPeliculas(e.target.value);
      break;
    case 'Thriller':
      filtroPeliculas(e.target.value);
      break;
    default:
      mainSeleccion.innerHTML = '';
      peliculas.forEach(i => armadorCarteleras(i));
      break;
  }
});
