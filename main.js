//FUNÇÃO CONSTRUTORA
function Livro(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.addALista = function() {
        const mensagem = `O livro '${this.titulo}' foi adicionado à sua lista de leitura.`;
        console.log(mensagem);
    },
    this.ler = function() {
        console.log('A leitura foi iniciada!');
    },
    this.finalizarLivro = function() {
        console.log('Parabéns! O livro foi concluído.');
    }
}

function Ficcao(titulo, autor, paginas, generos, subgenero) {
    this.generos = generos;
    this.subgenero = subgenero;

    Livro.call(this, titulo, autor, paginas);

    this.finalizarLivro = function() {
        console.log('Parabéns! A ficção foi concluída.');
    }
}

function NaoFiccao(titulo, autor, paginas, genero) {
    this.genero = genero;
    
    Livro.call(this, titulo, autor, paginas);

    this.finalizarLivro = function() {
        console.log('Parabéns! O livro de não-ficção foi concluído.');
    }
}

const livro1 = new Livro('A escolha do verão', 'Sara Gusella', 464);
console.log(livro1.titulo + ' - ' + livro1.autor);
console.log('Número de páginas: ' + livro1.paginas);

console.log();

const livro2 = new Ficcao('A Escolha do Verão', 'Sara Gusella', 464, 'Aventura e fantasia', 'Ficção cristã');
console.log(livro2.titulo + ' - ' + livro2.autor);
console.log('Gêneros: ' + livro2.generos + ', ' + livro2.subgenero);
console.log('Número de páginas: ' + livro2.paginas);

console.log();

const livro3 = new NaoFiccao('O Problema da Dor', 'C. S. Lewis', 208, 'Religioso');
console.log(livro3.titulo + ' - ' + livro3.autor);
console.log('Gênero: ' + livro3.genero);
console.log('Número de páginas: ' + livro3.paginas);

console.log();

console.log(livro3.addALista());
console.log(livro3.ler());
console.log(livro3.finalizarLivro());