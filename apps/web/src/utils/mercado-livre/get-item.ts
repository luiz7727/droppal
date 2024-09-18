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
      'Authorization': `Bearer APP_USR-88429305455804-091816-8a487ef0c8dbd9ce4318ece3480c055d-224645276`
    }
  });
  const item = await response.json() as Response;
  return item;
}