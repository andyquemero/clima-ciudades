//API key de mi cuenta
const APIKey = `500ef3697b4619aca4abc84fb3f58a3d`;

// //funciones de declaracion

function obtenerClima() {
  let inputCiudad = document.getElementById("city").value;
  // inputCiudad = San%20Francisco

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCiudad}&appid=${APIKey}&units=metric&lang=es`
  )
    .then((response) => response.json())
    .then((data) => mostrarUbicacion(data));
}

function mostrarUbicacion(ubicacion) {
  // console.log(ubicacion);
  let ciudad = document.getElementById("ciudad");
  ciudad.textContent = `Ciudad: ${ubicacion.name}`;
  let gradosCiudad = document.getElementById("grados");
  gradosCiudad = ` °C`;
  let tempCiudad = document.getElementById("temperatura");
  tempCiudad.textContent = `Temperatura: ${ubicacion.main.temp + gradosCiudad}`;
  let humedadCiudad = document.getElementById("humedad");
  humedadCiudad.textContent = "Humedad: " + ubicacion.main.humidity + "%";
  let iconoClima = document.getElementById("wicon");
  let variableImagenClima = `http://openweathermap.org/img/w/${ubicacion.weather[0].icon}.png`;
  iconoClima.setAttribute("src", variableImagenClima);
  iconoClima.style.display = "inline";
  let descripcionCiudad = document.getElementById("descripcion");
  descripcionCiudad.textContent = ubicacion.weather[0].description;
  descripcionCiudad.textContent = descripcionCiudad.textContent.toUpperCase();
}

const ubi = mostrarUbicacion(ubicacion);

//mostrar clima con tecla enter usando metodo onkeypress

function obtenerClimaEnter(e) {
  if (e.keyCode == 13) {
    return ubi;
  }
}

//funcion de expresion

const ejemploPeticion = function () {};

//funcion de expresion con arrow function practica actual

// const obtenerClima = async () => {

//     let inputCiudad = document.getElementById("city").value;
//     let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${inputCiudad}&appid=${APIKey}`);

//     // then((response) => response.json())
//     let data = await response.json();

//     // then((data) => mostrarUbicacion(data))
//     mostrarUbicacion(data);

// }
