import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { validatorDto } from 'src/dto/validator.dto';
import { Validator } from './validator.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcryptjs";

@Injectable()
export class ValidatorService {
    constructor(@InjectModel(Validator) private validModel: typeof Validator,
        private Jwt: JwtService  
    ){}


    async login(userValid: validatorDto){
        const user = await this.validationLogin(userValid)
        return this.generateToken(user)
    }

    async registration(userValid: validatorDto){
        const user = await this.getUserByEmail(userValid.email)
        if (user){
            throw new HttpException("Пользователь с таким email уже существует!", HttpStatus.BAD_REQUEST)
        }
        const hashPass = await bcrypt.hash(userValid.password, 5)
        const newUser = await this.validModel.create({...userValid, password: hashPass})
        return this.generateToken(newUser)
    }

    private async getUserByEmail(email){
        const user = await this.validModel.findOne({where: {email}})
        return user
    }

    private async validationLogin(user: validatorDto){
        const person = await this.getUserByEmail(user.email)
        const truePass = await bcrypt.compare(user.password, person.password)
        if (person && truePass){
            return person
        }
        throw new UnauthorizedException({message: "Не корректный email"})
    }

    private async generateToken(user: Validator){
        const payload = {
            id: user.id,
            email:user.email,
            name: user.name
        }
        return {
            token: this.Jwt.sign(payload)
        }
    }
}
