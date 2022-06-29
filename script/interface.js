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

