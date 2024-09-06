import { Injectable } from "@nestjs/common";
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
  constructor(private db: PrismaService) { }

  async create(data: CreateUserRequest): Promise<string> {

    const { name, email, username, password, telephone } = data;

    const user = this.db.user.findUnique({
      where: {
        email
      }
    });

    if (user) {
      throw new Error('User already created');
    }

    await this.db.user.create({
      data: {
        name,
        email,
        username,
        password: bcrypt.hashSync(password, 10),
        telephone
      }
    });


    return "";
  }
}