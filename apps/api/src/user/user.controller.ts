import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private userService: UserService) { }

    @Post()
    async create(@Body() data: CreateUserDto): Promise<string> {
        const token = await this.userService.create(data);
        return token;
    }
    
    @Get('teste')
    async teste(): Promise<string> {
        const response = await fetch(`https://api.mercadolibre.com/users/224645276/items/search`,{
            method: 'GET',
            headers: {
              'Authorization': `Bearer APP_USR-88429305455804-091816-8a487ef0c8dbd9ce4318ece3480c055d-224645276`
            }
          });
        const data = await response.json();
        return data;
    }
}