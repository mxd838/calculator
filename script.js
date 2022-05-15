// queryselector all pour tous les
// - data-modif
// - data-operation
// - data-number

// forEach - listener pour chq elt de ces listes
// 3 variables : operande 1, operande 2, operation
// mvp : gestion d'une seule operation

// v2 : gestion d'un nombre indef d'operations 
// en remplacant a chaque fois operande 1 par le resultat de la precedente operation

// v3 : gestion du clavier

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
const add = (nb1, nb2) => {
    return nb1 + nb2
}
// Substract
const substract = (nb1, nb2) => {
    return nb1 - nb2
}
// Divide
const divide = (nb1, nb2) => {
    if (nb2 !== 0){
        return nb1 / nb2
    }
}
// -- display.innerHTML += number.innerText
// Multiply
const multiply = (nb1, nb2) => {
    return nb1 * nb2
}
// Percentage
// Display
const showOperation = (input) => {
    display.innerText += input
}

const showResult = () => {

}
// Convert string to number
// chooseOperation


// console.log(operand1.length)

// Event listeners
// -- set the operands and sign to the user inputs 
// -- call the functions to convert to numbers, calculate and display
numbers.forEach( number => {
    number.addEventListener('click', ()=> {

        // console.log(number.innerText)
        const digitInput = number.innerText

        showOperation(digitInput)

        if (sign.length !== 0){
            operand2 += digitInput
        } else {
            operand1 += digitInput
        }
    })
})

operators.forEach( operator => {
    operator.addEventListener('click', ()=> {
        
        // Prevent user from inputting multiple operators
        if (sign.length === 0){

            const operatorInput = operator.innerText
            sign = operatorInput
            showOperation(operatorInput)
        }
    })
})

modifications.forEach( modification => {
    modification.addEventListener('click', ()=> {
        // console.log(modification.innerText)
        // different cases :
        // - clear :
        // --- remove all display
        // --- reset all values
        // - del :
        // --- remove the last displayed item
        // - . :
        // --- add the . to the display
        // --- don't display if already a . in the current digit
        // - = :
        // --- call the calculation function
        // --- call the showResult function 
        // --- reset the variables 
    })
})

