import { Module } from '@nestjs/common';
import { ValidatorService } from './validator.service';
import { ValidatorController } from './validator.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Validator } from './validator.model';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './validator.guard';

@Module({
  providers: [ValidatorService, AuthGuard],
  controllers: [ValidatorController],
  imports: [
    SequelizeModule.forFeature([Validator]),
    JwtModule.register({
      global: true,
      secret: String(process.env.secretKeyJWT),
      signOptions: {
        expiresIn: "24h"
      }
    })
  ],
  exports: [AuthGuard]
})
export class ValidatorModule {}
