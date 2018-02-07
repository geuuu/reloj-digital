//Esto se ejecuta cuando se termina de cargar todo el documento
//Garantizando su funcionamiento
var fecha;
var tema = [
  "https://bootswatch.com/4/minty/bootstrap.css",
  "https://bootswatch.com/4/superhero/bootstrap.css"
];
function escribeFecha(){
  //Va a poner la fecha
  fecha = new Date();
  //Día es  desde las 6 am hasta las 18:00 pm
  $('#horas').text(fecha.getHours());
  $('#minutos').text(fecha.getMinutes());
  $('#segundos').text(fecha.getSeconds());
  //Día es  desde las 6 am hasta las 18:00 pm
  if(
  fecha.getHours() >= 6 &&
  fecha.getHours() <= 18
  ){
    $('#tema').attr("href", tema[0]);
  } else{
    $('#tema').attr("href", tema[1]);
  }
}



$(document).ready(function(){
  escribeFecha();
  setInterval(function(){
    escribeFecha();
    console.info('Escribiendo fecha');
  },1000);

//alert('Ya se cargó todo bien =)');
});
