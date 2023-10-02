function takeOut(array, value){
    for(let i=0; i<array.length; i++){
        if(array[i] == value){
            array.splice(i, 1);
            return array;
        }
    }
}

function dijkstra(array){
let current = 0;
let remainIndex = [];
let cost = [];
for(let i=0; i<array.length; i++){
    remainIndex.push(i);
    cost.push(Infinity);
}
cost[0] = 0;

while(current != array.length-1){
var oneJump = Math.abs(array[current+1]-array[current]);
var twoJump = Math.abs(array[current+2]-array[current]);
if(cost == Infinity || cost[current+1]>oneJump){
    cost[current+1] = oneJump + cost[current];
}
if(cost == Infinity || cost[current+2]>twoJump){
    cost[current+2] = twoJump + cost[current];
}
remainIndex = takeOut(remainIndex, current);
var small = Infinity;
var index = 0;
for(let i=0; i<remainIndex.length; i++){
    if(small>cost[remainIndex[i]]){
        small = cost[remainIndex[i]];
        index = remainIndex[i];
    }
}
current = index;
console.log("next index to jump:", index);
console.log(remainIndex);
console.log(cost);
}
return cost[array.length-1];
}

array = [30, 10, 60, 10, 60, 50];
result = dijkstra(array);
console.log(result);