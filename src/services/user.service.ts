import {PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {

  async getAllUsers() {
    const date = await prisma.user.findMany({
      include:{
        roles:{
          include:{
            permissions:true
          }
        }
      }
    });
    return date
  }

  async getUserById(id: number) {

    const date = await prisma.user.findFirst({
      where: {id},
    });

    return date
  }

  async createUser(user: User) {
    try{
      typeof(user.rolesId) == "string" ? user.rolesId = Number(user.rolesId) : user.rolesId
      user.rolesId ? user.rolesId : user.rolesId = 1


      const existingUser = await prisma.user.findFirst({
        where: {email: user.email },
      })

      if (existingUser) return "Usuário já existe"

      const newUser =  await prisma.user.create({
        data:{
          name: user.name,
          latsName: user.latsName,
          email: user.email,
          password: user.password,
          roles: {
            connect: {
              id: user.rolesId
            }
          }
        }
      })
      
      console.log(newUser)
      return newUser
    }catch(err){
      console.log(err)
    }
  }

}

