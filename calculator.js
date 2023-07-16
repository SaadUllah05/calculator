const btn1= document.getElementById('1')
const btn2= document.getElementById('2')
const btn3= document.getElementById('3')
const btn4= document.getElementById('4')
const btn5= document.getElementById('5')
const btn6= document.getElementById('6')
const btn7= document.getElementById('7')
const btn8= document.getElementById('8')
const btn9= document.getElementById('9')
const btn0= document.getElementById('0')
const btnDivide= document.getElementById('/')
const btnEqual= document.getElementById('=')
const btnPlus= document.getElementById('+')
const btnMinus= document.getElementById('-')
const btnMultiply= document.getElementById('*')

//===============
// let val= btn9.innerText
// console.log(val)
//=================

//======For getting value by e.target=========
// let getVal= document.addEventListener('click',getValue(e))
// console.log(getVal)

// btnEqual.addEventListener('click',sum)
// function getValue(value){
//     let eValue=0

//     eValue+= value.target.value ?? new Error('You clicked outside the container')
//     if(eValue[0]== '=' || '+' || '-' || '*'){
//         return `You entered operator at the start`
//     }
//     else{
//         return eValue
//     }
// }

//===========for getting target by .innerText==============
// function getVal(targetValue){
//     let v=''
//     v+= targetValue
//     console.log(v)
// }


// document.addEventListener('click',(e)=>{
//     let v=''
//     let eValue= e.target.innerText
//     if(eValue=='='){
//         return v
//     }
//     v+= eValue
// })
// console.log(test)

// function sum(){
//       let resueValuelt=0;
//       result+=
//       console.log(result)
// }

// function subtraction(){

// }

// function multiplication(){

// }

//getting a value 

// document.getElementById('divMain').addEventListener('click',(e)=>{
//     let value='' 
//     let tarValue= e.target.innerText
//     value+= tarValue
//     console.log(value)
    // if(tarValue=='='){
    // console.log(value)
    // }
// })


//arrayy push values

// function testing(...numbers){
//      let result=0
//      let arr=[]
//      arr.push(numbers)
//      console.log(arr)
    
//     arr.forEach((index)=>{
//         console.log(arr[index])
        // result= result+values
    // })
    //  console.log(result)
// }

// testing(1,2,3,4)


// let myArr= [3,45,6,7]
// let sum=0
//  myArr.forEach((values)=>{
//       sum= sum+values
// })
// console.log(sum)


// function testing1(...numbers){
//       let arr1=[]
//       arr1.push(...numbers)
//       let res=0
//       arr1.forEach((number)=>{
//             res+=number
//       })
//       return res
// }

// let val2=testing1(19,2,30,4,5)
// console.log(val2)

// function testing2(){
//     let arr2=[2,45,67,98]
//     let result=0
//     arr2.forEach((value)=>{
//         result+=value
//     })
//     return result
// }

// let val=testing2()
// console.log(val)

// document.addEventListener('click',e=>{
//     let str=''
//     let eValue= e.target.value
//     str+=eValue
//     if(eValue==='='){
//         console.log(str)
//     }
   
    // else{
        // str=='' ? console.log('You have not entered any value') : console.log(str)
    // }
// })
// function tesitng3(){
// let arr=[]
// document.addEventListener('click',e=>{
//     //   let eVal= e.target.value
//       if(e.target.value!='='){
//         console.log('Pushed Data')
//         arr.push(e.target.value)
//         console.log(arr)
//       }
//       else{
//         btnEqual.addEventListener('click',()=>{
//             let rest= ''
//             arr.forEach((value)=>{
//                 if(value==='+'||'-'||'*'){
//                     console.log('Operator')
//                     rest+=value
//                 }
//                 else{
//                     console.log('Values...')
//                     Number(value)
//                 }
                
//             })
//             console.log(rest)
//         })
//       }
// })
// }

// let mainFnc= (...numbers)=>{
// let arr=[]
// arr.push(...numbers)
// let res=0
// function sum(){
//     arr.forEach((value,index)=>{
//     res+=arr[index]
// })
// console.log(res)
// }
// return sum
// }

// let final= mainFnc(1,2,3)
// final()


//need to make a program first that would push the values onto an empty array
//need to take that array and perform forEach method or reduce method on it depending on what operation we selected

// let fun= document.addEventListener('click',e=>{
// let myArray=[]
// let eValues= e.target.value
// eValues==='' ? console.log(`Its empty`) : myArray.push()
// if(e.target.innerText==='+'){
// return myArray
// }
// })
// console.log(fun)


// btnPlus.addEventListener('click',e=>{
//     let eValus= Number(e.target.value)
//     console.log(eValus)
// })


// let testing4= (e)=>{
//     console.log(e)
// }

// btnEqual.addEventListener('click',testing4)

function mainFun(){
let arr=[]
let res=0
document.addEventListener('click',e=>{
    let eVal= e.target.value
    if(eVal==='+' || eVal==='-' || eVal==='*' || eVal==='/' || eVal==='='){
        console.log(`%cYou clicked on a  %c${eVal} %cOperator`,"font-family:sans-serif","font-weight:bolder;font-size:30px;color:indigo","font-family:sans-serif")
    }
    else{
        eVal= Number(e.target.value)
        arr.push(eVal)
        console.log(arr)
    }
})


btnPlus.addEventListener('click',e=>{
    arr.forEach((values,index)=>{
    res+= values
    })
    console.log(`%cThe sum of ${arr.length} numbers is:  %c${res}`,"color:seagreen;font-family:sans-serif;font-weight:bold","color:grey;font-family:sans-serif;text-align:center")
    arr=[]
})

btnMinus.addEventListener('click',e=>{
    
    arr.forEach((values,index)=>{
    if(arr[index]===arr[0] && res===0){
    res= arr[0]
    }
    else{
        res-= values
    }
})
    console.log(`%cThe subtraction of ${arr.length} numbers is:  %c${res}`,"color:red;font-family:sans-serif;font-weight:bold","color:grey;font-family:sans-serif;text-align:center")
    arr=[]
})

btnMultiply.addEventListener('click',e=>{
    
    arr.forEach((values,index)=>{
    if(res===0){
        res= res+1
        res= res*values
    }
    else{
        res= res*values
    }
    })
    console.log(`%cThe product of ${arr.length} numbers is:  %c${res}`,"color:orange;font-family:sans-serif;font-weight:bold","color:grey;font-family:sans-serif;text-align:center")
    arr=[]
})

btnEqual.addEventListener('click',e=>{

    console.log(`%cThe final computed value by calculator is:  %c${res}`,"color:cyan;font-family:sans-serif;font-weight:bold","color:grey;font-family:sans-serif;text-align:center;font-size:50px")
})

}
mainFun()
//==================//
//Sum 
// btnPlus.addEventListener('click',sumRes)

// function sumRes(){    
// let myArray=[1,4,6,7]
// const sumResult= myArray.reduce((sumValue,values)=>{
//         return values+sumValue
// },0)
// console.log(`%cThe sum of ${myArray.length} numbers is:  %c${sumResult}`,"color:seagreen;font-family:sans-serif;text-align:center;font-weight:bold","color:grey;font-family:sans-serif;font-size:50px;text-align:center")
//     myArray=[]
// }

//Subtraction
// btnMinus.addEventListener('click',subtractionRes)

// function subtractionRes(){    
//     let myArray=[1,4,6,7]

//     let res=0
//     myArray.forEach((values,index)=>{
//     if(myArray[index]===myArray[0]){
//     res= myArray[0]
//     }
//     else{
//         res-= values
//     }
// })
//     console.log(`%cThe subtraction of ${myArray.length} numbers is:  %c${res}`,"color:red;font-family:sans-serif;text-align:center;font-weight:bold","color:grey;font-family:sans-serif;font-size:50px;text-align:center")
//     arr=[]
// }
//=====extra============

// function subtractionRes(){    
// let myArray=[1,4,6,7]
// const subtractionResult= myArray.reduce((subtractionValue,values)=>{
//     if(myArray===myArray[0]){
//         console.log('index is 0')
//         return values-subtractionValue
//     }
//     else{
//         console.log('index is other than 0')
//         return subtractionValue-values
//     }
// },0)
// console.log(`%cThe subtraction of ${myArray.length} numbers is:  %c${subtractionResult}`,"color:red;font-family:sans-serif;text-align:center;font-weight:bold","color:grey;font-family:sans-serif;font-size:50px;text-align:center")
//     myArray=[]
// }

//Multiplication
// btnMultiply.addEventListener('click',multiplicationRes)

// function multiplicationRes(){    
// let myArray=[1,4,6,7]
// const multiplicationResult= myArray.reduce((multiplicationValue,values)=>{
//         return values*multiplicationValue
// },1)
// console.log(`%cThe multiplication of ${myArray.length} numbers is:  %c${multiplicationResult}`,"color:orange;font-family:sans-serif;text-align:center;font-weight:bold","color:grey;font-family:sans-serif;font-size:50px;text-align:center")
//     myArray=[]
// }

//Division
// btnDivide.addEventListener('click',divisionRes)

// function divisionRes(){    
// let myArray=[1,4,6,7]
// const divideResult= myArray.reduce((divideValue,values)=>{
//         return values/divideValue
// },1)
// console.log(`%cThe division of ${myArray.length} numbers is:  %c${divideResult}`,"color:yellow;font-family:sans-serif;text-align:center;font-weight:bold","color:grey;font-family:sans-serif;font-size:50px;text-align:center")
//     myArray=[]
// }



// let result=0
// let array=[1,2,3,4]

// btnPlus.addEventListener('click',e=>{
//      array.forEach((value,index)=>{
//         return result+=value
//     })
//     console.log(result)
// })
// btnMultiply.addEventListener('click',e=>{
//       array.forEach((value,index)=>{
//         if(array[index]===index[0]){
//            result= result+1
//         }
//         else{
//         return result*=value
//         }
//     })
//     console.log(result)
// })

// let arr=[]
// document.addEventListener('click',e=>{
//     let eVal= e.target.value
//     if(eVal==='+' && arr!=[]){
//         console.log(`${Number(arr.join(''))}`)
//         arr=[]
//     }
//     else if(eVal==='=' && arr!=[]){
//         console.log(`${Number(arr.join(''))} ${eVal}`)
//     }
//     else{
//         arr.push(eVal)
//     }
//     function sumResult(){
//         console.log(arr)
//         let sumTotal=arr.reduce((sumTotal,value)=>{
//             return value+sumTotal
//         },0)
//         console.log(sumTotal)
//     }
// })










