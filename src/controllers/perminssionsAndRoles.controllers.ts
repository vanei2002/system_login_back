import { Permissions, Roles } from "@prisma/client";
import { PermissionsAndRoles } from "../services/perminssionsAndRoles.service";
import { FastifyRequest, FastifyReply } from 'fastify';



const permissionsAndRoles = new PermissionsAndRoles();

export async function newPermission(request: FastifyRequest, reply: FastifyReply){

    try{
        const newPermission = await permissionsAndRoles.createPermissions(request.body as Permissions)
        reply.send(`Permision criada: ${newPermission}`).status(201)

    }catch(err){
        reply.send("Problemas na criação").status(500)
    }

}

export async function newRole(request: FastifyRequest, reply: FastifyReply){
    try{
        const newRole = await permissionsAndRoles.createRoles(request.body as Roles)
        reply.send(`Permision criada: ${newRole}`).status(201)

    }catch(err){
        reply.send("Problemas na criação").status(500)
    }
}