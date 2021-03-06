// mvp : gestion d'une seule operation

// v2 : gestion d'un nombre indef d'operations 
// en remplacant a chaque fois operande 1 par le resultat de la precedente operation
// -- si 3 variables (operand1, sign, operand2) non vides, et input nouveau signe
// -- remplace operand1 par result operation
// -- display cette operation sur nouvelle ligne

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
let resultDisplayed = false



// Functions

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
            if(Number(operand2) === 0){
                result = undefined
            } else {
                result = divide(Number(operand1), Number(operand2))
            }
            break
        case '%':
            result = percentage(Number(operand1),Number(operand2))
            break
        default:
            result = undefined
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
        return nb1 / nb2
}
// Multiply
const multiply = (nb1, nb2) => {
    return nb1 * nb2
}
// Percentage
const percentage = (nb1, nb2) => {
    return nb2 * (nb1/100)
}
// Display
const showOperation = (input) => {
    display.innerText += input
}



// Event listeners
// -- set the operands and sign to the user inputs 
// -- call the functions to convert to numbers, calculate and display
numbers.forEach( number => {
    number.addEventListener('click', ()=> {

        if(resultDisplayed && operand1.length === 0){
            display.innerText = ''
        }

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

        if (resultDisplayed && operand1.length === 0){
            return
        }
        
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
   
        if (modification.innerText === '.'){
            if (sign.length === 0 && !operand1.includes('.')){
                operand1 += '.'
                display.innerText += '.'
            } 
            else if (sign.length !== 0 && !operand2.includes('.')){
                operand2 += '.'
                display.innerText += '.'
            }
            
        }
        else if (modification.innerText === 'clear'){
            display.innerText = ''
            operand1 = ''
            sign = ''
            operand2 = ''
            resultDisplayed = false
        }
        else if (modification.innerText === 'del'){
            if (operand1.length === 0) {
                return
            }
            if (sign.length === 0 && operand1.length !== 0){
                 operand1 = operand1.slice(0,-1)
            }
            else if (operand2.length === 0){
                sign = ''
            } 
            else {
                operand2 = operand2.slice(0,-1)
            }
            display.innerText = display.innerText.slice(0,-1)
        }
        else if (modification.innerText === '='){
           if ( operand1.length !== 0 && sign.length !== 0 && operand2.length !== 0){
                const operationReturn = chooseOperation()
                if (operationReturn === undefined){
                    display.innerText = 'Operation not allowed'
                } else {
                    display.innerHTML = chooseOperation()
                }
                operand1 = ''
                sign = ''
                operand2 = ''
                resultDisplayed = true
           }
        }
    })
})

