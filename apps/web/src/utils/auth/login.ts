import { api } from "@/lib/api";
import { loginFormType } from "@/schemas/login.schema";

interface Response  {
  token: string
}

export default async function Login(data:loginFormType): Promise<string> {
  const { data: { token } } = await api.post<Response>('/auth', data);
  return token;
}