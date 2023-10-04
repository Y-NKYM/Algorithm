//直角の隣の二編から斜辺を計算：
function pythagoras(a, b){
    sum = a**2 + b**2;
    let result = Math.sqrt(sum);
    return result;
}
console.log(pythagoras(12, 5))

//斜辺と直角の一編から残りの一編を計算：
function pythagoras(a, b){
    let long = 0;
    let short = 0;
    if(a<=b){
        long = b;
        short = a;
    } else {
        long = a;
        short = b
    }
    sum = long**2 - short**2;
    let result = Math.sqrt(sum);
    return result;
}
let result = pythagoras(12, 12);
console.log(result);