import express from 'express';
import { getItem, addItem, updateItem, deleteItem, form } from '../Controllers/controrDeItem.js';
const router = express.Router();

// Rutas
router.get('/', form);
router.get('/tuna', getItem);
router.post('/add', addItem);
router.post('/update', updateItem);
router.post('/delete', deleteItem);

export default router;