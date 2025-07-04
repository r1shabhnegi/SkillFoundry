CREATE TYPE "public"."application_status" AS ENUM('applied', 'under_review', 'interview_scheduled', 'interviewed', 'rejected', 'accepted', 'withdrawn');--> statement-breakpoint
CREATE TYPE "public"."experience_level" AS ENUM('entry_level', 'mid_level', 'senior_level', 'executive');--> statement-breakpoint
CREATE TYPE "public"."job_type" AS ENUM('full_time', 'part_time', 'contract', 'internship', 'freelance');--> statement-breakpoint
CREATE TABLE "applicant_skills" (
	"applicant_skill_id" uuid PRIMARY KEY NOT NULL,
	"applicant_id" uuid NOT NULL,
	"skill_id" uuid NOT NULL,
	"proficiency_level" varchar(20),
	"years_of_experience" numeric(3, 1)
);
--> statement-breakpoint
CREATE TABLE "applicants" (
	"applicant_id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"full_name" varchar(100) NOT NULL,
	"phone_number" varchar(20),
	"date_of_birth" date,
	"gender" varchar(20),
	"current_location" varchar(100),
	"years_of_experience" numeric(3, 1),
	"resume_url" varchar(255),
	"linkedin_url" varchar(255),
	"github_url" varchar(255),
	"portfolio_url" varchar(255),
	"bio" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "companies" (
	"company_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"website" varchar(255),
	"industry" varchar(100),
	"size" integer,
	"address" text,
	"city" varchar(100),
	"state" varchar(100),
	"country" varchar(100),
	"gst_number" varchar(50),
	"logo_url" varchar(255),
	"description" text,
	"founded_year" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "company_roles" (
	"role_id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	CONSTRAINT "company_roles_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "company_users" (
	"company_user_id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"company_id" uuid,
	"role_id" uuid
);
--> statement-breakpoint
CREATE TABLE "employers" (
	"employer_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"company_id" uuid,
	"full_name" varchar(100) NOT NULL,
	"phone_number" varchar(20),
	"job_title" varchar(100),
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "interviews" (
	"interview_id" uuid PRIMARY KEY NOT NULL,
	"application_id" uuid NOT NULL,
	"interviewer_id" uuid,
	"scheduled_at" timestamp NOT NULL,
	"duration_minutes" integer DEFAULT 60,
	"meeting_link" varchar(500),
	"interview_type" varchar(50),
	"status" varchar(20) DEFAULT 'scheduled',
	"feedback" text,
	"rating" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "job_applications" (
	"application_id" uuid PRIMARY KEY NOT NULL,
	"job_id" uuid NOT NULL,
	"applicant_id" uuid NOT NULL,
	"cover_letter" text,
	"resume_url" varchar(255),
	"status" "application_status" DEFAULT 'applied' NOT NULL,
	"notes" text,
	"applied_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "job_categories" (
	"category_id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "job_categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "job_skills" (
	"job_skill_id" uuid PRIMARY KEY NOT NULL,
	"job_id" uuid NOT NULL,
	"skill_id" uuid NOT NULL,
	"is_required" boolean DEFAULT true,
	"proficiency_level" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "jobs" (
	"job_id" uuid PRIMARY KEY NOT NULL,
	"company_id" uuid NOT NULL,
	"employer_id" uuid NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"requirements" text,
	"responsibilities" text,
	"category_id" uuid,
	"job_type" "job_type" NOT NULL,
	"experience_level" "experience_level" NOT NULL,
	"salary_min" numeric(10, 2),
	"salary_max" numeric(10, 2),
	"salary_currency" varchar(3) DEFAULT 'USD',
	"location" varchar(255),
	"remote_work_allowed" boolean DEFAULT false,
	"application_deadline" timestamp,
	"is_active" boolean DEFAULT true NOT NULL,
	"is_featured" boolean DEFAULT false,
	"views_count" integer DEFAULT 0,
	"applications_count" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "password_reset_tokens" (
	"token_id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"token" varchar(255) NOT NULL,
	"expires_at" timestamp NOT NULL,
	"used" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "password_reset_tokens_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "roles" (
	"role_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(50) NOT NULL,
	CONSTRAINT "roles_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "saved_jobs" (
	"saved_job_id" uuid PRIMARY KEY NOT NULL,
	"applicant_id" uuid NOT NULL,
	"job_id" uuid NOT NULL,
	"saved_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"skill_id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"category" varchar(50),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "skills_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"user_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" varchar(255) NOT NULL,
	"role_id" uuid NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "applicant_skills" ADD CONSTRAINT "applicant_skills_applicant_id_applicants_applicant_id_fk" FOREIGN KEY ("applicant_id") REFERENCES "public"."applicants"("applicant_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applicant_skills" ADD CONSTRAINT "applicant_skills_skill_id_skills_skill_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("skill_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applicants" ADD CONSTRAINT "applicants_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "company_users" ADD CONSTRAINT "company_users_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "company_users" ADD CONSTRAINT "company_users_company_id_companies_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("company_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "company_users" ADD CONSTRAINT "company_users_role_id_company_roles_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."company_roles"("role_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employers" ADD CONSTRAINT "employers_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employers" ADD CONSTRAINT "employers_company_id_companies_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("company_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_application_id_job_applications_application_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."job_applications"("application_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_interviewer_id_employers_employer_id_fk" FOREIGN KEY ("interviewer_id") REFERENCES "public"."employers"("employer_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_job_id_jobs_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("job_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_applicant_id_applicants_applicant_id_fk" FOREIGN KEY ("applicant_id") REFERENCES "public"."applicants"("applicant_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_skills" ADD CONSTRAINT "job_skills_job_id_jobs_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("job_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_skills" ADD CONSTRAINT "job_skills_skill_id_skills_skill_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("skill_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_company_id_companies_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("company_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_employer_id_employers_employer_id_fk" FOREIGN KEY ("employer_id") REFERENCES "public"."employers"("employer_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_category_id_job_categories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."job_categories"("category_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "password_reset_tokens" ADD CONSTRAINT "password_reset_tokens_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "saved_jobs" ADD CONSTRAINT "saved_jobs_applicant_id_applicants_applicant_id_fk" FOREIGN KEY ("applicant_id") REFERENCES "public"."applicants"("applicant_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "saved_jobs" ADD CONSTRAINT "saved_jobs_job_id_jobs_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("job_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_roles_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("role_id") ON DELETE no action ON UPDATE no action;