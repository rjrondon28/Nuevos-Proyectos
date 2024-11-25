let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
let f = new Date();
let container = document.querySelector('#fecha');
let fecha = "' " + f.getDate() + " '" + " de " + meses[f.getMonth()];
container.textContent = fecha;
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const salario = document.getElementById('salario');
const visible = document.querySelector('.slash');
const boton = visible.querySelector('.fa-eye-slash')
let isHidden = false;
visible.addEventListener('click', () =>{
	isHidden = !isHidden;
	salario.textContent = isHidden ? '***' : "460,29";
	boton.classList.toggle('fa-eye-slash');
	boton.classList.toggle('fa-eye');
});

