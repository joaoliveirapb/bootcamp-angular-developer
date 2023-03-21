// 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprime cada número par encontrado.
const numbers = [7, 14, 9, 2];


for(let i = 0; i < numbers.length; i++) {
  const evenNumber = numbers[i] % 2 === 0;
  if(evenNumber) console.log(numbers[i]);
}