const index = (req,res)=>{
	try{
		res.render('index');
	}catch (e) {
		console.error(e.message);
		res.status(500).send('Ocurrio un error al RENDERIZAR la VISTA');
	}
};

module.exports = index;