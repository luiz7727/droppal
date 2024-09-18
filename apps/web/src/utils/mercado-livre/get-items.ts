import { parseCookies } from "nookies";
import getItemMercadoLivre from "./get-item";

interface Response {
  results: string []
}
export interface ItemResponse {
  title:string
  available_quantity:number,
  price:number
}
export default async function getItemsMercadoLivre(): Promise<ItemResponse[]> {
  
  let itemsResult:ItemResponse[] = [];
  const { 'ml_access_token': access_token } = parseCookies();
  const { 'ml_user_id': user_id } = parseCookies();

  const userId = Number(user_id)
  
  const response = await fetch(`https://api.mercadolibre.com/users/${userId}/items/search`,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });

  const { results } = await response.json() as Response;

  results.forEach( async (id) => {
    const result = await getItemMercadoLivre(id);
    itemsResult.push(result);
  });

  return itemsResult;
}