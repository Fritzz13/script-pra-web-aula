function cadastrarProduto(lista, nome, preco) {
    const produto = {nome:nome, preco:preco};
    lista.push(produto);
    return lista.length;
}

let lista = [];
let nome = "Caderno";
let preco = 15;

console.log(cadastrarProduto(lista, nome, preco));
console.log(lista);
