
function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
}

function multiply( firstNumber: number, secondNumber?: number, base: number = 2) {
  return firstNumber * base;
}

// const sum = addNumbers(1, 2);
// const sum2 = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.log({sum, sum2, multiplyResult});

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = ( character: Character, amount: number) => {
  character.hp += amount;
}


const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`HP: ${this.hp}`);
  }
}
healCharacter(strider, 25)

strider.showHp();