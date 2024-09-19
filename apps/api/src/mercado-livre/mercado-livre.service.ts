import { Injectable } from "@nestjs/common";
import type { UpdateItemDto } from "./dto/update-item-dto";

interface ItemsResponse {
  results: string[]
}

export interface ItemResponse {
  title: string
  price: number
  available_quantity: number
}

@Injectable()
export class MercadoLivreService {
  
  constructor() {}

  async getItems(access_token:string, userId:string): Promise<ItemResponse[]> {

    const response = await fetch(`https://api.mercadolibre.com/users/${userId}/items/search`,{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });

    const { results } = await response.json() as ItemsResponse;
    
    let result:ItemResponse[] = []
    
    for(let i =0; i< results.length; i++) {
      const item = await this.getItem(access_token,results[i]);
      result.push(item);
    }

    return result;
  }
  
  async getItem(access_token:string, itemId:string):Promise<ItemResponse> {
    const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`,{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });

    const item = await response.json() as ItemResponse;

    return item;
  }
  
  async updateItem(access_token:string, itemId:string, item:UpdateItemDto) {
    await fetch(`https://api.mercadolibre.com/items/${itemId}`,{
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${access_token}`
      },
      body: JSON.stringify(item)
    });
  }
}