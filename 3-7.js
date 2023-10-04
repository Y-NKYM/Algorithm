//032: Binary Search, 二分探索
let check = 9;
let array = [1,2,3,4,5,6,7];

function binarySearch(array, check){
    let start = 0;
    let end = array.length-1;
    let middle = 0;
    
    while(end-start != 1)
    {
        middle = Math.ceil((end-start)/2) + start;
        
        if(check == array[middle]) {
            return true;
        } else if(check < array[middle]) {
            end = middle;
        } else if(check > array[middle]) {
            start = middle;
        } 
    }
    if(array[middle+1] == check || array[middle-1] == check){
        return true
    } else {
        return false
    }
}
result = binarySearch(array, check);
console.log(result)