import { CookieOptions, Response } from "express";
import appConfig from "../../configs/app.config";
import { calculateExpirationDate } from "./date-time";

type CookiePayloadType = {
  res: Response;
  accessToken: string;
  refreshToken: string;
};

export const REFRESH_PATH = `${appConfig.BASE_URL}/auth/refresh`;

const defaults: CookieOptions = {
  httpOnly: true,
  //secure: config.NODE_ENV === "production" ? true : false,
  //sameSite: config.NODE_ENV === "production" ? "strict" : "lax",
};

export const getRefreshTokenCookieOptions = (): CookieOptions => {
  const expiresIn = appConfig.JWT.REFRESH_EXPIRES_IN;
  const expires = calculateExpirationDate(expiresIn);
  return {
    ...defaults,
    expires,
    path: REFRESH_PATH,
  };
};

export const getAccessTokenCookieOptions = (): CookieOptions => {
  const expiresIn = appConfig.JWT.EXPIRES_IN;
  const expires = calculateExpirationDate(expiresIn);
  return {
    ...defaults,
    expires,
    path: "/",
  };
};

export const setAuthenticationCookies = ({
  res,
  accessToken,
  refreshToken,
}: CookiePayloadType): Response =>
  res
    .cookie("accessToken", accessToken, getAccessTokenCookieOptions())
    .cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions());

export const clearAuthenticationCookies = (res: Response): Response =>
  res.clearCookie("accessToken").clearCookie("refreshToken", {
    path: REFRESH_PATH,
  });
