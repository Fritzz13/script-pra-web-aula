const lanes = 4;

let deck = [];
let gamestate = 1;

function addCard() {
  const name = prompt("Informe o nome da carta: ");
  const cost = parseInt(prompt("Informe o custo da carta: "));
  const health = parseInt(prompt("Informe a vida da carta: "));
  const attack = parseInt(prompt("Informe o ataque da carta: "));
  
  const card = { name: name, cost: cost, hp: health, atk: attack };
  deck.push(card);
}




while(gamestate == 1) {
  addCard();
  let visual = ``
  
  deck.forEach(function(card) { visual = `${visual}${card.name}: ${card.cost} cost | ${card.atk} ATK | ${card.hp} HP\n` });
  gamestate = confirm(`${visual}\nEsse é seu deck atual. Deseja adicionar mais alguma carta?`) ? 1 : 2;
}

alert(`wow!!! que deck bom!!!!! \nseria uma pena se alguem viesse lutar e você tivesse que usar ele,,,,`);
alert(`ainda bem que eu nao programei issokkkkkkkkkkkk`);
