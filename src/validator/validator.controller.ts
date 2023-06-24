import { Controller, Post, Body } from '@nestjs/common';
import { ValidatorService } from './validator.service';
import { validatorDto } from 'src/dto/validator.dto';

@Controller('validator')
export class ValidatorController {
    constructor(private validService: ValidatorService){}

    @Post("login")
    loginValidator(@Body() validator: validatorDto){
        return this.validService.login(validator)
    }

    @Post("registration")
    regValidator(@Body() validator: validatorDto){
        return this.validService.registration(validator)
    }

}
