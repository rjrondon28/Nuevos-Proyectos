const menu = document.getElementById('menu');
const caja = document.querySelector('.menu');

const menuToggle = '<div class="info_usuario"><div class="foto"><img src="../PNG/user.png" alt="" id="foto"><i class="fa-solid fa-camera"></i></div><p id="usuario">d</p><span>Ulmima seción<b id="ultimaSecion"></b></span></div><div class="option_menu"><a href="#"><i class="fa-solid fa-gear"></i>configuracion</a><a href="#"><i class="fa-brands fa-google-play"></i>Calificar En PlayuStore</a><a href="#"><i class="fa-solid fa-location-dot"></i>Ubica Tu agencia</a><a href="#" id="redes"><img src="../PNG/logo.png" alt="">Siguenos por<i class="fa-solid fa-chevron-down"></i></a><ol id="social"><li><a href="#">Facebook</a></li><li><a href="#">Instagram</a></li><li><a href="#">X</a></li></ol><a href="#"><i class="fa-solid fa-circle-exclamation"></i>Acerca de BDV</a><a href="../index.html"><i class="fa-solid fa-arrow-right-from-bracket"></i>Salir</a></div>';
menu.addEventListener('click', ()=>{
    caja.innerHTML = menuToggle;
    caja.style.width = '-85%';
    caja.style.width = '85%';
    const usuariorecuperado = localStorage.getItem('usuario');
    const usuario = document.getElementById('usuario');
    const ultimaSecion = document.getElementById('ultimaSecion');
    const tiempo = JSON.parse(localStorage.getItem('tiempo'));
    if (usuariorecuperado) {
        usuario.textContent = usuariorecuperado;
    }else{
        console.log('no existe usuario');
    }
    if (tiempo) {
        ultimaSecion.textContent = tiempo.fecha;
    }else{
        console.log('no existe sicion')
    }
    const body = document.querySelector('.before');
    function click() {
            body.classList.add('actives');
    }
    click()
    function remove() {
        body.classList.remove('actives');
        caja.style.width = '0%'
        caja.innerHTML = '';
    };
    body.addEventListener('click', remove);
    const redes = document.getElementById('redes');
    const social = document.getElementById('social');
    const down = document.querySelector('.fa-chevron-down');
    let isHidden = false;
    redes.addEventListener('click', ()=>{
        isHidden = !isHidden;
        social.style.height = isHidden ? 'auto' : '0';
        down.style.rotate = isHidden ? '180deg' : '0deg'
    })
});
