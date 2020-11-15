var name = 'World!';
(function () {
if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name);
} else {
    console.log('Hello ' + name);
}
})();
var str = 'World!';   
(function (name) {
if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name);
} else {
    console.log('Hello ' + name);
}
})(str)


var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
    count++;
}
console.log(count);