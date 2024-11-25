export function whatsMyType<T>(argument: T): T {
    return argument;
}

const amIString = whatsMyType<string>('Hello world');
const amINumber = whatsMyType<number>(123);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toExponential());
console.log(amIArray.map( item => item * 2));
