import fastify from 'fastify'
import userRoutes from './routes/user.routes'
import permissionsAndRolesRoutes from './routes/perminssionsAndRoles.ts.routes'

const server = fastify()

userRoutes(server)
permissionsAndRolesRoutes(server)

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
