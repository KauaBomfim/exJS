function carregar() {
    var msg = window.document.getElementById('horad')
    var img = window.document.getElementById('imgd')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#D2D6D9'
        msgd.innerHTML = `Bom dia!`
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#BF6B21'
        msgd.innerHTML = `Boa tarde!`
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#0F2426'
        document.getElementById('tt').style.color = '#fff'
        document.getElementById('ff').style.color = '#fff'
        msgd.innerHTML = `Boa Noite!`
    }

}