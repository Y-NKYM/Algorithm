//nCr 
//N個の中からR個選んだ時は何通りある？
function nCr(n, r){
    let topNum = 1;
    let bottomNum = 1;
    let result = 0
    for(let i=n; i>n-r; i--){
    console.log(i)
    topNum *= i;
    }
    for(let j=r; j>0; j--){
        console.log(j)
        bottomNum *= j;
    }
    result = topNum/bottomNum;
    console.log(result)
}
nCr(6, 2);