import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "src/prisma/prisma.service";

interface LoginRequest {
	email: string
	password: string
}


@Injectable()
export class AuthService {

	constructor(private db: PrismaService) { }

	async login({ email, password }: LoginRequest): Promise<string> {

		const user = this.db.user.findUnique({
			where: {
				email
			}
		});

		if (!user) {
			throw new Error('User not found');
		}

		if (bcrypt.compare(password, (await user).password)) {
			throw new Error('Invalid Credentials');
		}


		return '';
	}
}