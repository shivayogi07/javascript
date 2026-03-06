
// let arr1 = ["shivu"];
// let arr2 = [" ds"];

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// let rev = arr3.reverse();
// console.log(arr3);


// let student = {
//     name : "shivu",
//     age : 21,
//     wife : "dhanyatha"
// };
// //adding the proparty to the object..
// student.city = "tiptur";
// //deleting th eproparty in the object 
// delete student.age;

// console.log(student);


// function dice(){
//     let random = Math.floor(Math.random() * 6) + 1;

//     console.log(random);
// }

// dice();

// function printname(name){
//     console.log("name is",name);
// }
// printname("shivu");

// function avgofnum(a,b,c){
//     let sum = a +b +c;
//     let avg = sum / 3;
//     return avg;
// };

// console.log(avgofnum(29,38,48));


// function tables(num){
//     for(let i = num; i<=num*10;i+=num){
//         console.log(i);
//     }
// };

// tables(10);


// function sumofm(n){
//     let sum = 0;

//     for (let i = 0; i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumofm(3));


// let arr = ["sh","iva","yogi"," ds"];

// function conarr(arr){

//     let res = " ";
//     for(let i = 0;i<=arr.length;i++){
//         res += arr[i];
//     }
//     return res;
// }

// console.log(conarr(arr));

// const student ={
//     name :"shivu",
//     age : 21,
//     math:98,
//     biology: 97,
//     physics: 85,
//     get_avg() {
//         let avg =(this.biology+this.math+this+this.physics) / 3;
//         console.log(avg);

//     }
// };

// console.log(student);


// const student = {
//     name: "shivu",
//     age: 21,
//     math: 98,
//     biology: 97,
//     physics: 85,

//     get_avg() {
//         let avg = (this.math + this.biology + this.physics) / 3;
//         console.log(avg);
//     }
// };

// console.log(student.name);
// student.get_avg();

// const a =1000;
// try {
//     console.log(a);
// }catch{
//     console.log("variable is not found!!")
// }

// const cube = (n)=> (
//     n * n *n
// );

// console.log(cube(10));

// setTimeout (() =>{
//     console.log("hello baby!");
// }, 2000);

// setInterval(() => {
//     console.log("hi shivu")
// }, 1000);

// const arr = [1,2,3,4,5];

// let print = arr.forEach((num) =>{
//     console.log(num);
// });

// const arr = [1,2,3,4,5];

// let newarr = arr.map((num) =>{ return num * num;
// });

// console.log(newarr);

// const arr = [1,2,3,4,5];


// let newarr = arr.filter((num) => {
//     return num >= 2;
// });

// console.log(newarr);

// const arr = [1,2,3,4,5];

// let res =arr.every((num) =>{
//     return num > 10;
// });

// console.log(res);


// const arr = [1,2,3,4,5,10];

// let res = arr.some((num) =>{
//     return num > 1;
// });

// console.log(res);

// const arr = [1,2,3];

// let newarr = arr.reduce((total,num) =>{
//     return total + num;
// });

// // console.log(newarr);

// const arr = [1,2,3,4,5,6];

// let max = 0;

// for(let i =0; i<arr.length; i++){
//     if(max < arr[i]){
//     max = arr[i];
// }
// }

// console.log(max);

// function def (a,b=87){
//     return a+b;
// }

// console.log(def(1));

// spread   WITH ARRAY

let arr = [1,2,3,4,5];
let newarr = [...arr];

console.log(newarr.length);

console.log(arr.length);