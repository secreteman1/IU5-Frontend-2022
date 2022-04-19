/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    arr1=[]; arr3=[]
    for (let i = 0; i < arr.length; i+=1) {
        arr1[i]=arr[i].toLowerCase().split('').sort().join('')
    } 
     y=arr1.length;
  while (arr.length!=0) { 
      arr2=[];
      x=arr1[0]
    arr2.push(arr[0])
  arr1.shift();arr.shift();
  for (let i = 0; i < y; i+=1) {
      if (arr1[i]==x) {arr2.push(arr[i]); arr1.splice(i,1); arr.splice(i,1); }
  } 
  arr3.push(arr2)
  } 
return arr3;
}



module.exports = getAnagramms;
