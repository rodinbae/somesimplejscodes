function sumOfNumberss(x){
    var y=5, sum=x+y;
    return sum;
    }


function substractNums(firstNumber, secondNumber){
    var minus = firstNumber - secondNumber;
    document.write("Sonuc:" + minus);
}

var firstNum, secondNum;
var result;

firstNum = Number(prompt("Enter the first number"));
secondNum = Number(prompt("Enter the second number"));
substractNums(firstNum,secondNum);

result=sumOfNumberss;

document.write("The sum of two numbers are: "+result(firstNum));
