//006
function cal(n){
    return 2*n+3;
}
console.log(cal(100));

//007
function count(n, x, y){
    let count = 0;
    for(let i = 1; i<=n; i++){
        if(i%x==0 || i%y==0){
            count += 1;
        }
    }
    return count;
}
console.log(count(15, 3, 5));

//008
function bruteForce(n, s){
    let count = 0;
    for(let i = n; i>0; i--){
        for(let j = n; j>0; j--){
            if(i+j<=s){
                console.log(i, j)
                count += 1;
            }
        }
    }
    return count;
}
console.log(bruteForce(3, 4));

//008.5 (重なり無し)
function bruteForce(n, s){
    let count = 0;
    for(let i = n; i>0; i--){
        for(let j = 1; j<=i; j++){
            if(i+j<=s){
                count += 1;
            }
        }
    }
    return count;
}
console.log(bruteForce(3, 4));

//009
function brute(n, s){
    let flag = false;
    let array = [];
    for(let i = 2; i<n+2; i++){
        array.push(arguments[i]);
    }
    console.log(array);
    for(let x=0; x<n; x++){
        for(let y=x+1; y<n; y++){
            console.log(array[x],"+", array[y]);
            if(array[x]+array[y]==s){
                flag = true;
            }
        }
    }
    let result = "";
    result = flag ? "yes":"no";
    // if(flag){
    //     return("Yes");
    // } else {
    //     return("No");
    // }
    return result;
}
console.log(brute(5, 11, 8, 5, 9, 7, 4));
