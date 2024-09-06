import { api } from "@/lib/api";
import { signUpFormType } from "@/schemas/sign-up-schema";
import { HttpResponse } from "@/types/HttpResponse";

export default async function createUser(formData: signUpFormType): Promise<HttpResponse> {
  try {

    const { data, status } = await api.post<string>('/users',formData);
    return {
      code: status,
      message: data
    };

  }
  catch(e) {
    return {
      code: 500,
      message: ''
    }
  }
  
}