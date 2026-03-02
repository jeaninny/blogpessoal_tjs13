import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controllers/postagem.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], //postagem.module trabalha diretamente com a entidade postagem
    controllers: [PostagemController],
    providers: [PostagemService],
    exports: [],
})
export class PostagemModule { }