import { Router } from 'express';

import UserController from './app/controllers/UserController';
import TaskController from './app/controllers/TaskController';
import SessionController from './app/controllers/SessionController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Todas rotas abaixo precisam estar autenticadas
routes.use(authMiddlewares);
routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);

export default routes;
