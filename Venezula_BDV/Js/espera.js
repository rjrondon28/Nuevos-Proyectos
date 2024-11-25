const tiempoRedireccion = 15;
const espera = '<div class="container"><img src="PNG/pagomovil.jpg" id="padomovil"><p class="descripcion">la pagina se encuentra en desarrollo, Actualmente solo funciona le Parte del pago movil.</p><b id="segundos"></b><div class="tiempo"><p >Se recomienda abrir desde un SmartPhone...!</p></div></div><script src="Js/espera.js"></script>';

function redireccionarDespuesDeTiempo() {
    document.body.innerHTML = espera;
    const countdownElement = document.getElementById('segundos');
    let segundosRestantes = tiempoRedireccion;
    countdownElement.textContent = segundosRestantes;

    const countdownInterval = setInterval(() => {
        segundosRestantes--;
        countdownElement.textContent = segundosRestantes;

        if (segundosRestantes <= 0) {
            clearInterval(countdownInterval);
            const existente = true;
            localStorage.setItem('existente', existente)
            window.location.href = 'rooter/login.html';
        }
    }, 1000);
}
const existentes = localStorage.getItem('existente');
if (existentes) {
    window.location.href = 'rooter/login.html';    
}else{
    redireccionarDespuesDeTiempo();
}