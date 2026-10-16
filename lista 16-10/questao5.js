// entrada?? nao sei como fazer vou so deixar aqui

let recebido = '{"produto":"Monitor","preco":900,"estoque":4}';

// fim da entrada

let recobjeto = JSON.parse(recebido);
recobjeto.preco = recobjeto.preco * 0.9;
recobjeto.estoque--;
let recmodif = JSON.stringify(recobjeto);

console.log(typeof(recobjeto));
console.log(recmodif);
console.log(typeof(recmodif));
