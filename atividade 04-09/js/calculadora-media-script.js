const form = document.querySelector("form");
const calcbutton = document.querySelector("#calcular");
const outp = document.querySelector("#resultado");

calcbutton.addEventListener( "click", function (event) {
  event.preventDefault();
  const campos = form.querySelectorAll("input");
  let vazio = false;
  
  campos.forEach( function (campo) {
    campo.value.trim();
    if (campo.value === '') { vazio = true; }
  } );
  
  if (vazio) {
    alert("Preencha todos os campos para calcular a média");
  } else {
    let media = 0;
    let qtdnotas = 0;
    campos.forEach( function (campo) {
      media += Number(campo.value);
      qtdnotas++;
    } );
    
    media = media / qtdnotas;
    outp.innerHTML = `${media}`;
    if (media >= 7) {
      outp.classList.add("aprovado");
      outp.classList.remove("reprovado");
    } else {
      outp.classList.add("reprovado");
      outp.classList.remove("aprovado");
    }
  }
} );