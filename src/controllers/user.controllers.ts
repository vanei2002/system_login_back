// src/controllers/user.controller.ts

import { FastifyRequest, FastifyReply } from 'fastify';
import {  UserService } from '../services/user.service';
import {User } from '@prisma/client'

const userService = new UserService();

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const users = userService.getAllUsers();
  reply.send(users);
}

export async function createUser(request: FastifyRequest, reply: FastifyReply) {

  const newUser = userService.createUser(request.body as User);
  reply.send(newUser)
  reply.status(201).send(newUser);
}


