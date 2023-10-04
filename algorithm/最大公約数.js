//最大公約数　GCM＝Greatest Common Measure
function func(a, b){
    let smallNum = 0;
    if(a<b){
        smallNum = a;
        bigNum = b;
    } else {
        smallNum = b;
        bigNum = a;
    }
    let array = [];
    for(let i = 1; i<=smallNum; i++){
        if(smallNum%i==0){
            array.push(i);
        }
    }
    console.log(array);
    for(let i = array.length-1; i>=0; i--){
        if(bigNum%array[i]==0){
            return array[i]
        }
    }
}
console.log(func(123, 777));

//三つ以上での最大公約数
function func(a, b){
    let smallNum = 0;
    if(a<b){
        smallNum = a;
        bigNum = b;
    } else {
        smallNum = b;
        bigNum = a;
    }
    let array = [];
    for(let i = 1; i<=smallNum; i++){
        if(smallNum%i==0){
            array.push(i);
        }
    }
    console.log(array);
    for(let i = array.length-1; i>=0; i--){
        if(bigNum%array[i]==0){
            return array[i]
        }
    }
}

list = [44, 66, 88, 22, 4]
lcd = list[0];
for (let i = 1; i<list.length; i++){
    lcd = func(lcd, list[i]);
}
console.log(lcd);