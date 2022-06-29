document.addEventListener('DOMContentLoaded', () => {

    let janela = document.querySelectorAll('.containerMarca')

    janela.forEach(element => {
        element.addEventListener('click', handleClick)
    });

})

function handleClick(event) {
    let janela = event.target 
    let position = janela.id

    handleMove(position)
    uptadeJanela()
}

function uptadeJanela(){
    let janela = document.querySelectorAll('.containerMarca')

    janela.forEach(element => {
        let position = element.id
        let symbol = board[position]
        if (symbol !== "") {
            element.classList.add(`${symbol}`)
        }
    })

}



























































/* const janela11 = document.getElementById('cont-11')
const janela12 = document.getElementById('cont-12')
const janela13 = document.getElementById('cont-13')
const janela21 = document.getElementById('cont-21')
const janela22 = document.getElementById('cont-22')
const janela23 = document.getElementById('cont-23')
const janela31 = document.getElementById('cont-31')
const janela32 = document.getElementById('cont-32')
const janela33 = document.getElementById('cont-33')

const janela = document.querySelectorAll('[id*=div]')
console.log(janela)
const jogador = document.getElementById('jogador')
const jogo = document.getElementById('containerJogo')

var O = "https://i.pinimg.com/originals/70/7d/55/707d554c6c113f05fa0d783104e3d684.png"
var X = "https://cdn-icons-png.flaticon.com/512/60/60994.png?w=826"
var dot = "https://cdn-icons-png.flaticon.com/512/319/319873.png?w=740"

var cont = 1
var total = 0

function verificaVencedor() {
    verificaHorizontal()
    verificaVertical()
    verificaDiagonalPrincipal()
    verificaDiagonalSecundaria()
    telaVencedor()
}

function telaVencedor() {

}



function verificaHorizontal() {
    let i = 0
    while (i < 9) {
        if ((janela[i].src === janela[i + 1].src) && (janela[i].src === janela[i + 2].src) && (janela[i].src !== dot)) {
            console.log('VENCEDOR')
            console.log(janela[i].id + '--' + janela[i + 1].id + '--' + janela[i + 2].id)
            console.log(janela[i].src + '--' + janela[i + 1].src + '--' + janela[i + 2].src)
            break
        }
        i += 3
    }

    if (i === 6) {
        janela31.style.backgroundColor = 'green'
        janela32.style.backgroundColor = 'green'
        janela33.style.backgroundColor = 'green'
        return true
    } else if (i === 3) {
        janela21.style.backgroundColor = 'green'
        janela22.style.backgroundColor = 'green'
        janela23.style.backgroundColor = 'green'
        return true
    } else if (i === 0) {
        janela11.style.backgroundColor = 'green'
        janela12.style.backgroundColor = 'green'
        janela13.style.backgroundColor = 'green'
        return true
    }
}
function verificaVertical() {
    let i = 0
    while (i < 3) {
        if ((janela[i].src === janela[i + 3].src) && (janela[i].src === janela[i + 6].src) && (janela[i].src !== dot)) {
            console.log('VENCEDOR')
            console.log(janela[i].id + '--' + janela[i + 3].id + '--' + janela[i + 6].id)
            console.log(janela[i].src + '--' + janela[i + 3].src + '--' + janela[i + 6].src)
            break
        }
        i++
    }

    if (i === 2) {
        janela13.style.backgroundColor = 'green'
        janela23.style.backgroundColor = 'green'
        janela33.style.backgroundColor = 'green'
        return true
    } else if (i === 1) {
        janela12.style.backgroundColor = 'green'
        janela22.style.backgroundColor = 'green'
        janela32.style.backgroundColor = 'green'
        return true
    } else if (i === 0) {
        janela11.style.backgroundColor = 'green'
        janela21.style.backgroundColor = 'green'
        janela31.style.backgroundColor = 'green'
        return true
    }
}
function verificaDiagonalPrincipal() {
    let i = 0;
    if ((janela[i].src === janela[i + 4].src) && (janela[i].src === janela[i + 8].src) && (janela[i].src !== dot)) {
        console.log('VENCEDOR')
        console.log(janela[i].id + '--' + janela[i + 4].id + '--' + janela[i + 8].id)
        console.log(janela[i].src + '--' + janela[i + 4].src + '--' + janela[i + 8].src)
        janela11.style.backgroundColor = 'green'
        janela22.style.backgroundColor = 'green'
        janela33.style.backgroundColor = 'green'
        return true
    } else {
        return false
    }

}
function verificaDiagonalSecundaria() {
    let i = 0
    if ((janela[i + 2].src === janela[i + 4].src) && (janela[i + 2].src === janela[i + 6].src) && (janela[i + 2].src !== dot)) {
        console.log('VENCEDOR')
        console.log(janela[i + 2].id + '--' + janela[i + 4].id + '--' + janela[i + 6].id)
        console.log(janela[i + 2].src + '--' + janela[i + 4].src + '--' + janela[i + 6].src)
        janela13.style.backgroundColor = 'green'
        janela22.style.backgroundColor = 'green'
        janela31.style.backgroundColor = 'green'
        return true
    } else {
        return false
    }

}


function verificaJogador(evento) {
    if (evento.target.src === dot) {
        if (cont % 2 !== 0) {
            evento.target.src = X
            jogador.innerText = 'Jogador P1'
            evento.target.classList.add("jogoSemMarca")
        } else {
            evento.target.src = O
            jogador.innerText = 'Jogador P2'
            evento.target.classList.add("jogoSemMarca")
        }
        cont++
    }
    verificaVencedor(evento)
}

janela.forEach(element => element.addEventListener('click', verificaJogador)) */