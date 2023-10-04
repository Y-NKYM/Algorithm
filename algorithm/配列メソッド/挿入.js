//array.push(n) = 一番最後にnを入れる

//任意の位置に配列を入れる（配列、入れたい場所、入れたい数字）
function pushValue(array, index, value){
    let x = array.slice(0, index)
    let y = array.slice(index)
    newArray = x.concat(value, y)
    return newArray;
}

