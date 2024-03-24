const leia = require('readline-sync');

let num1, num2
    
num1 = leia.questionInt(" digite o primeiro número do intervalo");
num2 = leia.questionInt(" digite o último número do intervalo");

if(num1 < num2){
    console.log("intervalo inválido!")
}
