var input = 0;
var result = 0;
var saveCalc =0;
var flagEqual=0;
var flagDec =0;


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
    if(flagDec == 0){
      input =(input*10) + X;
    }else{
      input = (X*0.1) + input;
    }
    form.text.value = input;

  }else if(X=='='){
    result = execCalc(result,input,saveCalc);
    form.text.value = result;
    flagEqual=1;
    flagDec =1;

  }else if(X=='C'){
    input =0;
    result =0;
    savaCalc =0;
    flagEqual=0;
    form.text.value = result;

  }else if(X=='.'){
    flagDec =1;

  }else{
    if(saveCalc != 0 && flagEqual==0){
        result = execCalc(result,input,saveCalc);
        form.text.value=result;
        flagDec =1;
    }else{
      result =parseInt(form.text.value);
      flagEqual=0;
      flagDec =0;
    }
    input = 0;
    saveCalc = X;

  }

}
