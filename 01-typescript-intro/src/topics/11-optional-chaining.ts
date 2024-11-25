export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Victor'
}

const passenger2: Passenger = {
    name: 'Manuel',
    children: ['Laura', 'Sofia'],
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);   
}

printChildren(passenger2);