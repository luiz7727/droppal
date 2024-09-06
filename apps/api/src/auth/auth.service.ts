import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "src/prisma/prisma.service";

interface LoginRequest {
	email: string
	password: string
}


@Injectable()
export class AuthService {

	constructor(private db: PrismaService, private jwt:JwtService) { }

	async login({ email, password }: LoginRequest): Promise<string> {

		const user = await this.db.user.findUnique({
			where: {
				email
			}
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		if (!await bcrypt.compare(password, user.password)) {
			throw new BadRequestException('Invalid Credentials');
		}
		const token = await this.jwt.signAsync({});

		await this.db.user.update({
			where: {
				email
			},
			data: {
				token
			}
		});

		return token;
	}
}