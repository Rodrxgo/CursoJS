//Exercício 7

//Função normal, com a chamada de forma explícita pelo nome:
function multiplicaTermos(a, b) {
    var resultado = a * b;
    console.log(a + "multiplicado por " + b + "é: ", resultado)
}

multiplicaTermos(3, 5);

//Função anonima armazenada na variável.
//Invocada ao fazer a chamada da variável como uma função:
var divideTermos = function () {
    var resultado = 3 / 4;
    console.log(" 3 dividido por 4 é:")
}

divideTermos();

//Expressões de funções imediatamente invocadas
//É executado assim que o navegador a encontra

(function () {
    var resultado = 12 / 0.75;
    console.log("12 dividido por 0.75 é: ", resultado);
}())