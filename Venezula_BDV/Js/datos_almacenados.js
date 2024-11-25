const pagar = document.getElementById('pagar');
pagar.addEventListener('click', (e) =>{
	almacen();
});

function almacen(){
	const persona = document.getElementById('persona').value;
	const cedula = document.getElementById('cedula').value;
	const telefono = document.getElementById('telefono').value;
	const monto = document.getElementById('monto').value;
	const concepto = document.getElementById('concepto').value;
	const banco = document.getElementById('banco').value;
	const fecha_Alctual = new Date();
	const feche = fecha_Alctual.getDate() + '/' + fecha_Alctual.getMonth() + '/' + fecha_Alctual.getFullYear();
	const envio = document.getElementById('form')
	const error = document.querySelector('.errores')
	let referencia ;
	do{
		referencia = Math.floor(Math.random() * 987654322342)
	} while(referencia.toString().length <= 11);
	const datosUser = {
		referencia: referencia,
		identificador: persona,
		fecha: feche,
		cI: cedula,
		bnc: banco,
		tel: telefono,
		bS: monto,
		concep : concepto
	};
	localStorage.setItem( 'datos', JSON.stringify(datosUser));
	envio.addEventListener('submit', (e) =>{
		e.preventDefault();
		if( !cedula || !telefono || !monto || !concepto){
			error.textContent = 'Campos vacios obligatorios';
			error.style.scale = '1';
			setTimeout(() =>{
				error.style.scale = '0';
				error.textContent = "";
			},4000);
		}else{
			window.location.href = '../rooter/resultado.html';
		}
	});
};