//object 함수에 type alias지정하는 법
type MemberType = {
    name : string,
    age:number,
    plusOne : (x:number) => number,
    changeName : () => void
}

let 회원정보:MemberType  = {
    name : "kim",
    age:10,
    plusOne(x){
        return x+1;
    },
    changeName : ()=> {console.log("님")},
}

//Q2
type CutZero = (x:string) => string;
type RemoveDash = (x:string) => number;

let cutZero : CutZero = (x) => {
    let result = x.replace(/^0+/, "");
    return result
}

let removeDash : RemoveDash = (x) => {
    return Number(x.replaceAll("-",""));
}

//Q3
type FilterType = (phone:string, func1:CutZero, func2 :RemoveDash) => void;

let filter:FilterType = function(phone,func1,func2 ){
    let resultCut = func1(phone);
    let resultDash = func2(resultCut);
    console.log(resultDash);
}

filter('010-1111-2222', cutZero, removeDash);