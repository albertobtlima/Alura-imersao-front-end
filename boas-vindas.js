const elementoBoasVindas = document.getElementById("greeting");
const horaAtual = new Date().getHours();

function mensagemBoasVindas() {
    if (horaAtual >= 5 && horaAtual < 12) {
        textoBoasVindas = "Bom dia";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        textoBoasVindas = "Boa tarde";
    } else {
        textoBoasVindas = "Boa noite";
    }

    elementoBoasVindas.textContent = textoBoasVindas;
}

mensagemBoasVindas();
