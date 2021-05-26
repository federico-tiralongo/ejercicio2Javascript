//primero
let snakeCaseString = 'lorem-ipsum';

let find = /(\-\w)/g;
let convert =  function(estilos){
    return estilos[1].toUpperCase();
};
let camelCaseString = snakeCaseString.replace(
    find,
    convert
);

console.log(camelCaseString, "primero");

//segundo

var s1 = 'someTextHere';
var o1 = s1.split(/(?=[A-Z])/).join('_').toLowerCase();

console.log(o1);