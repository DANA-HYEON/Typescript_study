var 회원정보 = {
    name: "kim",
    age: 10,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () { console.log("님"); },
};
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    return Number(x.replaceAll("-", ""));
};
var filter = function (phone, func1, func2) {
    var resultCut = func1(phone);
    var resultDash = func2(resultCut);
    console.log(resultDash);
};
filter('010-1111-2222', cutZero, removeDash);
