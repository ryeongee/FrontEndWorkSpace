export class Calculator {
    constructor() {
        this.clear();
    }

    Calc(a, b, op){
        switch(op){
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
            case '×':
            case 'x':
                return a * b;
            case '÷':
            case '/':
                return a / b;
            case '%':
                return a % b;
        }
    }

    appendNumber(number) {
        //check number of 0 in Content > 1 -> just 0
        if (this.Content === '0'){
            this.Content = this.Content.slice(0,this.Content.length-1);
        }
        this.Content += number;
    }

    updateNumber(){
    /* update Content, if you have two operators and two contents. 
       but if you have only one content, just only update first content.*/
        let cont = this.Content;
        let op = this.displayOperator.pop();
        let temp = cont.split(op);
        if (temp[1] ===""){
            this.Content = temp[0];
        }
        else{
            cont = this.Calc(Number(temp[0]), Number(temp[1]), op);
            if (String(cont).indexOf(".") !== -1){
                cont = cont.toFixed(5);
            }
            this.Content = cont;
        }
    }

    printNumber(){
        console.log(this.Content);
    }

    appendOperator(operator) {
        this.displayOperator.unshift(operator);
        /*print Number, if come out next operator */
        if (this.displayOperator.length === 2){
            this.updateNumber();
            this.printNumber();
        }
        this.Content += operator;
    }

    checkRemainCalc(){
        /*Update Number, if Remain operator, else Do nothing */
        if (this.displayOperator.length === 1){
            this.updateNumber();
        }
        // if (this.Content === ""){
        //     this.Content = '0';
        // }
    }

    clear(){
        this.Content = '0';
        this.displayContent= 0;
        this.displayElement = 0;
        this.displayOperator = [];
    }
}
 