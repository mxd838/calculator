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
let operand1 = ''
let sign = ''
let operand2 = ''


// Functions
// -- after the calculcation (precisely, after the sign equal inputed), reset the 3 variables to ''


// Choose operation
const chooseOperation = () => {
    let result
    switch(sign){
        case '+':
            result = add(Number(operand1), Number(operand2))
            break
        case '-':
            result = substract(Number(operand1), Number(operand2))
            break
        case '*':
            result = multiply(Number(operand1), Number(operand2))
            break
        case '÷':
            result = divide(Number(operand1), Number(operand2))
            break
        default:
            console.log('Operation not allowed')
    }
    return result
}

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
// Multiply
const multiply = (nb1, nb2) => {
    return nb1 * nb2
}
// Percentage
// Display
const showOperation = (input) => {
    display.innerText += input
}



// Event listeners
// -- set the operands and sign to the user inputs 
// -- call the functions to convert to numbers, calculate and display
numbers.forEach( number => {
    number.addEventListener('click', ()=> {

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
        if (modification.innerText === '='){
           if ( operand1.length !== 0 && sign.length !== 0 && operand2.length !== 0){
                display.innerHTML = chooseOperation()
                operand1 = ''
                sign = ''
                operand2 = ''
           }
        }
    })
})

