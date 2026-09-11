const themebutton = document.querySelector("#themeButton");
const links = document.querySelectorAll(".navLink");
const counterp = document.querySelector("#clicksLabel");
const form = document.querySelector("form");
let total = 0;


themebutton.addEventListener( "click", function () { document.body.classList.toggle("escuro"); } );


links.forEach(function (link) {
  link.addEventListener("click", function () {
    total++;
    counterp.innerHTML = `Clicks: ${total}`;
    counterp.classList.add("shown");
  } );
} );


form.addEventListener("submit", function (event) {
  event.preventDefault();
  const campos = form.querySelectorAll("input");
  const formbutton = form.querySelector("#formButton");
  let vazio = false;
  
  formbutton.innerHTML = "Enviar";
  
  campos.forEach(function (campo) {
    campo.value.trim();
    if (campo.value === '') { vazio = true; }
  } );

  if (vazio) {
    alert("Por favor, preencha o formulário completo antes de tentar enviar.");
  } else {
    campos.forEach(function (campo) { campo.value = ''; } );
    formbutton.innerHTML = "Sugestão enviada!";
    setTimeout(function () { formbutton.innerHTML = "Enviar"; }, 1300);
  }
} );
