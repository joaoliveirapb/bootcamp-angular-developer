const { gets, print } = require('./funcoes-auxiliares');

/*
  EXERCÍCIO 1:
  Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
  Faça um program que receba os 5 números sorteados para os alunos e mostre o maior número sorteado

  Dados de entrada:
  5, 50, 10, 98, 23

  Saída: 98
*/

const numberOfStudents = gets();
let biggerValue = 0;

for(let i = 0; i < numberOfStudents; i++) {
  const drawnNumber = gets();
  if(drawnNumber > biggerValue) {
    biggerValue = drawnNumber;
  }
}

print(biggerValue);
