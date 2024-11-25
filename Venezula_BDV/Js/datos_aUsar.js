const monto = document.getElementById('monto');
const cedula = document.getElementById('cedula');
const telefono = document.getElementById('destino');
const banco = document.getElementById('banco_destino');
const concepto = document.getElementById('concepto');
const fecha = document.getElementById('fecha');
const referencia = document.getElementById('referencia');
const origen = document.getElementById('origen');
const datosRecuperados = JSON.parse(localStorage.getItem('datos'));
const nmr_usuario = localStorage.getItem('nmr_usuario');

if (datosRecuperados) {
	monto.textContent = datosRecuperados.bS + ' Bs';
	referencia.textContent = '0' + datosRecuperados.referencia;
	fecha.textContent = datosRecuperados.fecha;
	cedula.textContent = datosRecuperados.cI;
	telefono.textContent = datosRecuperados.tel;
	banco.textContent = datosRecuperados.bnc;
	concepto.textContent = datosRecuperados.concep;
	if (nmr_usuario) {
		origen.textContent = nmr_usuario;
	}else{
		console.log('nmr_usuario no encontrdo');
	}
}else{
	console.log('no se encuentran datos');
};

const atras = document.querySelectorAll('.fa-arrow-left');
atras.forEach(element =>{
	element.addEventListener('click', ()=>{
		window.location.href = '../rooter/pagoMovil.html';
	});
});
