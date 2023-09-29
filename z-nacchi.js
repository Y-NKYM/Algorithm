//リカーシブ（再帰関数）
//フィボナッチ
function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}
console.log(fib(5));


//フィボナッチ・トリボナッチ・テトラナッチ等z-ナっチ対応
function Fib(n, m){
    if (n < m) {
     return 1;
    }
    
    let sum = 0;
    for(let i = m; i > 0; i--){
        sum += Fib(n-i, m);
    }
    return sum;
}
let num = 10;
for(let i = 0; i < num; i++){
    console.log(Fib(i, 3));
}