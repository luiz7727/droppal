import { Module } from "@nestjs/common";
import { MercadoLivreController } from "./mercado-livre.controller";
import { MercadoLivreService } from "./mercado-livre.service";

@Module({
  controllers: [MercadoLivreController],
  providers: [MercadoLivreService]
})
export class MercadoLivreModule {}