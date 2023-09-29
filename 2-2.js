//005
function sumAll(n){
    let sum = 0;
    for(let i = 1; i < n+1; i++){
        sum += arguments[i];
    }
    return sum%100;
}
console.log(sumAll(10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
