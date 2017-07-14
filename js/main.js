/* Holiii acá va tu código también */
$(document).ready(function(){
  
  var numero_tarjeta;
    $("#input-numero-tarjeta").keyup(function (e) { 
        
        numero_tarjeta = $("#input-numero-tarjeta").val();

            
    });
  
    $("#button-ver-saldo").on('click',function(){
       
       console.log(numero_tarjeta);
        
    });
   
    
});
 


  //MENU HAMBURGUESA
  $('.button-collapse').sideNav();
  // Hide sideNav
  