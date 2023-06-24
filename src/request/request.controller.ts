import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RequestService } from './request.service';
import { Req } from 'src/dto/req.dto';
import { Update } from 'src/dto/update.dto';

@Controller('requests')
export class RequestController {
    constructor(private reqService: RequestService){}


    @Get()
    getRequests(){
        return this.reqService.getReqs()
    }

    @Post()
    createRequest(@Body() dto: Req){
        return this.reqService.createReq(dto)
    }

    @Put(':id')
    updateRequest(@Param("id") id: number, @Body() body: Update){
        return this.reqService.updateReq(id, body)
    }

}
