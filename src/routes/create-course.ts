import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from "../database/client.ts"
import { courses } from "../database/schema.ts"
import z from "zod"

export const createCourseRoute: FastifyPluginAsyncZod = async (server) => {
    server.post('/courses', {
    schema: {
        tags: ['courses'],
        summary: 'Create a course',
        description: 'The route receives a title and creates a course in the database.',
        body: z.object({
            title: z.string().min(6, 'Title must be at least 6 characters long.'),
        }),
        response: {
            201: z.object({ courseId: z.uuid()}).describe('The course successfully created.')
        }
    }
}, async(request, reply) => {
    const courseTitle = request.body.title

    const result =await db
      .insert(courses)
      .values({ title: courseTitle })
      .returning()

    return reply.status(201).send({ courseId: result[0].id })

    })
}
