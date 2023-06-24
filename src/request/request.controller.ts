import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { RequestService } from './request.service';
import { Response } from 'express';
import { Req } from 'src/dto/req.dto';
import { Update } from 'src/dto/update.dto';
import { AuthGuard } from 'src/validator/validator.guard';

@Controller('requests')
export class RequestController {
    
    constructor(private reqService: RequestService){}


    @Get()
    @UseGuards(AuthGuard)
    getRequests(){
        return this.reqService.getReqs()
    }

    @Post()
    createRequest(@Body() dto: Req){
        return this.reqService.createReq(dto)
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    updateRequest(@Param("id") id: number, @Body() body: Update){
        if (!body.comment){
            throw new HttpException({reason:"1"}, HttpStatus.BAD_REQUEST)
        }
        return this.reqService.updateReq(id, body)
    }

}
