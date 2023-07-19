//interface 문법
interface Student {name : string};
// interface Teacher {name : string, age : number};
//복사해 달라는 뜻
interface Teacher extends Student {age:number}; //extends 문법

let 학생 : Student = {name : "kim"};
let 선생 : Teacher = {name : "kim", age : 20};

//type alias
type Animal2 = {name : string};
//두 타입을 전부 만족하는 타입이라는 뜻
type Cat = {age :number} & Animal2 //&기호(intersection type)

let 고양이:Cat = {name:"후추", age : 4};

//Q1
interface Proudct {brand:string, serialNumber:number, model:string[]}
//Q2
interface Cart{product:string,price:number};
let 장바구니 :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ];
console.log(장바구니)
//Q3
interface NewCart extends Cart {card:boolean};
//Q4
interface Calc{
    plus : (a:number, b:number) => number, 
    minus:(a:number, b:number)=>number
}

let calc:Calc = {
    plus(a,b){
        return a+b;
    },
    minus(a,b){
        return a-b
    }
}