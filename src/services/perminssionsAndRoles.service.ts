// src/services/user.service.ts
import { Permissions, PrismaClient, Roles } from '@prisma/client'
const prisma = new PrismaClient();


export class PermissionsAndRoles {

  async createPermissions(permission: Permissions){
    try{
      const searchURL = await prisma.permissions.findFirst({
        where:{
          name: permission.name
          }
        }  )
     
      if(searchURL) return "Permision exist" 

      const newPermission = await prisma.permissions.create({
        data:{
          ...permission
        }
      })
      
      return newPermission

    }catch(err){
      console.log(err)
    }
  }

  async createRoles(roles: Roles){
    try{
      
      const searchName = await prisma.permissions.findFirst({
        where:{
          name: roles.name
          }
        }  )
     
      if(searchName) return "Role exist" 

      const newRole = await prisma.roles.create({
        data:{
          name: roles.name,
          description: roles.description,
          permissions: {
            connect:{
              id: roles.permissionsId
            }
          }
        },
      })
    
      return newRole

    }catch(err){
      console.log(err)
    }
  }

}