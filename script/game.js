// Iniciando as variáveis
let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0;
let symbol = ['o', 'x']
let gameOver = false

const janela = document.querySelectorAll('.containerMarca')
console.log(janela[0])


function handleMove(position) {
    if (gameOver) {
        return;
    }
    if (board[position] == '') {
        board[position] = symbol[playerTime]

        gameOver = isWin()

        if (playerTime == 0) {
            playerTime = 1
        } else {
            playerTime = 0
        }
    }
}

function isWin() {
    let condWind = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,4,7],
        [3,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < condWind.length; i++) {
        let seq = condWind[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]


        if (board[pos1] === board[pos2] && board[pos1] === board[pos3] && board[pos1] !== "") {
            janela[pos1].style.backgroundColor = 'green';
            janela[pos2].style.backgroundColor = 'green';
            janela[pos3].style.backgroundColor = 'green';
            return true
        }
    }
    

    if (!board.includes('')) {
        return true
    }
}