/*
  2 - Crie uma classe para representar pessoas.
      Para cada pessoa teremos os atributos nome, peso e altura
      As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
      Instancie uma pessoa chamada José que tenha 70kg de peso e  1,70 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Persons {
  name;
  weight;
  height;

  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height
  }

  myImc() {
    const imc = this.weight / Math.pow(this.height, 2);
    return imc.toFixed(2);
  }

  classifyImc() {
    const imc = this.myImc();

    if(imc < 18.5) {
      return 'Meu IMC indica que estou abaixo do peso!';
    } else if(imc >= 18.5 && imc < 25) {
      return 'Meu IMC indica que meu peso está normal!';
    } else if(imc >= 25 && imc < 30) {
      return 'Meu IMC indica que estou acima do peso!';
    } else if(imc >= 30 && imc < 40) {
      return 'Meu IMC indica que estou obeso!';
    } else {
      return 'Meu IMC indica que estou com obesidade grave!';
    }
  }
}

const person1 = new Persons('José', 80, 1.70);


console.log(person1);
console.log(person1.myImc());
console.log(person1.classifyImc());