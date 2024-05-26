import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')


export class CarsController {

    constructor(
        private readonly carsService:CarsService,
    ){};

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    };

    @Get('/:id')
    getCardById(
        @Param('id', new ParseUUIDPipe({ version:'4' })) id:string,
    ){
        return this.carsService.findOneById( id );
    };

    @Post()
    create( @Body() body: any ){
        return body;
    };

    @Patch('/:id')
    edit(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any,
    ){
        return body;
    };

    @Delete('/:id')
    delete( @Param('id', ParseIntPipe) id: number ){
        return {
            ok: true,
            id: id,
            methdod: 'DELETE'
        };
    };
};