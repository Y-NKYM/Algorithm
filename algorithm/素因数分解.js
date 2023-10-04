//100 → 2, 2, 5, 5

//素因数分解
function factorization(n){
    let array = []
    for(let i = 2; i<=n; i++){
        if(n!=1){
            while(n%i==0){
                n /= i
                array.push(i);
            }
        } else {
            break;
        }
    }
    return array
}
console.log(factorization(100));

//素因数分解・再帰
let array = [];
function fact(n){
    if(n==1){
        return;
    }
    for(let i=2; i<=n; i++){
        if(n%i == 0){
            array.push(i);
            n /= i;
            fact(n);
            break;
        }
    }
}
fact(100);