var theBiggest = (function (a, b) {
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFraction, secondFraction);

var firstFraction = 7/9;
var secondFraction = 13/25;

console.log(theBiggest);