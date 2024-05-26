import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from "uuid";



export const BRAND_SEED:Brand[] = [
    {
        id: uuid(),
        createAt: new Date().getTime(),
        name: 'Volvo',
    },
    {
        id: uuid(),
        createAt: new Date().getTime(),
        name: 'Toyota',
    },
    {
        id: uuid(),
        createAt: new Date().getTime(),
        name: 'Honda',
    },
    {
        id: uuid(),
        createAt: new Date().getTime(),
        name: 'Jeep',
    },
    {
        id: uuid(),
        createAt: new Date().getTime(),
        name: 'Tesla',
    },
];
