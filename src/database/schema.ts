import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  added_at: timestamp("added_at").defaultNow(),
  updatedAt : timestamp('updated_at').notNull().defaultNow()
})

export const courses = pgTable("courses", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull().unique(),
  description: text("description"),
})