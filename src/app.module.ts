import { Module } from '@nestjs/common';
import { RequestModule } from './request/request.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Request } from './request/request.model';
import { MailerModule } from '@nestjs-modules/mailer';
import { ValidatorModule } from './validator/validator.module';
import { Validator} from './validator/validator.model';
import { MailModule } from './mail/mail.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:"/home/yaga/code/api/.env"
    }),
    RequestModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.mailHost,
        port: Number(process.env.mailPort),
        auth: {
          user: process.env.mailUser,
          pass: process.env.mailPassword
        },
      }
    }),
    
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.dbHost,
      port: Number(process.env.dbPort),
      username: process.env.dbUser,
      password: process.env.dbPassword,
      database: process.env.dbName,
      autoLoadModels:true,
      models:[Request, Validator],
      define: {
        timestamps: false,
        updatedAt: false,
        createdAt: false
       },
    }),
    ValidatorModule,
    MailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
