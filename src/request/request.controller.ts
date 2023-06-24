import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('requests')
export class RequestController {
    constructor(private reqService: RequestService){}


    @Get()
    getRequests(){

    }

    @Post()
    createRequest(@Body() dto){

    }

    @Put(':id')
    updateRequest(@Param("id") id: number, @Body() body: any){

    }

}
