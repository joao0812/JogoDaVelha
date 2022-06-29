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
    for (let i = 0; i < 9; i += 3) {
        if (board[i] === board[i + 1] && board[i] === board[i + 2] && board[i] !== "") {
            janela[i].style.backgroundColor = 'green';
            janela[i + 1].style.backgroundColor = 'green';
            janela[i + 2].style.backgroundColor = 'green';
            return true
        }
    }
    for (let i = 0; i < 3; i++) {
        if (board[i] === board[i + 3] && board[i] === board[i + 6] && board[i] !== "") {
            janela[i].style.backgroundColor = 'green';
            janela[i + 3].style.backgroundColor = 'green';
            janela[i + 6].style.backgroundColor = 'green';
            return true
        }
    }
    if (board[0] === board[4] && board[0] === board[8] && board[0] !== "") {
        janela[0].style.backgroundColor = 'green';
        janela[4].style.backgroundColor = 'green';
        janela[8].style.backgroundColor = 'green';
        return true
    }
    if (board[2] === board[4] && board[2] === board[6] && board[2] !== "") {
        janela[2].style.backgroundColor = 'green';
        janela[4].style.backgroundColor = 'green';
        janela[6].style.backgroundColor = 'green';
        return true
    }

    if (!board.includes('')) {
        return true
    }
}