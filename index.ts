let n :string = "dana";
let a :string[] = ["dana","sehoon"];
let o :{name? : string} = {name : "kim"};

let u : string | number = "kim"; //Union type

type Type = string | number;
let t : Type = 123;

function f(x : number) : number{
    return x * 2;
}

type Member = [number, boolean]; //array에 쓸 수 있는 tuple타입
let john:Member = [123,true];

type MemeberObject = {
    [key:string] : string
}
let group:MemeberObject = {name : "kim", age : "123"};

class User {
    name : string;
    constructor(name:string){
        this.name = name;
    }
}
