import type { Store } from "@/types/Store";
import { cookies } from "next/headers";

export default async function getStoresFromUser():Promise<Store[]> {
  const cookie = cookies();
  const token = cookie.get('droppal-token')?.value ?? '';

  const response = await fetch(`${process.env.API_BASE_URL}/stores/find-all-from-user`,{
    method: 'GET',
    headers: {
      'Authorization': token,
    }
  });

  const stores = await response.json() as Store[]
  return stores;
}