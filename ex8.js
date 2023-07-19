//Q1
var img = document.querySelector("#image");
if (img instanceof HTMLImageElement) {
    img.src = "new.jpg";
}
//Q2
var link = document.querySelectorAll(".link");
link.forEach((function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
}));
