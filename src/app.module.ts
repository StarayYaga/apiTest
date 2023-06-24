import { Module } from '@nestjs/common';
import { RequestModule } from './request/request.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Request } from './request/request.model';
import { MailerModule } from '@nestjs-modules/mailer';
import { RolesModule } from './roles/roles.module';
import { MailModule } from './mail/mail.module';
import { ValidatorModule } from './validator/validator.module';
import { Validator} from './validator/validator.model';
import { AuthGuard } from './validator/validator.guard';


@Module({
  imports: [
    RequestModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: 'SG.xxxxxxxxxxxxxxxxxxxxxxxxxx-yyyyyyyyy',
        },
      }
    }),
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
      models:[Request, Validator],
      define: {
        timestamps: false,
        updatedAt: false,
        createdAt: false
       },
    }),
    RolesModule,
    MailModule,
    ValidatorModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
