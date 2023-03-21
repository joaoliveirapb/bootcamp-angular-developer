/*
DESAFIO

Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis:
1 - Preço do etanol
2 - Preço da gasolina
3 - O tipo de combustível que está no seu carro
4 - Gasto médio de combustível do carro por KM
5 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem

*/

const ethanolPrice = 3.96;
const gasolinePrice = 5.79;
const typeOfFuelInTheCar = 'ethanol';
const fuelExpensePerKM = 10;
const distanceInKmOfTheTrip = 400;

if(typeOfFuelInTheCar === 'gasoline') {
  const total = (distanceInKmOfTheTrip / fuelExpensePerKM) * gasolinePrice;
  console.log(`Seu gasto de combustível será de: ${total.toFixed(2)}`);
} else if(typeOfFuelInTheCar === 'ethanol') {
  const total = (distanceInKmOfTheTrip / fuelExpensePerKM) * ethanolPrice;
  console.log(`Seu gasto de combustível será de: ${total.toFixed(2)}`);
} else {
  console.log('Tipo de combustível não encontrado.')
}