import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth-dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post()
    async signIn(@Body() data: AuthDto): Promise<string> {
        const token = this.authService.login(data);
        return token;
    }
}