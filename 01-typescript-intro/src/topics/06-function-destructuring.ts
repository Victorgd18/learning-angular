
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
};

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
};

interface TaxCalculationsOptions {
    tax: number;
    products: Product[];
}

export function taxCalcutation( {tax, products}: TaxCalculationsOptions ): [number, number] {
    let total = 0;
    products.forEach( ({price}) => {
        total += price;        
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [totalResult, totalTax] = taxCalcutation({
    tax, 
    products: shoppingCart
});

console.log('Total',totalResult);
console.log('Tax',totalTax);