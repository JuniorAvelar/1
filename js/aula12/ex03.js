var agora = new Date() // pegar a data
var dia_semana = agora.getDay() // PEGANDO O DIA DA SEMANA
 //console.log (dia_semana)

 switch(dia_semana){
    case 0:
        console.log ('domigo')
    break
    case 1:
        console.log ('segunda')
    break
    case 2:
        console.log ('terça')
    break
    case 3:
        console.log ('quarta')
    break
    case 4:
        console.log ('quinta')
    break
    case 5:
        console.log ('sexta')
    break
    case 6:
        console.log ('sabado')
    break
    default :
    console.log ('ERRO')
 }
