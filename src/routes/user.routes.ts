// src/routes/user.routes.ts

import { FastifyInstance } from 'fastify';
import { getUsers, createUser } from '../controllers/user.controllers';
import ValidateToken from '../middlewares/validateToken.middlewares';

export default function userRoutes(server: FastifyInstance) {
  server.get('/users', {preHandler: ValidateToken} ,getUsers);
  server.post('/users', {} , createUser);
}
