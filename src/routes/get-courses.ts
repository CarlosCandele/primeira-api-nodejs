import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import { title } from "process"
import z from "zod"

export const getCoursesRoute: FastifyPluginAsyncZod = async (server) => {

    server.get('/courses', {
      schema: {
        tags: ['courses'],
        summary: 'Get all courses',
        description: 'The route returns all courses in the database.',
        response: {
          200: z.object({
            courses: z.array(
              z.object({
                id: z.uuid(),
                title: z.string(),
              })
            )
          })
        }
      }
    },async (request, reply) => {
    const result = await db.select({
      id:courses.id,
      title: courses.title,
      
    }).from(courses)

    return reply.send({ courses: result })
    })
}



