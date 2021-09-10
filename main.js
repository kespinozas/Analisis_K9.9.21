$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});

	$('body').on("keydown", function(e) { 
		if (e.altKey && e.which === 74) {
			location.href = "agregar_vacante.html"
			e.preventDefault();
		}
		if (e.altKey && e.which === 75) {
			location.href = "consultar_patrones.html"
			e.preventDefault();
		}
		if (e.altKey && e.which === 76) {
			location.href = "modificar_vacante.html"
			e.preventDefault();
		}
		if (e.altKey && e.which === 68) {
			location.href = "relacionar_empleado.html"
		}

		if (e.altKey && e.which === 69) {
			location.href = "eliminar_empleado.html"
		}

		if (e.altKey && e.which === 70) {
			location.href = "imprimir_vacantes.html"
		}



	});
	$("#button").on("click", function(e) { 
		alert("You clicked button");
	});
}
