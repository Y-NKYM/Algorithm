//素数判定
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