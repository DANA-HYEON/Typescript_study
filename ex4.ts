
//파라미터가 없을수도 있음
//그때는 뒤에 ? 를 붙여준다
function 함수(x?:number) : void {

}

//? 표시는 | undefined와 동일한 뜻임
function 함수2(x:number | undefined) : void {

}

함수();

function checkWeddingRate(income:number, house:boolean, charm:string) : string | void{
	let incomeScore = income/10000;
	let houseScore = house ? 500 : 0;
	let charmScore = charm === "상" ? 100 : 0;
	if(incomeScore + houseScore + charmScore >= 600 ) return "결혼가능";
}

checkWeddingRate(700,false,"중");
checkWeddingRate(100,false,"상");

//Q1.
function stringToNumber(arr : (string | number)[]) : number[]{
    return arr.map((a) => Number(a));
}

//Q2.
function getLastSubject(obj:{subject : string | string[]}) : string{
    let answer : string = '';
    if(typeof obj.subject === "object"){
        answer = obj.subject[obj.subject.length-1];
    }else{
        answer = obj.subject;
    }
    console.log(answer);
    return answer;
}

getLastSubject({subject : ['science', 'english'] });
getLastSubject({ subject : 'math' });
getLastSubject({ hello : 'hi' });
stringToNumber( ['1', 2, '3']);