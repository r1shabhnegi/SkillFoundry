import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptionsWithRequest,
} from "passport-jwt";
import appConfig from "../../configs/app.config";
import passport, { PassportStatic } from "passport";
import { db } from "../../database/db";
import { users } from "../../database/schema";
import { eq } from "drizzle-orm";

interface JwtPayload {
  user_id: string;
  session_id: string;
}

const options: StrategyOptionsWithRequest = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    (req: any) => {
      const accessToken = req.cookies.accessToken;
      if (!accessToken) {
        throw new Error("Unauthorized access token");
      }
      return accessToken;
    },
  ]),
  secretOrKey: appConfig.JWT.SECRET,
  audience: ["user"],
  algorithms: ["HS256"],
  passReqToCallback: true,
};

export const setupJwtStrategy = (passport: PassportStatic) => {
  passport.use(
    new JwtStrategy(
      options,
      async (req: any, payload: JwtPayload, done: any) => {
        try {
          const [user] = await db
            .select()
            .from(users)
            .where(eq(users.user_id, payload.user_id))
            .limit(1);

          if (!user) {
            return done(null, false);
          }
          req.session_id = payload.session_id;

          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );
};

export const authenticateJWT = passport.authenticate("jwt", { session: false });
