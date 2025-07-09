import API from "../axios-client";

type LoginType = {
  email: string;
  password: string;
};

type registerType = {
  email: string;
  password: string;
};

type verifyEmailType = { code: string };

type forgotPasswordType = { email: string };

type resetPasswordType = { password: string; verificationCode: string };

export const registerMutationFn = async (data: registerType) =>
  await API.post(`/auth/applicant-registration`, data);

export const loginMutationFn = async (data: LoginType) =>
  await API.post("/auth/applicant-login", data);

export const verifyEmailMutationFn = async (data: verifyEmailType) =>
  await API.post(`/auth/verify-email`, data);

export const getUserSessionQueryFn = async () => await API.get(`/auth/session`);

export const forgotPasswordMutationFn = async (data: forgotPasswordType) =>
  await API.post(`/auth/password/forgot`, data);

export const resetPasswordMutationFn = async (data: resetPasswordType) =>
  await API.post(`/auth/password/reset`, data);
