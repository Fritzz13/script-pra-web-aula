const mainbutton = document.querySelector("#mainButton");
let clicks = 0;

mainbutton.addEventListener( "click", function () {
  clicks++;
  mainbutton.innerHTML = `Clicado ${clicks}x`;
} );
