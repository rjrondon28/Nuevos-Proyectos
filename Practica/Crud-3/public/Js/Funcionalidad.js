const pass = document.querySelectorAll('.pass');
const ojo = document.querySelector('.fa-eye');
let visible = false;
ojo.addEventListener('click', ()=>{
	visible = !visible;
	pass.forEach(element=>{
		element.type = visible ? 'text' : 'password'
	})
	ojo.classList.toggle('fa-eye')
	ojo.classList.toggle('fa-eye-slash')
});
const register = `<form action="/registro"><h1>Registro</h1><div class="boxInput"><input type="text" id="nombre" required="required"><label for="nombre">Nombre</label><i class="fa-solid fa-user"></i></div><div class="boxInput"><input type="text" id="Usuario" required="required"><label for="Usuario"> Usuario</label><i class="fa-solid fa-circle-user"></i></div><div class="boxInput"><input type="email" id="email" required="required"><label for="email">Correo Electrinico</label><i class="fa-solid fa-envelope"></i></div><div class="boxInput"><input type="password" id="password" class="pass" required="required"><label for="password">Contraseña</label><i class="fa-solid fa-lock"></i></div><div class="boxInput"><input type="password" id="passwordC" class="pass" required="required"><label for="passwordC">Confirme Contraseña</label><i class="fa-solid fa-lock"></i></div><div class="boxChekec">Mostra contraseña  '<i class="fa-regular fa-eye"></i>'</div><button type="submit" name="login">Registrarse</button><label class="registre" for="link" >Si ya tienes un Usuario "<a id="link" href="#" class="link">Sin In</a>"</label></form>`;
const login = `<form action="/login"><h1>Login</h1><div class="boxInput"><input type="text" id="userMail" required="required"><label for="userMail">Correo Electrinico o Usuario</label><i class="fa-solid fa-envelope"></i></div><div class="boxInput"><input type="password" id="password" class="pass" required="required"><label for="password">Contraseña</label><i class="fa-solid fa-lock"></i></div><div class="boxChekec">Mostra contraseña  '<i class="fa-regular fa-eye"></i>'</div><button type="submit" name="login">Login</button><label class="registre" for="link" >Si uno no tienes un Usuario "<a id="link" href="#" class="link">Sin Up</a>"</label></form>`;

const link = document.getElementById('link')
link.addEventListener('click', linka);

function linka() {
	visible = !visible
	document.querySelector('.body').innerHTML = visible ? register : login
	const linkd = document.getElementById('link')
	linkd.addEventListener('click', ()=>{
		linka();
	});
};