// FINALMENTE uma entrada que faz sentido pelo menos

alunos = [
  { nome: "ana", media: 8.5 },
  { nome: "bruno", media: 6 },
  { nome: "carla", media: 7.5 },
  { nome: "davi", media: 9 }
];

// fim da entrada

const listarAprovados = (lista, mediaMinima = 7) => lista.filter(aluno => aluno.media >= mediaMinima).map(aluno => aluno.nome.toUpperCase());

console.log(listarAprovados(alunos));
console.log(listarAprovados(alunos, 8));
