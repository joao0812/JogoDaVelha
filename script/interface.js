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

function uptadeJanela() {
    let janela = document.querySelectorAll('.containerMarca')

    janela.forEach(element => {
        let position = element.id
        let symbol = board[position]
        if (symbol !== "") {
            element.classList.add(`${symbol}`)
        } 
    })

}
function restart() {
    board = ['', '', '', '', '', '', '', '', '']
    playerTime = 0;
    gameOver = false
    let janela = document.querySelectorAll('.containerMarca')
    janela.forEach(element => {
        if(element.classList.length > 1) {
            element.classList.remove('x')
            element.classList.remove('o')
            element.style.backgroundColor = '#daa520'
        }
    })
}

