//015: 最大公約数
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

//016: 複数の数での最大公約数
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

///017: 最小公倍数
function fact(n){
    let array = []
    for(let i = 2; true; i++){
        if(n!=1){
            while(n%i==0){
                n /= i
                array.push(i);
            }
        } else {
            break;
        }
    }
    return array
}

function fact(n){
    let array = []
    for(let i = 2; true; i++){
        if(n!=1){
            while(n%i==0){
                n /= i
                array.push(i);
            }
        } else {
            break;
        }
    }
    return array
}

function LCM(a, b){
    let lcm1 = fact(a);
    let lcm2 = fact(b);
    let array = [];
    for(let i=0; i<lcm1.length; i++){
        let flag = false;
        for(let j=0; j<=lcm2.length; j++){
            if(lcm1[i]==lcm2[j]){
                array.push(lcm2[j])
                lcm2.splice(j, 1);
                if (j > 0) {
                    j--
                }
                break;
            }
            flag = true
        }
        if(flag){
            array.push(lcm1[i])
        }
    }
    array = array.concat(lcm2)
    let sum = 1;
    for(let i = 0; i<array.length; i++){
        sum *= array[i]
    }
    console.log(array)
    return sum
}
console.log(LCM(14, 16));

//017: 複数の数での最小公倍数
function fact(n){
    let array = []
    for(let i = 2; true; i++){
        if(n!=1){
            while(n%i==0){
                n /= i
                array.push(i);
            }
        } else {
            break;
        }
    }
    return array
}

function LCM(a, b){
    let lcm1 = fact(a);
    let lcm2 = fact(b);
    let array = [];
    for(let i=0; i<lcm1.length; i++){
        let flag = false;
        for(let j=0; j<=lcm2.length; j++){
            if(lcm1[i]==lcm2[j]){
                array.push(lcm2[j])
                lcm2.splice(j, 1);
                if (j > 0) {
                    j--
                }
                break;
            }
            flag = true
        }
        if(flag){
            array.push(lcm1[i])
        }
    }
    array = array.concat(lcm2)
    let sum = 1;
    for(let i = 0; i<array.length; i++){
        sum *= array[i]
    }
    console.log(array)
    return sum
}
console.log(LCM(14, 16));

function multiLCM(){
    let list = [];
    for(let i=0; i<arguments.length; i++){
        list.push(arguments[i])
    }
    lcd = list[0];
    for (let i = 0; i<list.length; i++){
        console.log(lcd, list[i])
        lcd = LCM(lcd, list[i]);
        
    }
    return lcd;
}
console.log(multiLCM(12, 18, 14));