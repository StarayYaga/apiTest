import { Module, forwardRef } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { Request } from './request.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ValidatorModule } from 'src/validator/validator.module';
import { AuthGuard } from 'src/validator/validator.guard';
import { ValidatorService } from 'src/validator/validator.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [RequestController],
  providers: [RequestService],
  imports: [
    SequelizeModule.forFeature([Request]),
    JwtModule,
    
  ]
})
export class RequestModule {}
