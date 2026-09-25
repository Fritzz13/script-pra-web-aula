const salario = parseFloat(prompt("Informe o seu salario: "));
const porcentodereajuste = parseFloat(prompt("Informe o percentual de reajuste: "));

let diferenca = porcentodereajuste * salario / 100;
const novosalario = salario + diferenca;

if(diferenca < 0) {
  diferenca = -1 * diferenca;
  alert(`Salario antigo: R$${salario.toFixed(2)} \nReajuste: -R$${diferenca.toFixed(2)} \nSalario novo: R$${novosalario.toFixed(2)}`);
} else {
  alert(`Salario antigo: R$${salario.toFixed(2)} \nAumento: R$${diferenca.toFixed(2)} \nSalario novo: R$${novosalario.toFixed(2)}`);
}
