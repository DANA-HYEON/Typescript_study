//let 동물 :string | number | undefined;

//대문자로 시작해야함
type Animal = string | number | undefined; //type alias(별칭) 타입변수
let 동물 :Animal = 123;

//readonly 속성
type Girlfriend = {
    readonly name : String
}

const 여친 :Girlfriend = {
    name : '엠버'
}

여친.name = "유라" //애러발생, 다만 에디터에서만 에러가 나고 실제 js는 실행이 가능함...

//타입변수는 union type으로 합치기 가능
type Name = string;
type Age = number;
type Person = Name | Age; //union type

//&연산자로 object타입 합치기
type PositionX = {x : number};
type PositionY = {y : number};
type newType = PositionX & PositionY; //{x:number, y:number};
let positoin : newType = {x:10 , y:20};

//Q1
type 별칭1 = {x : number};
type 별칭2 = {x : number};
type 새로운별칭 = 별칭1 & 별칭2;
let test : 새로운별칭 = {x : 10};

//Q2
type Q2 = {
    color? : string,
    size : number,
    readonly position : number[]
}

//Q3
type Q3 = { name : string, phone : number, email : string };