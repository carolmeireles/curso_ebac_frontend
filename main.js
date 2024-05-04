const form = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('msg');

function validaCampo(numA, numB) {
    return numB.value > numA.value; //true ou false
}

function limpaCampo() {
    campoA.value = "";
    campoB.value = "";
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const validacao = validaCampo(campoA, campoB);
    if(validacao === true) {
        mensagem.innerHTML = "Válido! O número do campo B é maior que o campo A."
        mensagem.style.color = "green";
        limpaCampo();
    } else {
        mensagem.innerHTML = "Inválido! O campo B precisa ser maior que o campo A."
        mensagem.style.color = "red";
    }
})