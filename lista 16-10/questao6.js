// entrada?? nao sei como fazer vou so deixar aqui

let nome1 = "  Maria Clara Souza ";
let nome2 = "JOAO LIMA";

// fim da entrada

const gerarUsuario = nomeCompleto => nomeCompleto.trim().toLowerCase().split(" ").join(".");

console.log(gerarUsuario(nome1));
console.log(gerarUsuario(nome2));
