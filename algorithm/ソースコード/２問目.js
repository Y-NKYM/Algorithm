n = 20001
let floorResult = 0;
function sum(a, b, c){
    return ((a*b)/c);
}

let result = 0;
function cal(n){
    for(let i = 1; i<=n; i+=3){
        result += sum(i, i+1, i+2);
    }
    return result;
}
floorResult  = Math.floor(cal(n))
console.log(floorResult)
