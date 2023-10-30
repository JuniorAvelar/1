console.log ('ESTRUCÃO:')
console.log ('ADIÇÃO DIGITE (1)')
console.log ('SUBTRAÇÃO DIGITE (2)')
console.log ('MULTIPLICAÇÃO DIGITE (3)')
console.log ('DIVISÃO DIGITE (4)')

var operacao = 7
var n1 = 3
var n2 = 5

if (operacao == 1 ) {
    var resultado = n1 + n2 
    console.log (`Resultado é ${resultado}`)
    
}else if(operacao == 2) { 
    var resultado = n1 - n2 
    console.log (`Resultado é ${resultado}`)
}else if (operacao == 3) {
    var resultado = n1 * n2 
    console.log (`Resultado é ${resultado}`)
}else if (operacao == 4) {
     var resultado = n1 / n2 
    console.log (`Resultado é ${resultado}`)
}else {
    console.log ('ERRO')
}