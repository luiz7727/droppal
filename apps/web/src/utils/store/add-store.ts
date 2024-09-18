import { cookies } from "next/headers";

export default async function addStore(type:string) {
  const request = {
    type: type
  }

  const token = cookies().get('droppal-token')?.value ?? '';

  await fetch(`${process.env.API_BASE_URL}/stores`, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Authorization': token
    }
  });

} 