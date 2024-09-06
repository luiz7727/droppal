import { api } from "@/lib/api";
import { loginFormType } from "@/schemas/login.schema";

export default async function login(formData: loginFormType) {
  try {

    const { data, status } = await api.post('/auth', formData);
    return {
      data,
      status
    }

  }
  catch(e) {
    return {
      status: 500,
      data:''
    }
  }
}
