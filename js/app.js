let campoPista = document.getElementById('qtd-pista');
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
let campoSuperior = document.getElementById('qtd-superior');
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let campoInferior = document.getElementById('qtd-inferior');
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar () {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (ingresso == 'pista') {
        comprarPista(qtd);
    } else if (ingresso == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    if (qtdPista < qtd) {
            alert('Ingressos para Pista esgotados.');
    } else {
            qtdPista = qtdPista - qtd;
            campoPista.innerHTML = qtdPista;
            alert('Compra realizada!');
    }
}

function comprarSuperior(qtd) {
    if (qtdSuperior < qtd) {
            alert('Ingressos para Cadeira Superior esgotados.');
    } else {
            qtdSuperior = qtdSuperior - qtd;
            campoSuperior.innerHTML = qtdSuperior;
            alert('Compra realizada!');
    }
}

function comprarInferior(qtd) {
    if (qtdInferior < qtd) {
            alert('Ingressos para Cadeira Inferior esgotados.');
    } else {
            qtdInferior = qtdInferior - qtd;
            campoInferior.innerHTML = qtdInferior;
            alert('Compra realizada!');
    }
}