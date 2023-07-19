//Q1
let img = document.querySelector("#image");
if(img instanceof HTMLImageElement){
    img.src = "new.jpg";
}

//Q2
let link = document.querySelectorAll(".link");
link.forEach((a => {
    if(a instanceof HTMLAnchorElement){
        a.href = "https://kakao.com";
    }
}))
