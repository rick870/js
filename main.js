// variables
let nombre = "Agustin";

// constantes
const apellido = "Gonzales";

//otra variable
let altura = 187;

// mostrar por consola
console.log(nombre);
console.log(altura);

// concatenacion
let concatenacion = nombre + " " + apellido;


// seleccionar elementos de la pagina

let datos = document.querySelector("#datos");
 datos.innerHTML = `
    <hr/>
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es : ${concatenacion}</h2>
     <h3>Mido : ${altura} cm</h3>
    `;

   // <h2>Mi nombre es : ${nombre} ${apellido}</h2> 


  // condiciones

altura = 180;

if(altura >= 185){
  datos.innerHTML += "<h1>Eres una persona alta</h1>";
}
else{
  datos.innerHTML += "<h1>Eres una persona bajita</h1>";
}


// Bucles
for ( let year = 2000; year <= 2023; year++)
{
  datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`;
}

// Arrays
let nombres = ["Victor", "Francisco", "Pepe" ];

let divNombres = document.querySelector("#nombres");

//divNombres.innerHTML = nombres[0];

divNombres.innerHTML = "<h1>Listado de Nombres</h1><ul>";

//nombres.forEach(nombre => {

  // divNombres.innerHTML += "<li>" +nombre+ "</li>"; });

for (let nombre of nombres){

  divNombres.innerHTML += "<li>" +nombre+ "</li>";
}


divNombres.innerHTML +=  "</ul>"


// Funciones


    