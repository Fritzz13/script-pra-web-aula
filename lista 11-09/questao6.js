const distancia = Number(prompt("Informe a distancia da viagem: "));
const consumomedio = Number(prompt("Informe o consumo medio de gasosa do seu veiculo: "));
const precogasosa = parseFloat(prompt("Informe o preco atual da gasosa: "));

const litros = distancia / consumomedio;
const custo = litros * precogasosa;

alert(`Voce vai usar ${litros.toFixed(1)}L de gasosa e isso vai te custar R$${custo.toFixed(2)}`);
