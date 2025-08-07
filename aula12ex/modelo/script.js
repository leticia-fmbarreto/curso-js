function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 20
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'prd-manhã.png'
        document.body.style.background = '#70af74ff'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'prd-tarde.png'
        document.body.style.background = '#bd733bff'
    } else {
        //BOA NOITE
        img.src = 'prd-noite.png'
        document.body.style.background = '#301d20f5'
    }
}
