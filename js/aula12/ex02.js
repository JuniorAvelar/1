var agora = new Date()

var hora = agora.getHours() // pegando a hora em tempo real
var minutos = agora.getMinutes() // pegando minutos em tempo real
 
console.log (`Agora são exatamente ${hora}:${minutos} horas`)

 if(hora < 13){// 5 ate 12 bom dia 
    console.log('bom dia ')

 } else if (hora < 17 ) { // 12 ate 17 boa tarde
    console.log('boa tarde ')

 } else if (hora > 17){ // passou das 17 boa noite
    console.log('boa noite ')
 }   