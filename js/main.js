var input = 0;
var result = 0;
var savaCalc =0;

function calc(X){
  if(isNaN(X)==false){
    input =(input*10) + X;
    form.text.value=input;
  }else{
    switch (savaCalc) {
      case 0:
        result = input;
        break;
      case '+':
        result = result + input;
        break;
      case '-':
        result = result - input;
        break;
      case '*':
        result = result * input;
        break;
      case '/':
        result = result / input;
        break;

    }
    input = 0;
    savaCalc = X;
    form.text.value=result;
  }
}
