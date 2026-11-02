function carregar() {
  var msg = window.document.querySelector(`div#msg`)
  var img = window.document.querySelector(`img#imagem`)
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  //var hora =

  if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = `imagens/foto-arvore-250.png`
    document.body.style.background = `#e2cd9f`
    msg.innerHTML += `<p> <strong> Bom Dia! <strong> <p/>`
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = `imagens/foto-dia.png`
    document.body.style.background = `#b9846f`
    msg.innerHTML += `<p> <strong>Boa tarde! <strong> <p/>`
  } else {
    //Boa noite
    img.src = `imagens/foto-noite.png`
    document.body.style.background = `#515154`
    msg.innerHTML += `<p> <strong> Boa Noite! <strong> <p/>`
  }
}
