import {Product, taxCalcutation} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100.0
    },
    {
        description: 'iPad',
        price: 150.0
    }
];

const [ total, tax ] = taxCalcutation({
    tax: 0.15,
    products: shoppingCart
});

console.log('Total', total);
console.log('Tax', tax);
