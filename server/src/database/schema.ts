import { text } from "drizzle-orm/pg-core";
import { date } from "drizzle-orm/pg-core";
import { integer } from "drizzle-orm/pg-core";
import {
  pgTable,
  pgEnum,
  varchar,
  boolean,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

// // Enums
// export const applicationStatusEnum = pgEnum("application_status", [
//   "applied",
//   "under_review",
//   "interview_scheduled",
//   "interviewed",
//   "rejected",
//   "accepted",
//   "withdrawn",
// ]);

// export const jobTypeEnum = pgEnum("job_type", [
//   "full_time",
//   "part_time",
//   "contract",
//   "internship",
//   "freelance",
// ]);

// export const experienceLevelEnum = pgEnum("experience_level", [
//   "entry_level",
//   "mid_level",
//   "senior_level",
//   "executive",
// ]);

// export const userStatusEnum = pgEnum("status", [
//   "blocked",
//   "active",
//   "deleted",
// ]);

export const sessions = pgTable("sessions", {
  session_id: uuid("session_id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").references(() => users.user_id),
  user_agent: varchar("user_agent", { length: 255 }).notNull(),
  expires_at: timestamp("expires_at").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const roles = pgTable("roles", {
  role_id: uuid("role_id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 50 }).unique().notNull(),
});

export const users = pgTable("users", {
  user_id: uuid("user_id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password_hash: varchar("password_hash", { length: 255 }).notNull(),
  role_id: uuid("role_id")
    .references(() => roles.role_id)
    .notNull(),
  is_verified: boolean("is_verified").notNull().default(false),
  is_mfa_enabled: boolean("is_mfa_enabled").notNull().default(false),
  mfa_secret: varchar("mfa_secret", { length: 255 }),
  status: varchar("status", { length: 255 }).notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const verification_codes = pgTable("verification_codes", {
  code_id: uuid("code_id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").references(() => users.user_id),
  type: varchar("type", { length: 255 }).notNull(),
  code: varchar("code", { length: 255 }).notNull().unique(),
  expires_at: timestamp("expires_at").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const companies = pgTable("companies", {
  company_id: uuid("company_id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  website: varchar("website", { length: 255 }),
  industry: varchar("industry", { length: 100 }),
  size: integer("size"),
  address: text("address"),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  country: varchar("country", { length: 100 }),
  gst_number: varchar("gst_number", { length: 50 }),
  logo_url: varchar("logo_url", { length: 255 }),
  description: text("description"),
  founded_year: integer("founded_year"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const employers = pgTable("employers", {
  employer_id: uuid("employer_id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").references(() => users.user_id),
  company_id: uuid("company_id").references(() => companies.company_id),
  full_name: varchar("full_name", { length: 100 }).notNull(),
  phone_number: varchar("phone_number", { length: 20 }),
  job_title: varchar("job_title", { length: 100 }),
  created_at: timestamp("created_at").defaultNow(),
});

export const applicants = pgTable("applicants", {
  applicant_id: uuid("applicant_id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").references(() => users.user_id),
  full_name: varchar("full_name", { length: 100 }).notNull(),
  phone_number: varchar("phone_number", { length: 20 }),
  date_of_birth: date("date_of_birth"),
  gender: varchar("gender", { length: 20 }),
  current_location: varchar("current_location", { length: 100 }),
  years_of_experience: integer("years_of_experience"),
  resume_url: varchar("resume_url", { length: 255 }),
  linkedin_url: varchar("linkedin_url", { length: 255 }),
  github_url: varchar("github_url", { length: 255 }),
  portfolio_url: varchar("portfolio_url", { length: 255 }),
  bio: text("bio"),
  created_at: timestamp("created_at").defaultNow(),
});

export const password_reset_tokens = pgTable("password_reset_tokens", {
  token_id: uuid("token_id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").references(() => users.user_id),
  token: varchar("token", { length: 255 }).notNull().unique(),
  expires_at: timestamp("expires_at").notNull(),
  used: boolean("used").notNull().default(false),
  created_at: timestamp("created_at").defaultNow(),
});

export const company_roles = pgTable("company_roles", {
  role_id: uuid("role_id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 50 }).notNull().unique(),
});

export const company_users = pgTable("company_users", {
  company_user_id: uuid("company_user_id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").references(() => users.user_id),
  company_id: uuid("company_id").references(() => companies.company_id),
  role_id: uuid("role_id").references(() => company_roles.role_id),
});

// Job Categories
export const job_categories = pgTable("job_categories", {
  category_id: uuid("category_id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  description: text("description"),
  created_at: timestamp("created_at").defaultNow(),
});

// Skills
export const skills = pgTable("skills", {
  skill_id: uuid("skill_id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  category: varchar("category", { length: 50 }), // e.g., "Programming", "Design", "Marketing"
  created_at: timestamp("created_at").defaultNow(),
});

// Jobs (Job Postings) - THE MOST IMPORTANT MISSING TABLE
export const jobs = pgTable("jobs", {
  job_id: uuid("job_id").primaryKey().defaultRandom(),
  company_id: uuid("company_id")
    .references(() => companies.company_id)
    .notNull(),
  employer_id: uuid("employer_id")
    .references(() => employers.employer_id)
    .notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  requirements: text("requirements"),
  responsibilities: text("responsibilities"),
  category_id: uuid("category_id").references(() => job_categories.category_id),
  job_type: varchar("job_type", { length: 255 }).notNull(),
  experience_level: varchar("experience_level", { length: 255 }).notNull(),
  salary_min: integer("salary_min"),
  salary_max: integer("salary_max"),
  salary_currency: varchar("salary_currency", { length: 3 }).default("USD"),
  location: varchar("location", { length: 255 }),
  remote_work_allowed: boolean("remote_work_allowed").default(false),
  application_deadline: timestamp("application_deadline"),
  is_active: boolean("is_active").notNull().default(true),
  is_featured: boolean("is_featured").default(false),
  views_count: integer("views_count").default(0),
  applications_count: integer("applications_count").default(0),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

// Job Skills (Many-to-Many)
export const job_skills = pgTable("job_skills", {
  job_skill_id: uuid("job_skill_id").primaryKey().defaultRandom(),
  job_id: uuid("job_id")
    .references(() => jobs.job_id)
    .notNull(),
  skill_id: uuid("skill_id")
    .references(() => skills.skill_id)
    .notNull(),
  is_required: boolean("is_required").default(true),
  proficiency_level: varchar("proficiency_level", { length: 20 }), // "beginner", "intermediate", "advanced"
});

// Applicant Skills (Many-to-Many)
export const applicant_skills = pgTable("applicant_skills", {
  applicant_skill_id: uuid("applicant_skill_id").primaryKey().defaultRandom(),
  applicant_id: uuid("applicant_id")
    .references(() => applicants.applicant_id)
    .notNull(),
  skill_id: uuid("skill_id")
    .references(() => skills.skill_id)
    .notNull(),
  proficiency_level: varchar("proficiency_level", { length: 20 }),
  years_of_experience: integer("years_of_experience"),
});

// Job Applications
export const job_applications = pgTable("job_applications", {
  application_id: uuid("application_id").primaryKey().defaultRandom(),
  job_id: uuid("job_id")
    .references(() => jobs.job_id)
    .notNull(),
  applicant_id: uuid("applicant_id")
    .references(() => applicants.applicant_id)
    .notNull(),
  cover_letter: text("cover_letter"),
  resume_url: varchar("resume_url", { length: 255 }),
  status: varchar("status", { length: 255 }).notNull().default("applied"),
  notes: text("notes"), // Internal notes from recruiters
  applied_at: timestamp("applied_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

// Saved Jobs (Bookmarks)
export const saved_jobs = pgTable("saved_jobs", {
  saved_job_id: uuid("saved_job_id").primaryKey().defaultRandom(),
  applicant_id: uuid("applicant_id")
    .references(() => applicants.applicant_id)
    .notNull(),
  job_id: uuid("job_id")
    .references(() => jobs.job_id)
    .notNull(),
  saved_at: timestamp("saved_at").defaultNow(),
});

// Interviews
export const interviews = pgTable("interviews", {
  interview_id: uuid("interview_id").primaryKey().defaultRandom(),
  application_id: uuid("application_id")
    .references(() => job_applications.application_id)
    .notNull(),
  interviewer_id: uuid("interviewer_id").references(
    () => employers.employer_id
  ),
  scheduled_at: timestamp("scheduled_at").notNull(),
  duration_minutes: integer("duration_minutes").default(60),
  meeting_link: varchar("meeting_link", { length: 500 }),
  interview_type: varchar("interview_type", { length: 50 }), // "phone", "video", "in_person"
  status: varchar("status", { length: 20 }).default("scheduled"), // "scheduled", "completed", "cancelled", "rescheduled"
  feedback: text("feedback"),
  rating: integer("rating"), // 1-5 scale
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

// Export types for TypeScript
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Company = typeof companies.$inferSelect;
export type NewCompany = typeof companies.$inferInsert;
export type Employer = typeof employers.$inferSelect;
export type NewEmployer = typeof employers.$inferInsert;
export type Applicant = typeof applicants.$inferSelect;
export type NewApplicant = typeof applicants.$inferInsert;
export type Job = typeof jobs.$inferSelect;
export type NewJob = typeof jobs.$inferInsert;
export type JobApplication = typeof job_applications.$inferSelect;
export type NewJobApplication = typeof job_applications.$inferInsert;
export type Skill = typeof skills.$inferSelect;
export type NewSkill = typeof skills.$inferInsert;
export type Interview = typeof interviews.$inferSelect;
export type NewInterview = typeof interviews.$inferInsert;
