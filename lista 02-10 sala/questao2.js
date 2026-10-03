function apresentarAluno(aluno) {
    return `${aluno.nome.toUpperCase()} (${aluno.curso})`;
}

let aluno = {nome: "maria", curso: "ADS"};
console.log(apresentarAluno(aluno));
