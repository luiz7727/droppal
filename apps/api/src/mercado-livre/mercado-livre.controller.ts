import { Body, Controller, Get, Put } from "@nestjs/common";
import { MercadoLivreService } from "./mercado-livre.service";
import { GetAllItemsDto } from "./dto/get-all-items.dto";
import { UpdateItemDto } from "./dto/update-item-dto";

@Controller('mercado-livre')
export class MercadoLivreController {
  constructor(
    private service: MercadoLivreService
  ) {}

  @Get('get-all-items')
  async getAllItems() {
    // const { access_token, user_id } = data;
    return this.service.getItems('access_token', '');
  }
  
  @Put('update-item')
  async updateItem() {
    const { access_token,  available_quantity, price, title, item_id } = data;
    const itemData = {
      title,
      price,
      available_quantity
    }
    return this.service.updateItem(access_token, item_id, itemData);
  }

}