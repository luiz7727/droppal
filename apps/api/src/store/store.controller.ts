import { Body, Controller, Get, Headers, Post } from "@nestjs/common";
import { CreateStoreDto } from "./dto/create-store-dto";
import { StoreService } from "./store.service";


@Controller('stores')
export class StoreController {

    constructor(private storeService: StoreService) { }

    @Get('find-all-from-user')
    async findAllFromUser(@Headers('Authorization') token:string) {
        const stores = await this.storeService.findAllFromUser(token);
        return stores;
    }
    
    @Post()
    async add(@Headers('Authorization') token:string,@Body() data: CreateStoreDto) {
        await this.storeService.create(token,data);
    }
}