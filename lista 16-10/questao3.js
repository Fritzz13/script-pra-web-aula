// entrada?? nao sei como fazer vou so deixar aqui

let carrinho = [
  { item: "Teclado", preco: 150, quantidade: 1 },
  { item: "Mouse", preco: 80, quantidade: 2 },
  { item: "Cabo USB", preco: 25, quantidade: 3 }
];

// fim da entrada

let total = carrinho.reduce( (soma, item) => soma + (item.preco * item.quantidade), 0 );

console.log(`Total da compra: R$ ${total}`);
