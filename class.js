//class 옛날 문법
function 기계(q,w){
    this.q = q;
    this.w = w;
}

var nunu = new 기계('consume','strike');

//class 최신 문법
class Hero{
    constructor(q,w){
        this.q = q,
        this.w = w
    }
}

let dana = new Hero('now', 'snow');