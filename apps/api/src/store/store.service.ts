import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";


interface CreateStoreRequest {
  type: string
}

@Injectable()
export class StoreService {

  constructor(
    private db:PrismaService,
    private jwt:JwtService
  ) {}

  async findAllFromUser(token:string) {

    const { email } = this.jwt.decode(token);
    
    const { stores } = await this.db.user.findUnique({
      where: {
        email
      },
      select: {
        stores: true
      }
    });

    return stores;
  }
  
  async create(token:string, request: CreateStoreRequest) {

    const { email } = this.jwt.decode(token);
    
    const user = await this.db.user.findUnique({
      where: {
        email
      }
    });

    const { type } = request;
    
    await this.db.store.create({
      data: {
        type,
        user: {
          connect: user
        }
      }
    });

  }
}