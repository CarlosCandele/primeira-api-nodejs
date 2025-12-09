//const fastify = require('fastify')
//const crypto = require('crypto')

import fastify from "fastify"
import crypto from "node:crypto"

const server = fastify({
   logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
})

const courses = [
    {id: '1', title: 'Curso de Node.js'},
    {id: '2', title: 'Curso de React.js'},
    {id: '3', title: 'Curso de Vue.js'}
]

server.get('/courses', () => {
    return { courses, page: 1 }
})

server.get('/courses/:id', (request, reply) => {
    type Params = {
        id: string
    }

    const params = request.params as Params
    const courseId = params.id

    const course = courses.find(course => course.id === courseId)

    if (!course) {
        return reply.status(404).send({ error: 'Curso não encontrado' })
    }

    return { course }
})

server.post('/courses', (request, reply) => {
    type Body = {
        title: string
    }

    const courseId = crypto.randomUUID()

    const body = request.body as Body
    const courseTitle = body.title

    if (!courseId) {
        return reply.status(400).send({ message: 'Título é obrigatório' })
    }

    courses.push({ id: courseId, title: courseTitle })

    return reply.status(201).send({ courseId })

})
server.listen({port: 3000}).then(() => {
    console.log('HTTP server running!')
})