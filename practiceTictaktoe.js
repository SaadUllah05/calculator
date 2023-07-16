class Tictaktoe{
    constructor(){
        this.circleValue= circleValue
        this.xValue= xValue
        this.playerSelection= playerSelection
        this.winningCombinations= winningCombinations
        this.board= board
        this.winningMessage= winningMessage
        this.dataWinningMessageText= dataWinningMessageText
        this.dataCells= dataCells
        this.restartButton= restartButton
        this.startGame()
        
                // this.dataCells = document.querySelectorAll('[data-cell]');
                // this.board = document.getElementById('board');
                // this.winningMessage = document.getElementById('winning-message');
                // this.restartButton = document.getElementById('restartButton');
                // this.dataWinningMessageText = document.querySelector('[data-winning-message-text]');
                // this.winningCombinations = [
                //     [0,1,2],[3,4,5],[6,7,8],
                //     [0,4,8],[2,4,6],
                //     [0,3,6],[1,4,7],[2,5,8]
                //   ];
                // this.playerSelection = false;
                // this.circleValue = "circle";
                // this.xValue = "x";
                // this.startGame();
            
    }
    
    startGame(){
        this.playerSelection= false
        this.board.classList.remove(this.circleValue)
        this.board.classList.remove(this.xValue)
        this.board.classList.add('circle')

        this.dataCells.forEach(cells=>{
            cells.classList.remove(this.circleValue)
            cells.classList.remove(this.xValue)
            cells.removeEventListener("click", this.clickedSection)
            cells.addEventListener("click", this.clickedSection, {once: true})
        })
        
        this.winningMessage.classList.remove("show")
        this.restartButton.addEventListener('click', this.startGame.bind(this))
    }

    clickedSection= e=>{
        const targetElement= e.target;
        const playerTurn = this.playerSelection ? this.xValue : this.circleValue
        
        console.log('what is this')

        this.targetCell(targetElement,playerTurn)
        if(this.checkWin(playerTurn)){
            this.endGame(false)
        }
        else if(this.isDraw()){
            this.endGame(true)
        }
        else{
            this.switchTurns()
            this.switchBoardHover()
        }
    }

    targetCell(targetElement,playerTurn){
            targetElement.classList.add(playerTurn)
    }

    checkWin(playerTurn){
        return this.winningCombinations.some(combinations=>{
            return combinations.every(index=>{
                return dataCells[index].classList.contains(playerTurn)
            })
        })
    }

    endGame(draw){
        if(draw){
            this.dataWinningMessageText.innerText=`Draw!`
        }
        else{
            this.dataWinningMessageText.innerText=`${this.playerSelection ? "X's" : "O's"} Wins!`
        }
        winningMessage.classList.add("show")
    }

    isDraw(){
        return [...this.dataCells].every(data=>{
        return data.classList.contains(this.circleValue) || data.classList.contains(this.xValue)
    })
    }

    switchTurns(){
        this.playerSelection= !this.playerSelection
    }

    switchBoardHover(){
        if(this.board.classList.contains('x')){
            this.board.classList.remove('x')
            this.board.classList.add('circle')
        }
        else{
            this.board.classList.remove('circle')
            this.board.classList.add('x')
        }
    }
}

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

const ticTakToe= new Tictaktoe()
ticTakToe.startGame()


