//이 변수엔 string(문자) type만 들어올 수 있다.
let 스트링 : string = "kim";
let 넘버 : number = 123;
let 불린 : boolean = true;
let 널 : null = null;
let 언디파인트 : undefined = undefined;
let 배열 : string[] = ["kim","park"];
let 오브젝트 : {name : string} = {name : "kim"};
let 오브젝트2 : {name? : string} = {}; //물음표 표시를 넣으면 name속성은 옵션이라는 뜻.
//string, number, boolean, null, undefined, bigint, [], {} 등...

//문자나 숫자 둘 다 가능(union타입)
let 이름 : string | number = "kim";

//타입을 변수에 담아서 사용 가능
//이런 경우 첫 문자는 대문자로 
type Mytype = string | number;
let 이상형 : Mytype = 123;

//함수도 타입지정 가능
function 함수(x : number) : number{
 return x*2;
}

type Member = [number,boolean];
let john:Member = [123,true];

type Member2 = {
    [key:string] : string,
}
let dana:Member2 = {name : "kim"};
