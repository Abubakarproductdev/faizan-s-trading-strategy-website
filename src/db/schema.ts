import {
  index,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const mentorshipApplications = pgTable(
  "mentorship_applications",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", { length: 120 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 40 }).notNull(),
    experienceLevel: varchar("experience_level", { length: 80 }).notNull(),
    currentStage: text("current_stage").notNull(),
    investmentCapacity: varchar("investment_capacity", { length: 80 }).notNull(),
    primaryGoals: text("primary_goals").notNull(),
    helpNeeded: text("help_needed").notNull(),
    timeCommitment: varchar("time_commitment", { length: 100 }).notNull(),
    status: varchar("status", { length: 40 }).default("submitted").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    index("mentorship_applications_email_idx").on(table.email),
    index("mentorship_applications_created_at_idx").on(table.createdAt),
  ],
);

export type MentorshipApplication =
  typeof mentorshipApplications.$inferSelect;
export type NewMentorshipApplication =
  typeof mentorshipApplications.$inferInsert;
