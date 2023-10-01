//018
function con(){
    let array = [];
    let count = 0;
    for(let i=0; i<arguments.length; i++){
        array.push(arguments[i]);
    }
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]+array[j]==500){
                count +=1;
            }
        }
    }
    return count;
}
console.log(con(100, 300, 400, 400, 200));

//019
function card(){
    let array = [];
    let count = 0;
    for(let i=0; i<arguments.length; i++){
        array.push(arguments[i]);
    }
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] == array[j]){
                count += 1
            }
        }
    }
    return count;
}
console.log(card(1, 3, 2, 1, 1, 2))

//020: 複数の要素から５つ選んで合計値が１０００になる通りは幾つ？
let array = [243, 156, 104, 280, 142, 286, 196, 132, 128, 195, 265, 300, 130];
let count = 0;
for(let a=0; a<array.length; a++){
    for(let b=a+1; b<array.length; b++){
        for(let c=b+1; c<array.length; c++){
            for(let d=c+1; d<array.length; d++){
                for(let e=d+1; e<array.length; e++){
                    if(array[a]+array[b]+array[c]+array[d]+array[e]==1000){
                        count += 1
                    }
                }    
            }
        }
    }
}
console.log(count)

//020: 再帰関数で行う（上手くいかず）
// let count = 0;
// let allcount = 0;
// let array = [1,2,3,4,5,6,7]
// function test(array, n){
//     // if(count == n){
//     //     return;
//     // }
//     //console.log(count)
//     for(let a=0; a<array.length; a++){
//         //console.log(count)
//         console.log(array, count)
//         count += 1
//         test(array.slice(count), n);
//         break;
//     }
// }
// test(array, 5)

//021:nCr
function nCr(n, r){
    let topNum = 1;
    let bottomNum = 1;
    let result = 0
    for(let i=n; i>n-r; i--){  //6, 5
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

//022:
let array1 = [40000, 50000, 20000, 80000, 50000, 30000];
let count1 = 0;
for(let a=0; a<array1.length; a++){
    for(let b=a+1; b<array1.length; b++){
        if(array1[a]+array1[b]== 100000){
            count1 += 1
        }
    }
}
console.log(count1)


