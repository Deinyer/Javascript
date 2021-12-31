let ingreseNumero = prompt("Cada cuanto tiempo se realiza el servicio");

if (ingreseNumero <= 15) {
  alert("En su caso puede realizarse esmaltado común");
} else if (ingreseNumero <= 30) {
  alert("En su caso se recomienda semi-permanente");
} else {
  alert(
    "se recomienda recurrir dentro de los 30 dias proximos al ultimo servicio"
  );
}
/*
var numero = parseInt(
  prompt("Cuantos Servicios se a realizado con nosotros: ")
);

for (let i = 0; i < numero; i++) {
  console.log("Hola por " + numero + "°" + " vez");
}
*/
//interactuar con el DOM

document.getElementById("titulo").innerHTML =
  "Para solicitar una visita a Domicilio completa el siguiente paso";

var titulo_list = document.getElementsByClassName("titulo_list");
var texto_list = document.getElementsByClassName("texto_list");

alert(
  "Hola, por el momento no tenemos disponible los Servicios: " +
    titulo_list[1].innerHTML +
    " Ni " +
    titulo_list[4].innerHTML
);

//turnos

const turno = [
  { nombre: "Ana", turno: 2 },
  { nombre: "Maria", turno: 5 },
  { nombre: "julia", turno: 4 },
  { nombre: "Alejandra", turno: 1 },
  { nombre: "Michelle", turno: 3 },
];

turno.sort((a, b) => {
  if (a.turno < b.turno) {
    return -1;
  }
  if (a.turno > b.turno) {
    return 1;
  }

  return 0;
});
console.log(turno);

//CLase 9 Incorporar eventos
//utilice evento change sobre la barra desplegable en "seleccione servicio"
let tipo_servicio = document.getElementById("desplegable");

tipo_servicio.addEventListener("change", obtenerdetalleservicio);

function obtenerdetalleservicio(){

    var detalle_servicio = document.getElementById("desplegable").value;
    console.log("La practia a realizarse  es " + detalle_servicio);

};
// aca utilce 2 formas para capturar el checkbox seleccionado: 
//1 con los fundamentos que dio el profesor me guie y funciono
//2 la saque de documentacion en internet.
let servicio1 = document.getElementById('flexCheckChecked1');

servicio1.addEventListener("change", obtenerservicio);

function obtenerservicio(){

    var servicio_seleccionado1 = document.getElementById("flexCheckChecked1").value;
    console.log("el servicio que se realizara es " + servicio_seleccionado1);

};

var checkbox = document.getElementById('flexCheckChecked2');
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked){
    console.log("el servicio que se realizara es Pies");
  }
};
//( mediante el evento click capture los datos de entrada en el formulario y los muestre en la consola)

let boton = document.getElementById("boton");
boton.addEventListener("click", captura,);

  var nombre = document.getElementById("nombre").value;
  var Telefono = document.getElementById("telefono").value;
  var Direccion = document.getElementById("direccion").value; 
  var Fecha = document.getElementById("fecha").value;

function captura() {
  
  alert("Hola " + nombre + " Gracias por reservar turno con nosotros");

  console.log("Nombre: " + nombre);
  console.log("Telefono: " + Telefono);
  console.log("Direccion: " + Direccion);
  console.log("Fecha: " + Fecha);

 mostrardatos();


}
// INCORPORAR JQUERY

function mostrardatos(){

  let nombremostrado = $("#nombre").val(); 
  let telefonomostrado = $("#telefono").val();
  let direccionmostrado = $("#direccion").val();
  let serviciomostrado = $("#desplegable").val()

  $("#turnosolicitado").html( "<p><strong>El turno solicitado es:</strong></p>" + 
                              "Nombre: " + nombremostrado + "<br>"+
                              "Direccion: " + direccionmostrado + "<br>"+
                              "Telefono: " + telefonomostrado+ "<br>" +               
                              "Servicio: " + serviciomostrado+ "<br>" +
                              "Fecha solicitada: " + Fecha )



};

// JSON y STORAGE
sessionStorage.setItem("dato1", nombre);
sessionStorage.setItem("dato2", Telefono);
sessionStorage.setItem("dato3", Direccion);

let datoguardado1= sessionStorage.getItem("dato1");
let datoguardado2= sessionStorage.getItem("dato2");
let datoguardado3= sessionStorage.getItem("dato3");
console.log("los datos guardados en la session son : ");
console.log(datoguardado1);
console.log(datoguardado2);
console.log(datoguardado3);

const persona1= {nuevonombre:"Deinyer", servicio:"Mantenimiento"}
const enJSON= JSON.stringify(persona1);

sessionStorage.setItem("persona1", enJSON)
console.log(sessionStorage.getItem("persona1"))

//Animacion concatenadas.
 
$(".texto_list").delay(3000).animate({ //left: '350px',
                                       height:'250px',
                                       opacity:'0.1'},
                                       "slow",
);
$(".texto_list").delay(5000).animate({
                           //left: '180px',
                           height:'290px',
                           opacity:'1'},
                           "slow",
);
$(".form").delay(10000).animate({left: '350px',
                                height:'250px',
                                opacity:'0.1'},
                                "slow",
);
$(".form").delay(3000).animate({  left: '180px',
                                  height:'290px',
                                  opacity:'1'},
                                  "slow",
);


const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

$(".secInicio").click (function(e){
  e.preventDefault();
  $("html, body").animate({
  
    scrollTop:$("#imgprueba").offset().top
  
  },2000);
  
  })

$(".secServicio").click (function(e){
  e.preventDefault();
  $("html, body").animate({
  
    scrollTop:$("#contenidopracticas").offset().top
  
  },2000);
  
  })
  $(".secReserva").click (function(e){
    e.preventDefault();
    $("html, body").animate({
    
      scrollTop:$("#titulo").offset().top
    
    },2000);
    
    })

    $(".secContacto").click (function(e){
      e.preventDefault();
      $("html, body").animate({
      
        scrollTop:$("#contactito").offset().top
      
      },2000);
      
      })  
  

$("#botonprueba").click(() => { 
  $.ajax({
      method: "GET",
      url:  "https://jsonplaceholder.typicode.com/users",
      success: function(pruebaaa) {
          console.log(pruebaaa);
          let max = 10;
          for (let datos of pruebaaa) {
              if (max > 0) {
                $("#pruebaajax").prepend(`${datos.name} ${datos.username} <br>`)
                  max--;
            }
         }
      }
  });
});


