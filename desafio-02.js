"use strict";
var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Atriz"] = 0] = "Atriz";
    Profissoes[Profissoes["Padeiro"] = 1] = "Padeiro";
})(Profissoes || (Profissoes = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissoes.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissoes.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissoes.Atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissoes.Padeiro
};
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
