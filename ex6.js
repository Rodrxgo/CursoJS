//Exercício 6
var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

//Propiedades

console.log("Array lenght: ", pens.length);

//Metódos

//Reverte a ordem do array
pens.reverse();

//Remove o primeiro valor do array
pens.shift();

//Adiciona os valores nas primeiras posições do array
pens.unshift("purple", "black");

//Remove o último valor do array
pens.pop();

//Adiciona os valores nas posições finais do array
pens.push("pink", "prussian blue");

//Procura e remove um valor específico
pens.slice(3, 2);

console.log("After: ", pens);

//Cria uma cópia do array, com uma nova nomenclatura
var newPens = pens.slice();
console.log("New pens: ",newPens);

//Retorna o primeiro elemento que é passado como parametro
var result = pens.indexOf(search, index);
console.log("O resultado procurado é: ", result);

//Retorna o item em uma string separada por uma vírgulas
var arrayString = pens.join('-');
console.log("String from array: ", arrayString)