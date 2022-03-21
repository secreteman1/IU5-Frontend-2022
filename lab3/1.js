/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    z = str.split(" ");
    for (let i = 0; i < z.length; i+=1) {
        z[i]=z[i][0].toUpperCase()+z[i].substr(1)
    } 
    str=z.join(' ');
    return str;
}

module.exports = capitalize;
