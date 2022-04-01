/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    if (arr.length>0){
    helping=arr.join(' ');  helping=helping.replace(/[\s.,%]/g, ' ')      
    let helping2=helping.split(' ')
   for (let i = 0; i < helping2.length; i+=1) {if(!(isNaN(helping2[i]/1))){ helping2[i]=Number(helping2[i])}}
   return helping2;
}
else return arr;
    
}

module.exports = get1DArray;
