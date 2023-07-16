//first we want the hover affect to show circle as default for the first player to select 
//then when the first player chooses a random box it should display a dark circle there
//then the hover affect should show x for second player
//and once player select a certain box it shows a dark x
//and then repeat the whole cycle again

const dataCells= document.querySelectorAll('[data-cell]')
const restartButton= document.getElementById('restartButton')
const winningText= document.querySelector('[data-winning-message-text]')
const mainBoard= document.getElementById('mainBoard')
const board= document.getElementById('board')
// const value= (prompt(`Choose Your Weapon: X or O`)).toUpperCase()

// if(value==='O'){
function displayHoverCircle(){
    console.log(`Targeting circle`)
    board.classList.add('circle')
    dataCells.forEach((cells)=>{
        cells.addEventListener('click',()=>{
            // console.log(cells)
            if(cells.classList.contains('circle')){
                cells.removeAttribute('circle')
                displayHoverX()
                console.log(`Test1 ${cells}`)
            }
            else{
            cells.classList.add('circle')
            console.log(cells)
            }
            
        })
    })
}
// window.onload= displayHoverCircle()
// }

// else if(value==='X'){
function displayHoverX(){
    console.log(`Targeting X`)
    board.classList.add('x')
    dataCells.forEach((cells)=>{
        cells.addEventListener('click',()=>{
            if(cells.hasAttribute('x')){
                cells.removeAttribute('x')
                displayHoverCircle()
                console.log(cells)
            }
            else{
            cells.classList.add('x')
            }
        })
    })
}
// displayHoverX()

// }

// else{
//     alert(`You have not entered a valid value`)
// }




function displayHoverCircle(){
    console.log(`Targeting circle`)
    board.classList.add('circle')

    let val 

    dataCells.forEach((cells)=>{
        cells.addEventListener('click',()=>{
            // console.log(cells)
            val= Array.from(dataCells).some(cells=> cells.classList.contains('circle'))
            if(val==='true'){
                cells.removeAttribute('circle')
                displayHoverX()
                console.log(`Test1 ${cells}`)
            }
            else{
            cells.classList.add('circle')
            console.log(cells)
            }
            
        })
    })
}
// window.onload= displayHoverCircle()


// console.log(dataCells)
// let val= Array.from(dataCells).some(cells=> cells.classList.contains('circle'))
// console.log(val)

// let someValue= dataCells.some(cells=> cells.includes('circle'))
// console.log(someValue)
let val
function mainFun(){
board.addEventListener('click',sampleFunc)
    board.classList.add('circle')
function sampleFunc(){
    // console.log(board)
    let datV= dataCells.some(value=>value.classList.contains('cell'))
    console.log(datV)

    dataCells.forEach(cells=>{
        // console.log(cells)
        // console.log(`Cells are: ${cells}`)
            val= Array.from(cells).some(()=>{
            dataCells.classList.contains('cell')
        })
        // console.log(dataCells)
        // console.log(val)
        if(val===false){
            cells.classList.add('circle')
        }
        else{
            console.log('It needs some milk')
        }
        // console.log(cells)
    })
    
}
}
mainFun()













