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

//011.25:エラトステネスの篩（ふるい）
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
            for(let j = i+1; j<=n; j++){
                if(j%i == 0){
                    //console.log(false)
                    array[j] = false;
                }
            }
        }
    }
    console.log(array)
    let primeArray = [];
    for(let i = 0; i<array.length; i++){
        if(array[i]){
            primeArray.push(i);
        }
    }
    return primeArray;
}
console.log(prime(10))

//011.5:上記の余分な配列要素無しバージョン
function prime(n){
    let array = [];
    for(let i = 0; i<n; i++){
        array.push(true);
    }
    for(let i = 1; i<n; i++){  //true false
        if(array[i]){
            for(let x = 2; x<n; x++){  //割る数
                for(let y = x+1; y<=n; y++){ //1~100
                    if(y%x==0){
                        console.log(y, "/", x)
                        array[y-1] = false;
                    }
                }
            }
        }
    }
    console.log(array)
    let primeArray = [];
    for(let i = 0; i<n; i++){
        if(array[i]){
            primeArray.push(i+1)
        }
    }
    return primeArray;
}
console.log(prime(10))
