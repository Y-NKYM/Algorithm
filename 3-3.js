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
