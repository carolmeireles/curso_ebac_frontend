class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno('Carol', 7);
const aluno2 = new Aluno('Gutto', 5);
const aluno3 = new Aluno('Mirela', 8);
const aluno4 = new Aluno('José', 10);

let alunos = [aluno1, aluno2, aluno3, aluno4];

function listarAprovados() {
    for(let i = 0; i < alunos.length; i++) {
        if(alunos[i].nota >= 6) {
            console.log(alunos[i].nome);
        }
    }
}

console.log(listarAprovados());
