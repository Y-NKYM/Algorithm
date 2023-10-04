//10 → 2, 3, 5, 7

//BruteForceループ
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

//エラトステネスの篩
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