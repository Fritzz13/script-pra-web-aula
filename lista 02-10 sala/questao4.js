function contarVogais(palavra) {
    let total = 0;
    for(let i = 0; i < palavra.length; i++) { if ("AaEeIiOoUu".includes(palavra[i])) { total++; } }
    return total;
}

let palavra = "JavaScript";
console.log(contarVogais(palavra));
