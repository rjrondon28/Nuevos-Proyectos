const options = document.querySelectorAll('.option-bancarias');
const opciones = [
    { nombre: 'inicio', accion: () => { window.location.href = "../rooter/paginaprincipal.html"; } },
    { nombre: 'transferencias', html: '<h1>Transferencias</h1><a href="#">Cuentas propias</a><a href="#">Cuentas de terceros</a><a href="#">Cuentas otros bancos</a><a href="#">TCP-TDAV</a><a href="#">Targeta de crédito</a>' },
    { nombre: 'pagos', html: '<h1>Pagos</h1><a href="pagoMovil.html">PagomovílBDV</a><a href="#">PagomovílBDV QR</a><a href="#">Tarjeta de crédito</a><a href="#">Financiamiento Especial</a><a href="#">Pagos compartidos</a>' },
    { nombre: 'servicios', html: '<h1>Servicios</h1><a href="#">Pago de servicios</a><a href="#">Targeta de crédito</a><a href="#">Abrir cuenta em modeda nacional</a>' },
    { nombre: 'divisas', html: '<h1>Divisas</h1><a href="#">Compra</a><a href="#">Venta</a><a href="#">Retiro</a>' },
    { nombre: 'tarjeta', accion: () => { window.location.href = "../rooter/tergeta.html"; } }
];

options.forEach((element, index) => {
    element.addEventListener('click', () => {
        const opcion = opciones[index];
        if (opcion.accion) {
            opcion.accion();
        } else if (opcion.html) {
            document.getElementById('content-area').innerHTML = opcion.html;
            const caja = document.querySelector('.contenedor');
            const body = document.querySelector('.before');

           	click()
            function click() {
            	if (caja.classList.contains('active') & body.classList.contains('actives')) {
            	}else{ 
            		caja.classList.add('active');
            		body.classList.add('actives');
            	};
            }

            function remove() {
            	body.classList.remove('actives');
            	caja.classList.remove('active');
            };
            body.addEventListener('click', remove);
        }
    });
});
