import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';

@Injectable() // los providers tienen Injectable
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly bradnsService:BrandsService,
  ){};

  populateDb(){
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.bradnsService.fillBrandsWithSeedData(BRAND_SEED);

    return 'SEED executed successfully';
  }

}
