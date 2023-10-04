//array.splice(n) = 任意のindexの値を取り出す

//任意の数字のindexを見つける(配列、indexの知りたい数字)
function getIndex(array, value){
    for(let i = 0; i<array.length; i++){
        if(array[i]==value){
            return i
        }
    }
}