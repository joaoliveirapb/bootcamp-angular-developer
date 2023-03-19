/*
3 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista débito, recebe 10% de desconto
    2 - À vista no dinheiro ou pix, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const priceOfTheProduct = 100;
const formOfPayment = 2;

if(formOfPayment === 1) {
  const totalPayable = priceOfTheProduct - (priceOfTheProduct * (10 / 100));
  console.log(totalPayable);
} else if(formOfPayment === 2) {
  const totalPayable = priceOfTheProduct - (priceOfTheProduct * (15 / 100));
  console.log(totalPayable);
} else if(formOfPayment === 3) {
  console.log(priceOfTheProduct);
} else if(formOfPayment === 4) {
  const totalPayable = priceOfTheProduct + (priceOfTheProduct * (10 / 100));
  console.log(totalPayable);
} else {
  console.log('Forma de pagamento inválida!')
}