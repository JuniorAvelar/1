console.log ('ESTRUCÃO:')
console.log ('ADIÇÃO DIGITE (1)')
console.log ('SUBTRAÇÃO DIGITE (2)')
console.log ('MULTIPLICAÇÃO DIGITE (3)')
console.log ('DIVISÃO DIGITE (4)')
console.log ('POTÊNCIA DIGITE (5)')



var operacao = 7
var n1 = 2
var n2 = 3

switch(operacao){
    case  1 :
       var resultado = n1 + n2
       console.log(`O Resultado é ${resultado}`)
       break

      case 2 :
       var resultado = n1 - n2
       console.log(`O Resultado é ${resultado}`)
      break

      case 3 :
        var resultado = n1 * n2
        console.log(`O Resultado é ${resultado}`)
       break

       case 4 :
        var resultado = n1 / n2
        console.log(`O Resultado é ${resultado}`)
        break

        case 5:
        var resultado = n1 ** n2
        console.log(`O Resultado é ${resultado}`)
         break
        } 
        if(operacao > 5) {
        console.log(`ERRO!!`)
         
        //default :
        //console.log ('ERRO!! número da operação inválido')
       
}

