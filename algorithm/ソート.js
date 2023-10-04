//ソート
function swapArray(array, ia, ib) {
    a = array[ia]
    b = array[ib]
    array[ia] = b
    array[ib] = a
    return array
}

function bubble(array){
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]>array[j]){
                array = swapArray(array, i, j)
                console.log(array)
            }
        }
    }
    return array
}
console.log(bubble([9, 5, 2, 7, 1]));