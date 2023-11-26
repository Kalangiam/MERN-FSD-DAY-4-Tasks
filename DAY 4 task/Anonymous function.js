// Anonymous function
// print all the Odd numbers of an array
// var odd = function(array){
//     for(i=0;i<array.length;i++){
//         if(array[i]%2!=0){
//             console.log(array[i]);
//         }
//     }
// }
// var array = [1,2,3,4,5,6];
// odd(array);

// function convertToTitleCase(stringArray) {
//   return stringArray.map(function (str) {
//     // Convert the first letter of each word to uppercase
//     return str.replace(/\b\w/g, function (char) {
//       return char.toUpperCase();
//     });
//   });
// }

// const inputArray = ["hello world", "javascript is awesome", "title case"];
// const titleCaseArray = convertToTitleCase(inputArray);

// console.log(titleCaseArray);



// //sum of all numbers in an array
// var sum = function(arr){
//     var sum=0;
//     for(var i=0; i<arr.length; i++){
//         sum+=arr[i];
//     }
//     console.log(sum);
// }
// var s = [1,2,3,5,4,8];
// sum(s);

// return all the prime numbers in an array

// var prime = function(number){
//     var list = [];
//     for(var i=0; i<number.length; i++){
//         var count =0;
        
//         for(var j=1; j<=number[i]; j++){
//             if(number[i]%j==0){
//                 count++;
//             }
//         }
        
//         if(count<=2){
//             list.push(number[i]);
           
//         }
       
//     }
//     return list;
// }
// console.log("List of prime numbers in this array");
// var answer = prime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
// console.log(answer);

// return median of two arrays

// var median = function(a,b){
//     var array = a.concat(b);
//     var length =array.length;
//     var sort  = array.sort(function(a,b){return a-b});
//     console.log(sort);
//     if(length%2!=0){
//         var odd = Math.floor(length/2);
//         console.log(`Median is ${sort[odd]}`)
//     }else if(length%2==0){
//         var even = Math.floor(length/2);
//         console.log(`Median is ${(sort[even-1]+sort[even])/2}`)
//     }
// }
// median([4,2,1],[9,5,5]);

// remove duplicates from an array

// var removeduplicates = function(a){
//     var list = [];
//     for(i=0;i<a.length;i++){
//         if(list.length===0){
//             list.push(a[i]);
//         }
//         if(list.indexOf(a[i])===-1){
//             list.push(a[i]);
//         }
//     }
//     return list;
// }
// var result = removeduplicates([22,3,4,1,2,3,3,4,25,23])
// console.log(result);

// return all palindrome of an array

// var palindrome = function(a){
//     var list = [];
//     for(i=0;i<a.length;i++){
//     if(a[i] === a[i].split("").reverse().join("")){
//         list.push(a[i]);
//     }
// }
// return list;
// }
// var answer = palindrome(["hannah","eve","hi","hello"]);
// console.log(answer);

// rotate an array by k times

// var rotation = function(array,k){
//     for(i=0;i<k;i++){
//         array.unshift(array.pop());
//     }
//     return array;
// }
// var answer = rotation([1,2,3,4,5,6,7],2);
// console.log(answer);