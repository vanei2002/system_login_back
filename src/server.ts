import fastify from 'fastify'
import userRoutes from './routes/user.routes'

const server = fastify()

userRoutes(server)

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
