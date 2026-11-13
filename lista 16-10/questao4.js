// entrada?? nao sei como fazer vou so deixar aqui

let alunos = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6 },
  { nome: "Carla", media: 9 },
  { nome: "Davi", media: 5.5 }
];

// fim da entrada

let nomenaopassado = alunos.find(aluno => aluno.media < 7).nome;
let alguemebom = alunos.some(aluno => aluno.media >= 9);
let todospassaram = alunos.every(aluno => aluno.media >= 7);

console.log(`${nomenaopassado} \n${alguemebom} \n${todospassaram}`);
