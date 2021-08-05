import { Calculator } from "./Calculator.js";
const item = document.querySelectorAll('li')
const counter = document.getElementsByClassName('show-result')

class webCalculator extends Calculator{
    showDisplayContent(){
        counter[0].innerText = this.displayContent
    }
    updateDisplayContent() {
        if (this.displayOperator.length > 0){
            let temp = this.Content.split(this.displayOperator);
            this.displayContent = Number(temp[1]);
        }
        else{
            this.displayContent = Number(this.Content);
        }
    }
    changeSign(){
        this.displayContent *= -1;
        this.Content = String(this.displayContent);
    }
    appendOperator(operator) {
        this.displayOperator.unshift(operator);
        /*print Number, if come out next operator */
        if (this.displayOperator.length === 2){
            this.updateNumber();
            // this.updateDisplayContent();
            this.printNumber();
            counter[0].innerHTML = this.Content;
        }
        this.Content += operator;
    }
    changeACtoC(){
        item[0].innerHTML = 'C';
    }
    clear(){
        this.Content = '0';
        this.displayContent= 0;
        this.displayElement = 0;
        this.displayOperator = [];
        item[0].innerHTML = 'AC';
    }
}

const myWebCalculator = new webCalculator();
for(let i = 0; i<item.length; i++){
    item[i].addEventListener('click', function (){
        switch(item[i].innerHTML){
            case '+/-':
                myWebCalculator.changeSign();
                myWebCalculator.printNumber();
                myWebCalculator.showDisplayContent();                
                break;
            case '%':
            case '+':
            case '-':
            case '×':
            case '÷':
                myWebCalculator.appendOperator(item[i].innerHTML);
                myWebCalculator.updateDisplayContent()
                break;
            case 'AC':
            case 'C':
                myWebCalculator.clear();
                myWebCalculator.printNumber();
                myWebCalculator.showDisplayContent();
                break;
            case '=':
                myWebCalculator.checkRemainCalc();
                myWebCalculator.updateDisplayContent();
                myWebCalculator.printNumber();
                myWebCalculator.showDisplayContent();
                break;
            default:
                myWebCalculator.changeACtoC();
                myWebCalculator.appendNumber(item[i].innerHTML);
                myWebCalculator.updateDisplayContent();
                myWebCalculator.showDisplayContent();
                break;
        }
    })
}