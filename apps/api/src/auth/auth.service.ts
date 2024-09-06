import { Injectable } from "@nestjs/common";
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

		}


		return '';
	}
}