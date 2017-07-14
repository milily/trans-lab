/* Holiii acá va tu código también */
$(document).ready(function(){

	/* VALIDACIÓN DE FORMULARIO */
	var contrasenia = /[0-9]/;
	var valEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	    $("#btn-inicio-sesion").click(function (){
	        if( $("#input.email").val() == "" || !valEmail.test($("#input-email").val()) ){
	            $("#input-email").after("<span class='error'>Ingrese un email válido</span>");
	            return false;
	        }if( $("#input-password").val() == "" || $("#input-password").val().length >= 9){
	            $("#input-password").after("<span class='error'>Ingrese contraseña / ingrese una contrase que contenga solo números / menor de 8 dígitos</span>");
	            return false;
	        }else{
        	$("#btn-inicio-sesion").attr("href","options.html")
      	}

	  }); 

	/* AGREGAR TARJETAS */

	$("#boton-agregar-tarjeta").on('click', function(){
		
		var rescatar_tarjeta = $('#input-tarjeta-agregada').val();
		console.log(rescatar_tarjeta);

		$("#tarjetas_agregadas").append(`   <div  class="col s12 card-card">
					            				<div class="col s4 orange white-text center-align orange-card">
					            					`+ rescatar_tarjeta +`
					            				</div>
					            			</div>
					                    `)
			
		$('#input-tarjeta-agregada').val("");
			
		});

		

	/* VER SALDO */

   $("#button-ver-saldo").on('click',function(){
       
       var numero_tarjeta = $("#input-numero-tarjeta").val();
       
       $.ajax({
           url: "https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=" + numero_tarjeta,
           type: 'GET',
           dataType: 'JSON',
       })
       .done( function(datos_saldo){
       		console.log(datos_saldo.saldoTarjeta);
       		$("#mostrar-saldos").append(`
                        <div  class="col s12">
            				<div class="col s4">
            				</div>
            				<div class="col s4 orange white-text center-align">
            					Saldo: `+datos_saldo.saldoTarjeta+`
            				</div>
            				<div class="col s4">
            				</div>
            			</div>
                    `);
       	})
       .fail( function(){
            alert("Sigue intentando");
        })
    });


	
});
 


  /* MENU HAMBURGUESA */
  $('.button-collapse').sideNav();
 
  