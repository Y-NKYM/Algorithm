//010: Factorial
function factorial(n){
    let sum = 1;
    for(let i = n; i>0; i--){
        sum *= i
    }
    return sum;
}
console.log(factorial(5));

//010.5: with Recursion
function fact(n){
    if(n==0){  //n==1でも同じ結果
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(5));

//011: 素数を小さい順に出力
function prime(n){
    let flag = false;
    let array = [];
    let cal = Math.floor(n/2)
    for(let i = 2; i <= n; i++){
        flag = false;
        for(let j=i-1; j>1; j--){
        //for(let j=2; j<Math.floor(i/2); j++){
            console.log(i, j);
            if(i%j==0){
                flag = true;
            }
        }
        if(!flag){
            array.push(i);
        }
    }
    return(array);
}
result = prime(10)
for(let i=0; i<result.length; i++){
    console.log(result[i]);
}

//011.5:エラトステネスの篩（ふるい）
function prime(n){
    let array = [];
    for(let i = 0; i<=n; i++){
        array[i] = true;
    }
    array[0] = false;
    array[1] = false;
    for(let i = 2; i<=n; i++){
        //console.log("array[i]:", array[i], i)
        if(array[i]){
            for(let j = i; j<=n; j++){
                //console.log(j,"/",i);
                if(j <= i){
                    continue;
                }
                else if(j%i == 0){
                    //console.log(false)
                    array[j] = false;
                }
            }
        }
    }
    //console.log(array)
    let primeArray = [];
    for(let i = 0; i<array.length; i++){
        if(array[i]){
            primeArray.push(i);
        }
    }
    return primeArray;
}
console.log(prime(10));
