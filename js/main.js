var input = 0;
var result = 0;
var savaCalc =0;

function execCalc(value01,value02,operator){
  switch (operator) {
    case  0:
      value01 = value02;
      break;
    case '+':
      value01 = value01 + value02;
      break;
    case '-':
      value01 = value01 - value02;
      break;
    case '*':
      value01= value01 * value02;
      break;
    case '/':
      value01 = value01 / value02;
      break;
  }
  return value01;
}

function calc(X){
  if(isNaN(X)==false){
    input =(input*10) + X;
    form.text.value = input;
  }else if(X=='='){
    // result = execCalc(result,input,savaCalc);
    // input = result;
    input = execCalc(result,input,savaCalc);
    savaCalc = 0;
    result = 0;
    form.text.value=input;
  }else{
    result = execCalc(result,input,savaCalc);
    input = 0;
    savaCalc = X;
    form.text.value=result;
  }
}
