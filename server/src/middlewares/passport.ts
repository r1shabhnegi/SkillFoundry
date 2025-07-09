import passport from "passport";
import { setupJwtStrategy } from "../common/utils/jwt.strategy";

const intializePassport = () => {
  setupJwtStrategy(passport);
};

intializePassport();
export default passport;
