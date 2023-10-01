import { PrismaClient } from '@prisma/client';
import { FastifyReply, FastifyRequest} from 'fastify'


type User = {
  name: string
  email: string
}

const prisma = new PrismaClient()

export default async function ValidateToken(request: FastifyRequest, reply: FastifyReply, next: any){
    
    const loginUser = request.body as User
    const date = await prisma.user.findFirst({
      where:{}
    }) 
    next();
  }