// 1 - Crie um programa que dado um número imprima a sua tabuada.

const value = 10;

for(let i = 1; i < 11; i++) {
  const multiplicationTable = value * i;
  console.log(`${value} X ${i} = ${multiplicationTable}`);
}