/* Holiii acá va tu código también */
$(document).ready(function(){
  
   $("#button-ver-saldo").on('click',function(){
       
       var numero_tarjeta = $("#input-numero-tarjeta").val();
       
       $.ajax({
           url: "https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip="+numero_tarjeta,
           dataType: 'JSON',
       })
       .done( function(datos_saldo){
       		console.log(datos_saldo);
       		
           
       })
        
    });
   
    
});
 


  //MENU HAMBURGUESA
  $('.button-collapse').sideNav();
  // Hide sideNav
  