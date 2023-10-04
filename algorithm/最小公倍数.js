//最小公倍数 LCM=Least Common Measure

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
console.log(fact(10))

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

//複数の場合以下を上記に追加
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