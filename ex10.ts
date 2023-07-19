//interface 문법
interface Student {name : string};
// interface Teacher {name : string, age : number};
interface Teacher extends Student {age:number}; //extends 문법

let 학생 : Student = {name : "kim"};
let 선생 : Teacher = {name : "kim", age : 20};

//type alias
type Animal2 = {name : string};
type Cat = {age :number} & Animal2 //&기호(intersection type)

let 고양이:Cat = {name:"후추", age : 4};