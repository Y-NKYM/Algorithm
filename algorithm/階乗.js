//5 → 5*4*3*2*1

//階乗（Factorial）
function factorial(n){
    let sum = 1;
    for(let i = n; i>0; i--){
        sum *= i
    }
    return sum;
}
console.log(factorial(5));

//階乗（Factorial）・再帰（Recursion）
function fact(n){
    if(n==0){  //n==1でも同じ結果
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(5));