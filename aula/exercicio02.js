let aluno = ["Carlos", "Paulo", "Pedro"];
let notas0 = [5, 10];
let media0 = (notas0[0] + notas0[1]) / 2;
let notas1 = [5, 5];
let media1 = (notas1[0] + notas1[1]) / 2;
let notas2 = [10, 10];
let media2 = (notas2[0] + notas2[1]) / 2;

console.log(`${media0 >= 7 ? aluno[0]+' foi aprovado ! com uma media de '+media0 : aluno[0]+' foi reprovado :('}`);
console.log(`${media1 >= 7 ? aluno[1]+' foi aprovado ! com uma media de '+media1 : aluno[1]+' foi reprovado :('}`);
console.log(`${media2 >= 7 ? aluno[2]+' foi aprovado ! com uma media de '+media2 : aluno[2]+' foi reprovado :('}`);