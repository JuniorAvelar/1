function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO, verifique os dados');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        //var img = document.createElement('img') // cria uma tag 'img'
        //img.setAttribute('id','foto') // adiciona uma um id 'foto' na tag 'img'
        var ft = document.getElementById('foto')

        if (fsex[0].checked) {
            genero = 'Masculino';
            if (idade >= 0 && idade < 10){
                // criaça
                ft.src = 'menino.png'
            } else if (idade <  21) {
                // jovem
                ft.src = 'jovenhomen.png'

            }else if (idade < 50){
                // adulto
            }else {
                // idoso
                ft.src = 'velho.png'

            }

        } else if (fsex[1].checked) {
            genero = 'Feminino';
            if (idade >=0 && idade < 10){
                // criaça
                ft.src = 'menina.png'

            } else if (idade <  21) {
                // jovem
                ft.src = 'jovemMenina.png'

            }else if (idade < 50){
                // adulto
            }else {
                // idoso
                ft.src = 'velha.png'

            }
        }
       // res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    }
}
