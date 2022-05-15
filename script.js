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
const display = document.querySelector('.display')

// Variables
// -- inputs : operand1, operator, operand2
let operand1 = ''
let sign = ''
let operand2 = ''


// Functions
// -- after the calculcation (precisely, after the sign equal inputed), reset the 3 variables to undefined
// Add
// Substract
// Divide
// -- display.innerHTML += number.innerText
// Multiply
// Percentage
// Display
// Convert string to number




// Event listeners
// -- set the operands and sign to the user inputs 
// -- call the functions to convert to numbers, calculate and display
numbers.forEach( number => {
    number.addEventListener('click', ()=> {
        console.log(number.innerText)
        // if operand1.length = 0, set the input as first digit
        // if not, concate the next inputs as the following digits
    })
})

operators.forEach( operator => {
    operator.addEventListener('click', ()=> {
        console.log(operator.innerText)
        display.innerHTML += operator.innerText
    })
})

modifications.forEach( modification => {
    modification.addEventListener('click', ()=> {
        console.log(modification.innerText)
        display.innerHTML += modification.innerText
    })
})

