/*
2 - O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

IMC em adultos condição:
- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 e 25: Peso normal;
- Entre 25 e 30: Acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade Grave;
*/

const weight = 62;
const height = 1.75;

const imc = weight / Math.pow(height, 2);

console.log(`Seu IMC: ${imc.toFixed(2)}`);

if(imc < 18.5) {
  console.log('Você está abaixo do peso!');
} else if(imc >= 18.5 && imc < 25) {
  console.log('Seu peso está normal!');
} else if(imc >= 25 && imc < 30) {
  console.log('Você está acima do peso!');
} else if(imc >= 30 && imc < 40) {
  console.log('Você está obeso!');
} else {
  console.log('Obesidade grave!');
}