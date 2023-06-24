import { Module } from '@nestjs/common';
import { RequestModule } from './request/request.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Request } from './request/request.model';



@Module({
  imports: [
    RequestModule,
    ConfigModule.forRoot({
      envFilePath:"/home/yaga/code/api/.env"
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.dbHost,
      port: Number(process.env.dbPort),
      username: process.env.dbUser,
      password: process.env.dbPassword,
      database: process.env.dbName,
      autoLoadModels:true,
      models:[Request]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
