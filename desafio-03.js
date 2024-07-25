"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
Object.defineProperty(exports, "__esModule", { value: true });
const botaoAtualizar = document.getElementById('atualizar-saldo');
const botaoLimpar = document.getElementById('limpar-saldo');
const soma = document.getElementById('soma');
const campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
function somarSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    if (soma) {
        soma.value = '';
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        const somaValor = parseFloat(soma.value);
        if (!isNaN(somaValor)) {
            somarSaldo(somaValor);
        }
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}
// Inicia o saldo com 0
limparSaldo();
