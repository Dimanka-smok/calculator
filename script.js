let btnAdd = document.querySelector(".add")
let btnSub = document.querySelector(".sub")
let btnMu = document.querySelector(".multi")
let btnDiv = document.querySelector(".div")
let input1 = document.querySelector(".num1")
let input2 = document.querySelector(".num2")
let answer = document.querySelector("span")

btnAdd.addEventListener("click", Addition )
btnSub.addEventListener("click", Subtract )
btnMu.addEventListener("click", Multiplay)
btnDiv.addEventListener("click", Divide)


function Addition(){
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)
    let result = `${num1} + ${num2} = ${num1+num2}`
    answer.innerHTML=result
}

function Subtract(){
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)
    let result = `${num1} —  ${num2} = ${num1-num2}`
    answer.innerHTML=result
}

function Multiplay(){
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)
    let result = `${num1} × ${num2} = ${num1*num2}`
    answer.innerHTML=result
} 


function Divide(){
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)
    let result = `${num1} ÷ ${num2} = ${num1/num2}`
    answer.innerHTML=result
}