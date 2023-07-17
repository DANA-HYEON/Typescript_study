var str = "hi";
var num = 10;
var isLoggedIn = false;
var arr = [1, 2, 3];
//제네릭 사용
var arr2 = [1, 2, 3];
//tuple
var arr3 = ["hi", 10];
//enum
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 0] = "Capt";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Thor"] = 2] = "Thor";
})(Avengers || (Avengers = {}));
;
var hero = Avengers.Capt;
//enum, 인덱스 번호로도 접근 가능
var Avengers2;
(function (Avengers2) {
    Avengers2[Avengers2["Capt"] = 0] = "Capt";
    Avengers2[Avengers2["IronMan"] = 1] = "IronMan";
    Avengers2[Avengers2["Thor"] = 2] = "Thor";
})(Avengers2 || (Avengers2 = {}));
;
var h = Avengers2[0];
// 이넘의 인덱스를 사용자 편의로 변경하여 사용할 수도 있음
var Avengers3;
(function (Avengers3) {
    Avengers3[Avengers3["Capt"] = 2] = "Capt";
    Avengers3[Avengers3["IronMan"] = 3] = "IronMan";
    Avengers3[Avengers3["Thor"] = 4] = "Thor";
})(Avengers3 || (Avengers3 = {}));
;
var hero3 = Avengers[2]; // Capt
var hero4 = Avengers[4]; // Thor
//any
var str1 = 'hi';
var num1 = 10;
var arr1 = ['a', 2, true];
//void
function printSomething() {
    console.log('sth');
}
function returnNothing() {
    return;
}
//never
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd() {
    while (true) {
    }
}
//Q1
var dahyeon = "dana";
var age = 28;
var hometown = "서울";
var myStyle = { title: "존재만으로", singer: "원슈타인" };
//Q3
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
