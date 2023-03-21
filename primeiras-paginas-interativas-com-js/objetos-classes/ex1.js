/*
  1 - Crie uma classe para representar carros.
      Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
      Crie um método que dado a quantidade de KMs e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Car {
  brand;
  color;
  fuelExpensePerKm;

  constructor(brand, color, fuelExpensePerKm) {
    this.brand = brand;
    this.color = color;
    this.fuelExpensePerKm = fuelExpensePerKm;
  }

  travelFuelExpense(distanceInKmOfTheTrip, fuelPrice) {
    return (distanceInKmOfTheTrip * this.fuelExpensePerKm) * fuelPrice;
  }
}

const fit = new Car('Honda', 'Gray', 1 / 12);
console.log(fit.travelFuelExpense(70, 5.7))

const palio = new Car('Fiat', 'Black', 1 / 10);
console.log(palio.travelFuelExpense(70, 5.7))