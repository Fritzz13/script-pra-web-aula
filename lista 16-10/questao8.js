const aplicarOperacao = (a, b, operacao) => operacao(a, b);

function soma(num1, num2) {
  return num1 + num2;
}

const multiplicacao = (num1, num2) => num1 * num2;


const a = 8;
const b = 2;

console.log(aplicarOperacao(a, b, soma));
console.log(aplicarOperacao(a, b, multiplicacao));
console.log(aplicarOperacao(a, b, (num1, num2) => num1 - num2 )); // subtracao
