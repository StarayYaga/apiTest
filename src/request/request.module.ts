import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { Request } from './request.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [RequestController],
  providers: [RequestService],
  imports: [
    SequelizeModule.forFeature([Request])
]
})
export class RequestModule {}
