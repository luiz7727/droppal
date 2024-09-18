import { parseCookies } from "nookies";
import getItemMercadoLivre from "./get-item";
import axios from "axios";

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

  
  const { data: { results } } = await axios.get<Response>(`https://api.mercadolibre.com/users/${user_id}/items/search`,{
    headers: {
      Authorization:`Bearer APP_USR-88429305455804-091816-8a487ef0c8dbd9ce4318ece3480c055d-224645276`
    }
  });

  results.forEach( async (id) => {
    const result = await getItemMercadoLivre(id);
    itemsResult.push(result);
  });

  return itemsResult;
}