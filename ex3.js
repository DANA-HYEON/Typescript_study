//union타입
var 회원들 = [1, "2", 3]; //숫자배열 또는 문자배열
//let 회원들 : number | string[] = [1,2,3]; -> 숫자 또는 문자배열
var 옵젝트 = { a: 123 };
//any타입 : 타입실드 해제문법(타입관련 버그 안잡아줌)
var 애니 = 12;
//unknown타입 : any랑 똑같음(모든 자료형 허용)
//any보다 훨씬 안전함
var 언노운 = 123;
// let typeTestForUnknown :string = 언노운; //에러발생
var typeTestForAny = 애니; //에러안남
