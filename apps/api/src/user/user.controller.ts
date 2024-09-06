import { Body, Controller, Post } from "@nestjs/common";
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
}