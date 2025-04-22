let date = new Date()

let mesAno = [`janeiro`, `fevereiro`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, 
    `Agosto`, `Setembro`, `Outubro`, `Novembro`, `dezembro`]

let diaAtual = date.getDate()

let mesAtual = date.getMonth() + 1

let anoAtual = date.getFullYear()

let nomeMesAtual = mesAno[date.getMonth()]

let body = document.querySelector(`body`)

body.innerHTML = `${diaAtual}/${nomeMesAtual}/${anoAtual}`

/* console.log(date) */