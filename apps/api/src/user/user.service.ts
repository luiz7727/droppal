import { ConflictException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "src/prisma/prisma.service";

interface CreateUserRequest {
  name: string
  email: string
  username: string
  password: string
  telephone: string
}


@Injectable()
export class UserService {
  constructor(private db: PrismaService, private jwt: JwtService) { }

  async create(data: CreateUserRequest): Promise<string> {

    const { name, email, username, password, telephone } = data;

    const user = await this.db.user.findUnique({
      where: {
        email
      }
    });

    if (user) {
      throw new ConflictException('User already created');
    }

    const token = await this.jwt.signAsync({
      email: email
    });

    await this.db.user.create({
      data: {
        name,
        email,
        username,
        password: bcrypt.hashSync(password, 10),
        telephone,
        token
      }
    });

    return token;
  }
}