const tiempoRestante = JSON.parse(localStorage.getItem('tiempo'));
console.log("tiempoRestante", tiempoRestante);
try{
	if (tiempoRestante) {
		setTimeout(()=>{
			window.location.href = '../index.html'
		},tiempoRestante.cronometro)
	}
}catch (e){
	console.error(e.message)
}