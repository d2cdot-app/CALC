var input = 0; //入力中数字保存変数
var result =0;//計算結果保存変数
var savaCalc =0;//選択された四則演算ボタン保存変数

function calcTest(X){
  if(isNaN(X)==false){
    input =(input*10) + X;
  form.text.value=input;
  }else{
    if(X== '+'){
      result =result+input;
      input = 0;
      savaCalc ="+";
      form.text.value=result + "aaa";
    }else {
      if(X== '='){
      result =result+input;
      input = 0;
      form.text.value=result;
      }
    }
    }
  }
