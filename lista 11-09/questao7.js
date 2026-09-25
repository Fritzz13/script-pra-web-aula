let nome = prompt("Informe seu nome: ");
let idade = Number(prompt("Informe sua idade: "));
let curso = prompt("Informe seu curso: ");

let confirmado = confirm(`Nome: ${nome} \nIdade: ${idade} \nCurso: ${curso}
\nare you sure`);

if(confirmado) {
  alert(`Nice!!! Bem vindo ao time ${nome}!!!!!!`);
} else {
  alert("Po cara proxima vez bota direito os coiso :(");
}
