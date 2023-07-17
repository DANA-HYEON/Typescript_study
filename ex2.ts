let str: string = "hi";

let num: number = 10;

let isLoggedIn: boolean = false;

let arr: number[] = [1,2,3];

//제네릭 사용
let arr2: Array<number> = [1,2,3]; 

//tuple
let arr3: [string, number] = ["hi", 10]; 

//enum
enum Avengers { Capt, IronMan, Thor }; 
let hero: Avengers = Avengers.Capt;

//enum, 인덱스 번호로도 접근 가능
enum Avengers2 { Capt, IronMan, Thor }; 
let h :string = Avengers2[0];

// 이넘의 인덱스를 사용자 편의로 변경하여 사용할 수도 있음
enum Avengers3 { Capt = 2, IronMan, Thor }; 
let hero3: string = Avengers[2]; // Capt
let hero4: string = Avengers[4]; // Thor

//any
let str1: any = 'hi';
let num1: any = 10;
let arr1: any = ['a', 2, true];

//void
function printSomething(): void {
    console.log('sth');
}
  
function returnNothing(): void {
    return;
}

//never
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd(): never {
    while (true) {
  
    }
  }

//Q1
let dahyeon :string = "dana";
let age :number = 28;
let hometown :string = "서울";

//Q2
type Mysong = {title:string, singer:string};
let myStyle:Mysong = {title:"존재만으로", singer:"원슈타인"};

//Q3
let project : {member:string[], days:number, started:boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }
