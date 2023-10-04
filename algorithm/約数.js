//（6 → 1, 2, 3, 6）

//約数
function divisor(n){
    let array = [];
    for(let i=1; i<=n; i++){
        if(n%i == 0){
            array.push(i)
        }
    }
    return array
}
console.log(divisor(12))