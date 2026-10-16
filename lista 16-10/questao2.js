// entrada?? nao sei como fazer vou so deixar aqui

let funcionarios = [
  { nome: "Lia", setor: "TI" },
  { nome: "Rui", setor: "RH" },
  { nome: "Ana", setor: "TI" },
  { nome: "Caio", setor: "Vendas" }
]

// fim da entrada

const nomesTI = funcionarios.filter(funcionario => funcionario.setor === "TI").map(funcionario => funcionario.nome);

console.log(nomesTI);
console.log(funcionarios.length);
