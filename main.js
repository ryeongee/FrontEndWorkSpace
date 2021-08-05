import { Calculator } from './Calculator.js'
import { createInterface } from 'readline'

/*Ready to input*/
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
const calculator = new Calculator();
rl.on('line', (input) => {
    var elements = element.getElementsByClassName(names);
    switch(input){
        case '+':
        case '-':
        case '*':
        case '/':
            calculator.appendOperator(input);
            calculator.updateDisplay();
            break;
        case 'ac':
            calculator.clear();
            console.log(calculator.displayElement);
            break;
        case '=':
            console.log('equals');
            calculator.checkRemainCalc();
            calculator.printNumber();
            calculator.updateDisplay();
            break;
        default:
            calculator.appendNumber(input);
            break;
    }
});
