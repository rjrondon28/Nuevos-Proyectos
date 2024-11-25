import { Router } from 'express';
import estudianteController from '../controllers/estudianteController.js';

const router = Router();

router.get('/' , estudianteController.index);
router.get('/todos', estudianteController.obtenerTodos);
router.post('/estudiantes', estudianteController.crear);
router.put('/estudiantes', estudianteController.actualizar);
router.delete('/estudiantes/:id', estudianteController.eliminar);

export default router;