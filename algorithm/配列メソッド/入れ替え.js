//入れ替え：配列、indexA、 indexB
function swapArray(array, ia, ib) {
    a = array[ia]
    b = array[ib]
    array[ia] = b
    array[ib] = a
    return array
}