/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
if (str.length<=1){return true;}
else{
if (str.length %2==0){
    i = 0;i1 = str.length-1;counter=0
       while ( i <= str.length/2-1) {
           while (i1 >= str.length/2) {
               if (str[i]===str[i1]) {counter+=1} 
   i=i+1;i1=i1-1}}
if (counter==str.length/2) {return true;}
else{return false;}
}
else{
i = 0; i1 = str.length-1; counter=0;
   while ( i <= (str.length-1)/2-1) {
       while (i1 >= (str.length-1)/2+1) {
           if (str[i]===str[i1]) {counter+=1} 
i=i+1; i1=i1-1}}
if (counter==(str.length-1)/2) {return true;}
else{return false;}}}}
module.exports = isPalindrome;
