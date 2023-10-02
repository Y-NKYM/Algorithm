//複数の値からある合計数に一致する組み合わせ　再帰関数

function ChooseNTotal(list, n, remain)
{
    if (list.length < n)
    {
        return 0;
    }
    
    if (n == 0)
    {
        if (remain == 0)
        {
            return 1;
        }
        return 0;
    }
    
    //---------------------------------
    
    var count = 0;
    for (var i = 0; i < list.length; i++)
    {
        var newlist = list.slice(i + 1);
        var newremain = remain - list[i];
        count += ChooseNTotal(newlist, n-1, newremain);
    }
    return count;
}

var totalcount = ChooseNTotal([243, 156, 104, 280, 142, 286, 196, 132, 128, 195, 265, 300, 130], 5, 1000);

console.log(totalcount);