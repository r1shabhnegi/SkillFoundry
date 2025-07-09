import jwt, { SignOptions, VerifyOptions } from "jsonwebtoken";
import appConfig from "../../configs/app.config";

interface accessTokenPayload {
  user_id: string;
  session_id: string;
}

interface refreshTokenPayload {
  session_id: string;
}

type SignOptsAndSecret = Omit<SignOptions, "expiresIn"> & {
  secret: string;
  expiresIn?: string | number;
};

export const accessTokenSignOptions: SignOptsAndSecret = {
  expiresIn: appConfig.JWT.EXPIRES_IN,
  secret: appConfig.JWT.SECRET,
  audience: "user",
  algorithm: "HS256",
};

export const refreshTokenSignOptions: SignOptsAndSecret = {
  expiresIn: appConfig.JWT.REFRESH_EXPIRES_IN,
  secret: appConfig.JWT.REFRESH_SECRET,
};

export const signJwtToken = (
  payload: accessTokenPayload | refreshTokenPayload,
  options?: SignOptsAndSecret
) => {
  const { secret, ...opts } = options || accessTokenSignOptions;
  return jwt.sign(payload, secret, opts as SignOptions);
};

export const verifyJwtToken = <TPayload extends object = accessTokenPayload>(
  token: string,
  options?: VerifyOptions & { secret: string }
) => {
  try {
    const { secret = appConfig.JWT.SECRET, ...opts } = options || {};
    const payload = jwt.verify(token, secret, opts) as TPayload;
    return { payload };
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
};
