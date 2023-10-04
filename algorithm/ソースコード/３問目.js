//解答できていませんが、途中経過です。
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
sort = ["A","B","C","D","E","F","J","K","Q","T","V","W","X","Y","Z"];

let array = [];
let totalArray = [];
for(let a=0; a<alphabet.length; a++){
    array = []
    array.push(alphabet[a])
    for(let b=a+1; b<alphabet.length; b++){
        array.push(alphabet[b])
        for(let c=b+1; c<alphabet.length; c++){
            array.push(alphabet[c])
            for(let d=c+1; d<alphabet.length; d++){
                array.push(alphabet[d])
                for(let e=d+1; e<alphabet.length; e++){
                    array.push(alphabet[e])
                    console.log(array)
                    totalArray.push(array)
                    array.pop()
                }   
                array.pop()
            }
        }
    }
}

for(let i=0; i<totalArray.length; i++){
    for(let n=0; n<sort; n++){
        if(!totalArray[i].includes(sort[n])){
            flag = false;
        }
        if(totalArray[i][1]=="A"){
            flag = false;
        }
        if(totalArray[i][1]=="E"){
            flag = false;
        }
        if(totalArray[i][1]=="T"){
            flag = false;
        }
    }
}
