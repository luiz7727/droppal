import { api } from "@/lib/api";

export default async function addStore(type:string) {
  const { data } = await api.post('/stores', {
    type
  });
} 