const itemModel = require('../models/items');
console.log('hola2');
const getItem = (req, res) => {
    itemModel.getAllItem((err, results) => {
        if (err) {
            return res.status(500).send('Error al obtener los items');
        }
        res.render('tuna', { data: results });
    });
};
const addItem = (req, res) => {
    const newItem = req.body.item;
    if (!newItem) {
        return res.status(400).send('Error: El campo no puede estar vacío');
    }
    itemModel.addItem(newItem, (err, results) => {
        if (err) {
            return res.status(500).send('Error al añadir el Item');
        }
        res.redirect('/');
    });
};
const updateItem = (req, res) => {
    const index = req.body.index;
    const newItem = req.body.newItem;
    if (!newItem) {
        return res.status(400).send('El campo del NUEVO ITEM no puede estar vacío');
    }
    itemModel.updateItem(index, newItem, (err, results) => {
        if (err) {
            return res.status(500).send('Error al Actualizar Item');
        }
        res.redirect('/tuna');
    });
};
const deleteItem = (req, res) => {
    const index = req.body.index;
    itemModel.deleteItem(index, (err, results) => {
        if (err) {
            return res.status(500).send('Error al Eliminar Item');
        }
        res.redirect('/tuna');
    });
};
const form = (req,res)=>{
    try{
        res.render('form');
    }catch{
        console.error(e.message);
    };
}
module.exports = {
    getItem,
    addItem,
    updateItem,
    deleteItem,
    form
};