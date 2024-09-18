import { api } from "@/lib/api";
import { signUpFormType } from "@/schemas/sign-up-schema";

interface Response  {
  token: string
}

export default async function createUser(data:signUpFormType) {
  const { data: { token } } = await api.post<Response>('/auth', data)
  return token;
}