/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let str2='' ;count=0 ;i1=0;i = 0;
    while (i < str.length) {
        while (str[i]==str[i1]) { count=count+1; i1+=1 }
        if (count>1){str2 = str2+str[i]+count;}
        else{str2 = str2+str[i];} i=i1;count=0;}
        return str2
}
module.exports = rle;
