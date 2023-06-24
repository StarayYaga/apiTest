import { Module, forwardRef } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { Request } from './request.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from 'src/mail/mail.module';

@Module({
  controllers: [RequestController],
  providers: [RequestService],
  imports: [
    SequelizeModule.forFeature([Request]),
    JwtModule,
    MailModule
  ]
})
export class RequestModule {}
