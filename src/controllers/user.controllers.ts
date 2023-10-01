// src/controllers/user.controller.ts

import { FastifyRequest, FastifyReply } from 'fastify';
import { User, UserService } from '../services/user.service';

const userService = new UserService();

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const users = userService.getAllUsers();
  reply.send(users);
}

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const newUser = userService.createUser(request.body as User);
  reply.status(201).send(newUser);
}
