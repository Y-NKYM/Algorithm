//ナップサック問題
/*
問題文
N 個の品物があります。 品物には 
1,2,…,N と番号が振られています。 各 i (1≤i≤N) について、
品物 i の重さは w i​で、価値は v iです。
太郎君は、N 個の品物のうちいくつかを選び、ナップサックに入れて持ち帰ることにしました。 
ナップサックの容量は W であり、持ち帰る品物の重さの総和は W 以下でなければなりません。

太郎君が持ち帰る品物の価値の総和の最大値を求めてください。
*/

const generate2DArray = (height, width) => {
    return [...Array(height)].map(() => Array(width).fill(0));
}

const knapsack = (items, weightLimit) => {
    const listHeight = items.length;
    let dp = generate2DArray(listHeight + 1, weightLimit + 1); // 0行目・0列目を含む二次元配列を生成

    for (let col = 0; col < listHeight; col++) {
        for (let row = 0; row < weightLimit + 1; row++) {
            if (row >= items[col][0]) {
                dp[col + 1][row] = Math.max(dp[col][row], dp[col][row - items[col][0]] + items[col][1]);
            } else {
                dp[col + 1][row] = dp[col][row];
            }
        }
    }

    return dp[listHeight][weightLimit];
}

const items = [
    [2, 3],
    [1, 2],
    [3, 6],
    [2, 1],
    [1, 3],
    [5, 85]
]; // weight, value

console.log(knapsack(items, 9)); // 94