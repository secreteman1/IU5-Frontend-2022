/**
 * Напишите функцию prettySum(arr),
 * на вход подается массив arr
 * необходимо вернуть сумму чисел, находящихся на четных индексах, умноженную на последний элемент
 * Примеры:
 * [3, 2, 6, 5, 4, 1, 2] ->  30
 * как считать: (3 + 6 + 4 + 2) * 2
 */

function prettySum(arr) {
    a=arr.length;
    b=0;
   for (let i = 0; i < a; i+=2) {
       b=b+arr[i];
    }
    d=b*arr[a-1];
   return d;
}

module.exports = prettySum;
