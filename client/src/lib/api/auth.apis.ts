import API from "../axios-client";

type LoginType = {
  email: string;
  password: string;
};

type registerType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerMutationFn = async (data: registerType) =>
  await API.post(`/auth/applicant-registration`, data);

export const loginMutationFn = async (data: LoginType) =>
  await API.post("/auth/applicant-login", data);
