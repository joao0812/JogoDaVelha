// Iniciando as variáveis
let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0;
let symbol = ['o', 'x']


function handleMove(position) {
    board[position] = symbol[playerTime]

    if (playerTime == 0) {
        playerTime = 1
    } else {
        playerTime = 0
    }
}