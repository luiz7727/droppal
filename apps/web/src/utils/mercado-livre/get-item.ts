import axios from "axios"
import { parseCookies } from "nookies";
interface Response {
  title:string
  available_quantity:number,
  price:number
}

export default async function getItemMercadoLivre(id:string): Promise<Response> {
  const { 'ml_access_token': access_token } = parseCookies()
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });
  const item = await response.json() as Response;
  return item;
}