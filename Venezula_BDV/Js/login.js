const authButton = document.getElementById('huella');
const hola = document.querySelector('.error');
const boda = document.querySelector('.body');
const huella = false;
usuarioTapados()

authButton.addEventListener('click', async (evento) => {

	try {
		const credential = await navigator.credentials.create({
			publicKey: {
				challenge: new Uint8Array(16),
				rp: { name: 'Ejemplo Corp' },
				user: { id: new Uint8Array(16), name: 'usuarioejemplo@example.com', displayName: 'Usuario Ejemplo' },
				pubKeyCredParams: [{ type: 'public-key', alg: -7 }],
				authenticatorSelection: { authenticatorAttachment: 'platform', userVerification: 'required' },
			}
		});

		console.log('Credencial biométrica creada:', credential);
		huella = true;
		datosCredenciales(huella)
	} catch (error) {
		datosCredenciales()
	};
});
function datosCredenciales(huella){
	const nmr_usuariorecuperado = localStorage.getItem('nmr_usuario')
	if (nmr_usuariorecuperado) {
		const usuariorecuperado = localStorage.getItem('usuario');
		if (usuariorecuperado) {
			if (huella == true) {
				tiempoRedireccion();
			}else{
				contraseña();
			}
		}else{
			Usuario();
		}
	}else{
		nmr_usuario();
	};
}
boda.addEventListener('click', ()=>{ 
	boda.style.scale= '0';
	hola.style.scale = '0' 
});

document.body.addEventListener('keyup', (evento) =>{
	if(evento.key === 'Escape' || evento.keyCode === 27){
		boda.style.scale = '0'; 
		hola.style.scale = '0'; 
	}
});

function tiempoRedireccion(){
	const nmrAleatorio = Math.floor(Math.random()*5000 + 1);
	setTimeout(() =>{
		const tiempo = new Date();
		let horas = tiempo.getHours();
		const minutos = tiempo.getMinutes();
		const periodo = horas >= 12 ? 'PM' : 'AM';
		horas = horas % 12;
		horas = horas ? horas : 12;
		const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
		const fecha = tiempo.getDate() + '/' + tiempo.getMonth() + '/' + tiempo.getFullYear() + '  ' + horas + ':' + minutos + ' ' + periodo;
		const cronometro = 180000;
		const date = {fecha: fecha,cronometro: cronometro};
		console.log(date)
		localStorage.setItem('tiempo', JSON.stringify(date));
		const tiempoRestante = JSON.parse(localStorage.getItem('tiempo'));
		console.log("tiempoRestante", tiempoRestante);
		window.location.href ='paginaprincipal.html';

	}, nmrAleatorio);
	hola.style.scale = '1';
	hola.style.zIndex = '2';
	boda.style.scale = '1';
	hola.innerHTML = `<lord-iconsrc="https://cdn.lordicon.com/mtuudzxm.json"trigger="loop"stroke="bold"colors="primary:#fff,secondary:#3f3f3f"style="width:109px;height:109px"></lord-icon>`
	hola.style.fontSize = '5.4em'
};

function contraseña(){
	hola.style.scale = '1';
	hola.style.zIndex = '2';
	boda.style.scale = '1';
	hola.innerHTML = '<input type="text" placeholder="Introduce tu contraseña"><p id="enviar">Enviar</p>';
	const acceder = document.getElementById('enviar');
	acceder.addEventListener('click', ()=>{
		tiempoRedireccion()
	});
};
function nmr_usuario(){
	hola.style.scale = '1';
	hola.style.zIndex = '2';
	boda.style.scale = '1';
	hola.innerHTML = '<b class="titulo">NUMERO de pago Movil</b><input type="tel" id="nmr_usuario"><input type="submit" id="enviarNmr" value="Enviar">';
	const enviarNmr = document.getElementById('enviarNmr');
	enviarNmr.addEventListener('click', ()=>{
		const nmr_usuario = document.getElementById('nmr_usuario').value;
		console.log("nmr_usuario", nmr_usuario);
		localStorage.setItem('nmr_usuario', nmr_usuario);
		const usuariorecuperado = localStorage.getItem('usuario');

		if (usuariorecuperado) {
			contraseña();
		}else{
			Usuario();
		}
	});
};
function Usuario(){
	hola.style.scale = '1';
	hola.style.zIndex = '2';
	boda.style.scale = '1';
	hola.innerHTML = '<b class="titulo">Usuario Unico</b><input type="text" id="usuario" placeholder="Introduce Tu Usuario"><input type="submit" id="enviarUser" value="Enviar">';
	const enviarUser = document.getElementById('enviarUser');
	enviarUser.addEventListener('click', ()=>{
		const usuario = document.getElementById('usuario').value;
		console.log("usuario", usuario);
		localStorage.setItem('usuario', usuario);
		contraseña();
	});
}

function usuarioTapados() {
	const usuarioSinTapar = localStorage.getItem('usuario');
	if (usuarioSinTapar) {
        const usuarioTapado = document.getElementById('usuarioTapado');
        if (usuarioSinTapar.length <= 2) {
            usuarioTapado.innerHTML = usuarioSinTapar;
        }
        const primeraLetra = usuarioSinTapar.charAt(0);
        const ultimaLetra = usuarioSinTapar.charAt(usuarioSinTapar.length - 1);
        const intermedios = '*'.repeat(usuarioSinTapar.length - 2);
        usuarioTapado.innerHTML = primeraLetra + intermedios + ultimaLetra; 
	}else{
		console.log('usuario sin tapa no existe')
	}
};
const desvincular = document.getElementById('Desvilcular').addEventListener('click', ()=>{
	localStorage.clear();
	boda.style.scale = '1';
	const alert = document.querySelector('.alert');
	alert.innerHTML = '<spa id="Alert">Se Desvinvulo Su Usuario Justo Con su NUMERO De Telefono</spa>'
	alert.style.scale = '1'
	setTimeout(()=>{
		window.location.href ='../index.html';
	},3000)

});