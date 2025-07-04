import { RegisterSchema } from "./auth.validation";
import { db } from "../../database/db";
import {
  roles,
  users,
  verification_codes,
} from "../../database/drizzle/schema";
import { eq } from "drizzle-orm";
import { hashValue } from "../../common/utils/bcrypt";
import { thirtyMinutesFromNow } from "../../common/utils/date-time";
import { generateUniqueCode } from "../../common/utils/uuid";
import { UserRoles } from "../../common/enums/user-roles";
import appConfig from "../../configs/app.config";

export const aplicantRegistration = async (data: RegisterSchema) => {
  const { fullname, email, password } = data;

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashValue(password);

  const [role] = await db
    .select({ role_id: roles.role_id })
    .from(roles)
    .where(eq(roles.name, UserRoles.APPLICANT))
    .limit(1);

  const [newUser] = await db
    .insert(users)
    .values({
      role_id: role.role_id,
      email,
      password_hash: hashedPassword,
    })
    .returning({ user_id: users.user_id });

  const [verificationCode] = await db
    .insert(verification_codes)
    .values({
      user_id: newUser.user_id,
      code: generateUniqueCode(),
      expires_at: thirtyMinutesFromNow(),
    })
    .returning({ code: verification_codes.code });

  const verificationUrl = `${appConfig.CLIENT_URL}/confirm-accound?code=${verificationCode.code}`;

  return { code_id: verificationCode[0].code_id };
};
