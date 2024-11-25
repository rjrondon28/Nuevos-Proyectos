import {Router} from 'express';
import {index} from '../controllers/controllers.js';
let ewe = ''
const routes = Router();

routes.get('/', index);


export default routes;