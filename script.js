const themebutton = document.querySelector("#themeButton");
const links = document.querySelectorAll(".navLink");
const counterp = document.querySelector("#clicksLabel");
let total = 0;

themebutton.addEventListener( "click", function () { document.body.classList.toggle("modoClaro"); } );

links.forEach(function (link) {
  link.addEventListener("click", function () {
    total++;
    counterp.innerHTML = `Clicks: ${total}`;
    counterp.classList.add("shown");
  } );
} );
