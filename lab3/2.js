/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    z = str.split(" ");
    for (let i = 0; i < z.length; i+=1) {
        z[i]=parseFloat(z[i]);}str=z.join(' ');
    for (let i = 0; i < z.length; i+=1) {
        if (isNaN(z[i])){z.splice(i,1)
    }
}
    max=z[0]; min=z[0];
    for (let i = 0; i < z.length; i+=1){
        if(z[i]>max){
            max=z[i]
    }
} 
    for (let i = 0; i < z.length; i+=1) {
        if(z[i]<min){
            min=z[i]
    }
}
    return{"min": min, "max": max};
}

module.exports = getMinMax;
