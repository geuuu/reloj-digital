//Esto se ejecuta cuando se termina de cargar todo el documento
//Garantizando su funcionamiento
var fecha;
function escribeFecha(){
  //Va a poner la fecha
  fecha = new Date();
  $('#horas').text(fecha.getHours());
  $('#minutos').text(fecha.getMinutes());
  $('#segundos').text(fecha.getSeconds());
}
$(document).ready(function(){

  escribeFecha();
  setInterval(function(){
    escribeFecha();
    console.info('Escribiendo fecha');
  },1000);

//alert('Ya se cargó todo bien =)');
});
