// queryselector all pour tous les
// - data-modif
// - data-operation
// - data-number

// forEach - listener pour chq elt de ces listes
// 3 variables : operande 1, operande 2, operation
// mvp : gestion d'une seule operation

// v2 : gestion d'un nombre indef d'operations 
// en remplacant a chaque fois operande 1 par le resultat de la precedente operation

// warning : si script charge avant rendu page
// nodelist renvoie 0 
// ne pas oublier le defer

// Elements
const numbers = document.querySelectorAll('.button[data-number]')
const operators = document.querySelectorAll('.button[data-operator]')
const modifications = document.querySelectorAll('.button[data-modif]')
const display = document.querySelector('display')

// Variables
let operands = [0,0]


// Functions
// Add
// Substract
// Divide
// Multiply
// Percentage



// Event listeners
numbers.forEach( number => {
    number.addEventListener('click', ()=> {
        console.log(number.innerText)
        console.log(typeof number.innerText)

    })
})

operators.forEach( operator => {
    operator.addEventListener('click', ()=> {
        console.log(operator.innerText)
    })
})

modifications.forEach( modification => {
    modification.addEventListener('click', ()=> {
        console.log(modification.innerText)
    })
})

