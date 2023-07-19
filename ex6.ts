//Q1
type Myway = "가위" | "바위" | "보";
function 가위바위보(x:Myway) : Myway[]{
    return [x,x,x];
}

//as const 문법
var 자료 = {
    name : 'kim'
  } as const
  
  function 내함수(a : 'kim') {
  
  }
  내함수(자료.name)