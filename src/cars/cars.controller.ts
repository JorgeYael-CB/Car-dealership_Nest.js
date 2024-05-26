import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';


@Controller('cars')
// @UsePipes( ValidationPipe )
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
    create( @Body() createCarDto: CreateCarDto ){
        return this.carsService.create(createCarDto);
    };

    @Patch('/:id')
    edit(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto,
    ){
        return this.carsService.update(id, updateCarDto);
    };

    @Delete('/:id')
    delete( @Param('id', ParseUUIDPipe) id: string ){
        return this.carsService.delete(id);
    };
};