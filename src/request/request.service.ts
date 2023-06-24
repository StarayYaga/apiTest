import { Injectable } from '@nestjs/common';
import { Request } from './request.model';
import { InjectModel } from '@nestjs/sequelize';
import { Req } from 'src/dto/req.dto';
import { Update } from 'src/dto/update.dto';

@Injectable()
export class RequestService {
    constructor(@InjectModel(Request) private reqModel: typeof Request){}

    async createReq(dto: Req){
        const req = await this.reqModel.create(dto)
        return req
    }

    async getReqs(){
        const req = this.reqModel.findAll()
        return req
    }

    async updateReq(id:number, dto: Update){
        const req = (await (this.reqModel.findOne({ where: { id: id } }))).update({
            status: "Resolved",
            comment: dto.comment,
            updated_at: dto.updated_at
        })
        return req
    }
}
