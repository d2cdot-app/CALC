var input = 0;
var result = 0;
var saveCalc =0;
var a=0;

function execCalc(value01,value02,operator){
  switch (operator) {
    // case  0:
    //   value01 = value02;
    //   break;
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
    result = execCalc(result,input,saveCalc);
    form.text.value = result;
    a=1;

  }else if(X=='C'){
    input =0;
    result =0;
    savaCalc =0;
  }else{
    if(saveCalc != 0 && a==0){
        result = execCalc(result,input,saveCalc);
        form.text.value=result;
    }else{
      result = input;
      a=0;
    }
    input = 0;
    saveCalc = X;
  }

}
