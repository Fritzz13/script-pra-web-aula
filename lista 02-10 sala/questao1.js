function nomesMaiusculos(nomes) {
    let upper = [];
    for(let i = 0; i < nomes.length; i++) {
        upper.push(nomes[i].toUpperCase());
    }
    return upper;
}

let nomes = [ "ana", "bruno", "carla" ];
console.log(nomesMaiusculos(nomes));
