function loader() {
    document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;

function verificar() {

    var nome = document.getElementById('txtn').value
    var email = document.getElementById('txte').value
    var nomeCom = document.getElementById('txtf').value
    var qtd = parseInt(document.getElementById('txtq').value)
    var res = document.getElementById('res')
  
    var nomeCli = []
    var emailCli = []
    var nomeFood = []
    var qtdP = []
    var valor = 0
  
  
      if(nome.length == 0 || email.length == 0 || nomeCom.length == 0 || qtd.length == 0) {
        res.innerHTML = `Erro tente novamente`
      } else {
        nomeCli.push(nome)
        emailCli.push(email)
        nomeFood.push(nomeCom)
        qtdP.push(qtd)
      } if(nomeFood == 'Royals Catuperoni') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Royals Combo Doce') {
        valor = 60.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'Royals 4 Queijo') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Royals Calabresa') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Royals Bauru') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Royals Frango & Requeijão ') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } 
       else if(nomeFood == 'Royals bacon') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } 
       else if(nomeFood == 'Royals calabresa especial') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } 
       else if(nomeFood == 'Royals cream cheese  ') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } 
       else if(nomeFood == 'Royals flocos de coco  ') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      }
       else if(nomeFood == 'Royals creme & franbueza  ') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } 
       else if(nomeFood == 'Royals Brigadeiro   ') {
        valor = 62.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else {
        res.innerHTML = `Não temos esse produto no momento. Tente novamente`
      }
      
    
      
    
  }

  