//declare arr,fun,obj
//find largest num in str, count vowel str
//find reverse in str, check palendrom num
//write code for fibonachi series
//find largest element in arr
//remove duplicate from arr
//find missing num in arr
//fun. to find even,odd
//fun. for sum of arr

//Arr
let arr=[1,2,3,4,5,2];

//Obj
let obj={name:"Waltro",course:"CSE"};

//Function
function demo(){console.log("Fun ex");}

//largest num
let str="1,2,3,4";
let largest=Math.max(...str.split(",").map(Number));
console.log("Largest num:",largest);

//vowels
let text="ichalkaranji";
let count=text.match(/[aeiou]/g).length;
console.log("Vowel count:",count);

//reverse string
let rev=text.split("").reverse().join("");
console.log("Reversed string:",rev);

//palindrome
let num=121;
console.log(num.toString()===num.toString().split("").reverse().join("")?"Palindrome number":"Not a palindrome");

//fibonacci
let n=5;
let fib=[0,1];
for(let i=2;i<n;i++)fib[i]=fib[i-1]+fib[i-2];
console.log("Fibonacci series:",fib.slice(0,n));

//largest element in array
console.log("Largest:",Math.max(...arr));

//remove duplicates
let uniqueArr=[...new Set(arr)];
console.log("Array without duplicates:",uniqueArr);

//missing number
let arr2=[1,2,4,5];
let total=5*(5+1)/2;
let sum=arr2.reduce((a,b)=>a+b,0);
console.log("Missing number:",total-sum);

//even/odd
function evenOdd(n){return n%2===0?"Even":"Odd";}
console.log(evenOdd(7));

//sum of array
function sumArray(a){return a.reduce((x,y)=>x+y,0);}
console.log("Sum of array:",sumArray(arr));