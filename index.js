//이 변수엔 string(문자) type만 들어올 수 있다.
var 스트링 = "kim";
var 넘버 = 123;
var 불린 = true;
var 널 = null;
var 언디파인트 = undefined;
var 배열 = ["kim", "park"];
var 오브젝트 = { name: "kim" };
var 오브젝트2 = {}; //물음표 표시를 넣으면 name속성은 옵션이라는 뜻.
//string, number, boolean, null, undefined, bigint, [], {} 등...
//문자나 숫자 둘 다 가능(union타입)
var 이름 = "kim";
var 이상형 = 123;
//함수도 타입지정 가능
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var dana = { name: "kim" };
