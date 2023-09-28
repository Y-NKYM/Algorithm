//001
function FruitSum(n){
    const apple = 5;
    const orange = n;
    return apple + orange;
}
console.log(FruitSum(3));

//002
function Sum(a1, a2, a3){
    return a1+a2+a3;
}
console.log(Sum(3,5,7));

function Sum2(){
    let sum = 0;
    for (let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(Sum2(3,5,7));

//003
function Sum3(num){
    let sum = 0;
    for (let i=1; i<num+1; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(Sum3(10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//004
function Times(a1, a2, a3){
    return a1*a2*a3;
}
console.log(Times(3,5,7));

function Times2(){
    let sum = 1;
    for (let i=0; i<arguments.length; i++){
        sum *= arguments[i];
    }
    return sum;
}
console.log(Times2(2, 2, 8));