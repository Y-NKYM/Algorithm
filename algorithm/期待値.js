//期待値：スコア*確率の和

//二つのN面ダイスの合計の期待値
function dice(bDice, rDice){
    let array = [];
    let sum = 0;
    for(let i=0; i<bDice.length; i++){
        for(let j=0; j<rDice.length; j++){
            array.push(bDice[i]+rDice[j]);
            sum += bDice[i]+rDice[j];
        }
    }
    //console.log(array)
    return (sum/array.length)
}
console.log(dice([1,2,3],[10, 20, 30]));

//Ｎ個の選択問題の点数の期待値
function rand(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        let array = arguments[i];
        sum += (array[1]/array[0]);
    }
    console.log(sum)
}
rand(2, [2, 50], [4, 100])

//N日間やる時間を
function vac(n, a, b){
    let topNum = 0;
    let bottomNum = 0;
    topP = (2/6);
    bottomP = (2/3);
    for(let i=0; i<n; i++){
        topNum += a[i]*topP;
        bottomNum += b[i]*bottomP;
    }
    return topNum+bottomNum;
}
console.log(vac(5, [3, 1, 4, 1, 5], [9, 2, 6, 5, 3]));

//何回やるか決まっていない
//一回１ドルのN種類を全て手に入れる金額の確率・逆数
function coin(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += 1*(n/i);
    }
    return sum
}
console.log(coin(5))