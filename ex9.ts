class Person2 {
    name:string;
    age:number;
    constructor (name:string, age:number){
      this.name = name;
      this.age = age;
    }
  }

//Q1
class Car{
    model:string;
    price:number;
    constructor(model:string, price:number){
        this.model = model;
        this.price = price;
    }

    tax():number{
        return this.price * 0.1
    }
}
let car1 = new Car('소나타', 3000)
// console.log(car1)

console.log(car1.tax())
//Q2
class Word{
    num:number[];
    str:string[];
    constructor(...param : (number | string)[]){
        let 숫자들 :number[] = [];
        let 문자들 :string[] = [];
    
        param.forEach((i)=>{
          if (typeof i ==='string') {
            문자들.push(i)
          } else {
            숫자들.push(i)
          }
        })
    
        this.num = 숫자들;
        this.str = 문자들;
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num)//[3,5]
console.log(obj.str)//['kim', 'park']