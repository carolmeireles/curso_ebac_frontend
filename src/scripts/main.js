document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-sorteador').addEventListener('submit', (e) => {
        e.preventDefault();
        let numeroMaximo = document.getElementById('num-max').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio);
        numeroAleatorio < 1 ? numeroAleatorio = 1 : numeroAleatorio = numeroAleatorio;

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});
