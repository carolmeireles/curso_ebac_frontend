//OBJETO LITERAL
const livro = {
    titulo: 'A escolha do verão',
    autor: 'Sara Gusella',
    paginas: 464,
    addALista: function() {
        const mensagem = `O livro '${this.titulo}' foi adicionado à sua lista de leitura.`;
        console.log(mensagem);
    },
    ler: function() {
        console.log('A leitura foi iniciada!');
    }
}

//TESTANDO O OBJETO LITERAL
console.log(livro.titulo + ' - ' + livro.autor);
console.log(livro.addALista());
console.log(livro.ler());