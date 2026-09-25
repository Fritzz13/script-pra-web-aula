const preco = parseFloat(prompt("Informe o preco do produto: "));
const quantidade = parseInt(prompt("Informe a quantidade de produtos: "));
const porcentagemdedesconto = parseFloat(prompt("Informe o percentual de desconto: "));

const subtotal = preco * quantidade;
const desconto = porcentagemdedesconto * subtotal / 100;
const total = subtotal - desconto;

alert(`Valor unit.: R$${preco.toFixed(2)}
Qtde: ${quantidade}
----------
Subtotal: R$${subtotal.toFixed(2)}
Desconto: ${porcentagemdedesconto.toFixed(1)}% (R$${desconto.toFixed(2)})
Valor total: R$${total.toFixed(2)}`)
