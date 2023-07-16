const dataCells= document.querySelectorAll('[data-cell]')
const board= document.getElementById('board')
const winningMessage= document.getElementById('winning-message')
const restartButton= document.getElementById('restartButton')
const dataWinningMessageText =document.querySelector('[data-winning-message-text]')
const winningCombinations= [
    [0,1,2],[3,4,5],[6,7,8],
    [0,4,8],[2,4,6],
    [0,3,6],[1,4,7],[2,5,8]
]

let playerSelection
const circleValue= "circle" 
const xValue= "x"

gameStart()

function gameStart(){
playerSelection= false
board.classList.remove(circleValue)
board.classList.remove(xValue)
board.classList.add('circle')
dataCells.forEach(cells=>{
    cells.classList.remove(circleValue)
    cells.classList.remove(xValue)
    cells.removeEventListener("click", clickedSection)
    cells.addEventListener("click", clickedSection, {once: true})
})
winningMessage.classList.remove("show")
}

restartButton.addEventListener('click',gameStart)

function clickedSection(e){
    const targetElement= e.target;
    const playerTurn = playerSelection ? xValue : circleValue
    
    targetCell(targetElement,playerTurn)
    if(checkWin(playerTurn)){
        endGame(false)
    }
    else if(isDraw()){
        endGame(true)
    }
    else{
        switchTurns()
        switchBoardHover()
    }
}

function targetCell(targetElement,playerTurn){
    targetElement.classList.add(playerTurn)
}

function checkWin(playerTurn){
    return winningCombinations.some(combinations=>{
        return combinations.every(index=>{
            return dataCells[index].classList.contains(playerTurn)
        })
    })
}

function endGame(draw){
    if(draw){
        dataWinningMessageText.innerText=`Draw!`
    }
    else{
        dataWinningMessageText.innerText=`${playerSelection ? "X's" : "O's"} Wins!`
    }
    winningMessage.classList.add("show")
}

function isDraw(){
    return [...dataCells].every(data=>{
    return data.classList.contains(circleValue) || data.classList.contains(xValue)
})
}

function switchTurns(){
    playerSelection= !playerSelection
}

function switchBoardHover(){
    if(board.classList.contains('x')){
        board.classList.remove('x')
        board.classList.add('circle')
    }
    else{
        board.classList.remove('circle')
        board.classList.add('x')
    }
}