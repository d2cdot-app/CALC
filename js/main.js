var a =0;//四則演算ボタン保存変数
var b =0;//計算結果保存変数

function calcTest(X){
  if(isNaN(X)==true){  //押されたボタンが四則演算だったら
    a=X;
}else if(isNaN(X)==false){ //押されたボタンが数字で
    if(isNaN(a)==true){  //保存されているものが四則演算だったら
    b=b+X;
    a=0;
    }else if(isNaN(a)==false){ //保存されているのが数字だったら
    b=(a*10)+ X;
    a=X;
    }
    alert(b);
}
}

// var a =0;//四則演算ボタン保存変数
// var b =0;//計算結果保存変数
//
// function calcTest(X){
//   if(isNaN(X)==true){  //押されたボタンが四則演算だったら
//     a=X;
//   }else if(isNaN(X)==false && isNaN(a)==true){ //押されたボタンが数字で
//     b=a+X;
//     a=0;
//   }else if(isNaN(X)==false && isNaN(a)==false){ //保存されているのが数字だったら
//     b=(a*10)+ X;
//     }
//     alert(b);
// }
