// src/routes/user.routes.ts

import { FastifyInstance } from 'fastify';
import { newPermission, newRole } from '../controllers/perminssionsAndRoles.controllers';

export default function permissionsAndRolesRoutes(server: FastifyInstance) {
  server.post('/permission' ,newPermission);
  server.post('/roles', newRole)
}
