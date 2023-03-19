/*
1- Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcula e imprima a sua média e a sua classificação conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) / 3

Classificação:
- Média menor que 5, reprovação
- Média entre 5 e 7, recuperação
- Média acima de 7, passou de semestre
*/

const firstNote = 6;
const secondNote = 8;
const thirdNote = 8;

const average = (firstNote + secondNote + thirdNote) / 3;

console.log(average.toFixed(1));

if(average < 5) {
  console.log('Você foi reprovado!');
} else if(average >= 5 && average <= 7) {
  console.log('Você está de recuperação!');
} else {
  console.log('Você foi aprovado!')
}