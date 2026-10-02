const notas = [5, 6, 9];
const nome = "André";
let media = 0;
let denero = 3;

let relatorio = `${nome} \nDeñero inicial: R$${denero.toFixed(2)} \n`;
let counter = 1;
notas.forEach(function(nota) {
  media += nota;
  relatorio = `${relatorio} Nota ${counter}: ${nota.toFixed(1)}`;
  if (nota > 8) {
    denero += 10;
    relatorio = `${relatorio} --Ganhou denero!`;
  }
  relatorio = `${relatorio} \n`;
});
media = media / notas.length;
relatorio = `${relatorio}----------- \nMédia: ${media.toFixed(1)}`;
if (media > 8) {
  denero += 30;
  relatorio = `${relatorio} --Ganhou denero!!`;
}
relatorio = `${relatorio} \nDeñero final: R$${denero.toFixed(2)} \n`;

console.log(relatorio);
