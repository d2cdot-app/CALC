var input = ''; //入力中数字保存変数
var result =0;//計算結果保存変数
var savaCalc ='';//選択された四則演算ボタン保存変数

function calc(X){
  if(isNaN(X)==false){
    input =(input*10) + X;
    form.text.value=input;
  }else{
    if(X== '+'){
      if(input!=''){
        result = input;
        input = '';
        savaCalc ="+";
      }
    }else if(X== '-'){
      if(input!=''){
        result = input;
        input = '';
        savaCalc ="-";
      }
    }else if(X== '*'){
      if(input!=''){
        result = input;
        input = '';
        savaCalc ="*";
      }
    }else if(X== '/'){
      if(input!=''){
        result = input;
        input = '';
        savaCalc ="/";
      }
    }else if(X== '='){
        if(input!=''){
          form.text.value=eval(result + savaCalc + input);
          result = form.text.value;
          input = '';
        }
      }else if(X=='C'){
        input = '';
        result = 0;
        savaCalc ='';
        form.text.value=result;
      }
    }
  }
