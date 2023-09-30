//012
function isPrime(n){
    let flag = true
    for(let i=2; i<n/2; i++){
        console.log(i)
        if(n%i == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        return "Yes"
    } else {
        return "No"
    }
}
console.log(isPrime(13));

//013: 約数
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

//014: 素因数分解
function factorization(n){
    let array = []
    for(let i = 2; true; i++){
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

//014: 素因数分解・再帰関数
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