// console.log("Here is js");
// alert("Click on ok to run");
// // Variables        (var)
// var x=60;
// console.log(x);
// var x=600;
// console.log(x);

// // let
// let y=4555;
// console.log(y);
// // we cannot write let to declare same value but if we write y nad remove let it wont show error
// y=4555;
// console.log(y);

// // const
// const result =90;
// console.log(result);
// // we cannot declare same variable
// // after removing const we cannot run code
// // can only declare one time
// // const result =90;
// // console.log(result);
// // result =90;
// // console.log(result);

// // DATA TYPES
// // /string
// const output="Rainbow";
// console.log(output);
// console.log(typeof output);
// // type of is used to see the data type

// // number
// // const aa="65656";
// // yo halyo vani string dekhauxa"""
// const aa=65656;
// // const paxi j halda ne hunxa
// console.log(aa);
// console.log(typeof aa);

// // float
// const x=65.565;
// console.log(x);
// console.log(typeof x);

// // undefined
// let g;
// console.log(g);
// console.log(typeof g);
// // const wont define undefined

// null
// let f = null;
// console.log(f);
// console.log(typeof f);

// // Boolean
// const isTrue = true;
// console.log(isTrue);
// console.log(typeof isTrue);

// // BigInt
// const i = true;
// console.log(i);
// console.log(typeof i);

// // Symbol
// const s= Symbol("Rainbow s my good boy");
// console.log(s);
// console.log(typeof s);

// let x= 2.33;
// console.log(x);
// console.log(typeof x);

// // type Conversion very important
// // this is string coz we have put number inside ""
// // const result = "123";
// // const output = Number(result);

// // const result = "1.23";
// // console.log(result);
// // const output = psrseInt( output);
// // console.log(typeof result);

// // const result = 1.23;
// // const output = String(result);
// // console.log(output);
// // console.log(typeof result);

// // or converting no into string
// const result = 23;
// const output = result.toString();
// console.log(output);
// console.log(typeof output);

// // const isMarried = false;
// // const ans=String(isMarried);
// // console.log(ans);
// // console.log(typeof ans);

// // Array
// const arr=[1,2,3,4,5];
// console.log(arr);
// console.log(typeof arr);

// // Function
// function add(num1,num2){
//     return num1+num2;
// }
// console.log(add(1,2));
// console.log(typeof add);

// // Date
//  const today = new Date();
//  console.log(today);
//  console.log(typeof today);

//  // Error
//  const error = new Error();
//  console.log(error);
//  console.log(typeof error);

//  // RegExp
//  const reg = new RegExp();
//  console.log(reg);
//  console.log(typeof reg);

//  // Map
//  const map = new Map();
//  console.log(map);
//  console.log(typeof map);

//  // Object. TYPEs
//  const obj={
//      name: "Rainbow",
//      age: 23,
//      isMarried: false,
//      occupation: "Security",
//  };
//   console.log(obj);
//   console.log(typeof obj);

// // to ch3ck typew of array
// const array =["1", "2", "3", "4"];
//     console.log(arr);
//     console.log(typeof arr);

// date ko obj type obj
// const data =new Date();
//     console.log(date);
//     console.log(typeof date);

// 1+"1"=11 in js coz last ko 1 string xa
// const result= 1+"1";
// console.log(result);
// console.log(typeof result);
// // output will be 11 coz + lai add gardaina combine gardinxa

// const result= 8-"4";
// console.log(result);
// console.log(typeof result);
// esma chai minus nai gardinxa

// // to remove unwanted space while loging email
// // String method
// const result= "RAinbow is specialoo";

// // length
// console.log(result.length);

// // CharAt
// console.log(result.charAt(2));

// // indexOf
// console.log(result.indexOf("o"));

// // LastindexOf
// console.log(result.indexOf("o"));

// // LowerCase
// console.log(result.toLowerCase());
// // UpperCase
// console.log(result.toUpperCase());
// // Replace
// console.log(result.replace("RAinbow", "Rainbow"));

// // Includes/
// console.log(result.includes("specialoo"));
// console.log(result.includes("specioo"));
// // to see if the words are true of false

// // slice`
// console.log(result.slice(2 , 4));
// // to see letter

// // concat
// console.log(result.concat("Hello Ruby!"));

// let output="            Hello Team";
// console.log(output.trim());

// //split the words
// console.log(result.split(" "));

// // more about concat // concatination
// let x="Hello";
// let y="Rainbwfbaejl";
// let z="Raaejl";
// // x and y merge hunxa together
// console.log(x + y);
// console.log(x + " " + y + z);
// console.log(x + " " + y + " " + z);
// // to give the space between x and y

// // // to give the space between x and y
// const a= 23;
// const b= 33;
// const result = a+b;
// console.log("The sun is shinning:" + result);
// console.log(`The sun is shinning: ${result}`);

//Assignment operator
// let x=57;
// x=x+10;
// console.log(x)

// let y=57;
// // y=y+60;
// y+=60;
// console.log(y)

// comparison operator == and ===[very very important]
// let a = 57;
// let b = 56;
// let c = 56;
// console.log(a == c);
// console.log(a === c);
// console.log(a != b);
// console.log(a != c);
// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);

// Logical operator{ very vey very important}
// Conditional operator{ very vey very important}

// conditional ternary operator
// let ageGroup = 46;
// console.log(ageGroup <= 34 ? "You can vote" : "You can't vote");

// // unary operator
// let a = "57";
// let b = +a            //positive
// console.log(a);
// console.log(typeof a );

// let c = 7;
// let d = +c           //positive
// console.log(c);
// console.log(typeof c );

// const obj = {
//     name: "Rainbow",
//     age: 23,
// };

// delete Object.age;
// console.log(obj)

// let email = "sauvagyabaniya@gmail.com"
// let password="999999"
// // pair of {} is known as block
// if (email === "sauvagyabaniya@gmail.com" && password === "999999"){
//     console.log("Login successful!");
// }else{
//     console.log("Login unsuccessful!!");
// }

// // Checking SEE result
// let grade= 50;
// if (grade >= 90){
//     console.log("Grade : A+");
// }
// else if (grade >=80){
//     console.log("Grade : A");
// }else if (grade >= 70){
//     console.log("Grade : B+");
// }
// else if (grade >= 60){
//         console.log("Grade : B");
// }else if (grade >= 50){
//     console.log("Grade : C");
// }else if (grade >= 40){
//     console.log("Grade : D");

// }else{
//     console.log("Grade : Failed");
// }

// // weather
// let weather = "rainy";
// if (weather === "sunny"){
//     console.log("Wear sunglasses Today is Sunny!!");
// }else if (weather === "winter"){
//     console.log("Wear warm clothes Today is Winter!!");
// }else if( weather === "clouds"){
//     console.log("Wear raincoat Today is Clouds!!!!");
// }else if( weather === "rainy"){
//     console.log("Take umbrella Today is Rainy!!!");
// }else{
//     console.log("Invalid weather!!!");
// }

// organizing code not repeating  by using switch control statements (To make code short and fast)
// //      switch
// let role = "super admin";
// switch (role) {     //key ko thau ma role halne ho value assign gana
//     case "buyer":
//             console.log(" YOu can only buy products!!");
//         break;

//     case "seller":
//             console.log(" YOu can sell your products!!");
//         break;

//     case "admin":
//             console.log(" YOu can add your products!!");
//             break;

//     case "super admin":
//             console.log(" YOu can access everything!!");
//         break;

//     default:
//         break;
// }

// // to check whoch day is today
// let date = new Date().getDate();
// console.log(date);      //to check date

// switch (date) {     //key ko thau ma true halne ho value assign gana
//     case 0:
//             console.log(" TOday is Sunday!");
//         break;

//     case 1:
//             console.log(" TOday is Monday !");
//         break;

//     case 2:
//             console.log(" TOday is Tuesday !");
//             break;

//     case 3:
//             console.log(" TOday is Wednesday !");
//         break;

//     case 4:
//             console.log(" TOday is Thursday!! ");
//         break;

//     case 5:
//             console.log(" TOday is Friday!");
//         break;

//     case 6:
//             console.log(" TOday is Saturday!");
//         break;

//     default:
//         break;
// }

// -------------------------------git---------------------------------

// git status
// git branch
// git branch branchname
// git checkout branchname
// git branch
// now add
// git add .
// git commit -m "abc"
// git push origin abc"
    //  git checkout master
    // git merge day3
    // git push origin master


//----------------------------------------------very very imp------------------------------------------------
// status
// let status= 200;

// switch (status) {
//     case 201:
//         console.log("Created");
//         break;

//     case 400:
//         console.log("Bad Request");
//         break;

//     case 401:
//         console.log("Unauthorized");
//         break;

//     case 403:
//         console.log("Forbidden");
//         break;

//     case 500:
//         console.log("Internal Server Error");
//         break;

//     case 200:
//         console.log("OK");
//         break;

//     default:
//         console.log("Invalid Server Error");
//         break;
// }

// ---------------------------imp-------------------------
//loop
//  for loop

// for(let i = 0; i <=10; i++) {   //declared variable how many times we can use
//     console.log("Rainbow is my favorite " + i);
// }
// or
// for(let i = 0; i <=10; i++) {   //declared variable how many times we can use
//     console.log(i);
// }

// writing multiplication table of 2

// for(let i = 0; i <=10; i++) {   //declared variable how many times we can use
//     console.log(`2*${i}=${2 * i}`);
// }

// for(let i = 0; i <=20; i++) {
//     if(i % 2 === 0){
//         // console.log(i);
//         console.log(`The even Number are: ${i}`);
// // to print inside this loop to check odd even at same time
//     // }
//     // else{
//     //     console.log(`The odd Number are: ${i}`);
//     // }
// }

// //to check odd number xuttai
// for(let i = 0; i <=20; i++) {
//     if(i % 2 !== 0){
//         // console.log(i);
//         console.log(`The Odd Number are: ${i}`);

//     }
// }

// //to add these given numbers 3,4,5,6
// const arr = [3,4,5,6];
// let sum=0;
// for (let i = 0; i < arr.length; i++) {  //arr.length this will check the length of the array my is 3 (0,1,2,3)->(3,4,5,6)
//     sum += arr[i];
// }

// console.log(sum);

//while loop
// while loop ma pailai let initialize gana parxa but let ma let ko inside initialize garna parxa
// let i=0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// //do while loop
// let sum=0;
// do {
//     console.log("sum");
//     i++;

// }while(i <= 10);
// or
//do while loop
// let i =0;
// do {
//     console.log("sum"+i);
//     i++;

// }while(i <= 10);

// const arr=[4,5,6,7];
// console.log(arr);
// console.log(arr[2]);
// console.log(typeof arr);

// following cocdes are more imp to work
// ARRAY
// it is count as 0123............ and also  count apple and others
// let ans = [3, 34, 5, 6, 7, 8, 9,"Apple", "Orange"];   //data structure
// console.log(ans[4]);
// console.log(ans[7]);

// const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// length
// console.log(arr.length);    //length count from 1 to end
//push
// it is used to add in the last value or number
// let result = arr.push(10);
// console.log(result);
// console.log(arr);

//pop
//it is used to remove last value or number
// arr.pop();
// or
// let result = arr.pop();
// // console.log(result);
// console.log(arr);

//shift
// remove first value
// arr.shift();
// console.log(arr);

// unshift
// add first value
// arr.unshift(22);
// console.log(arr);

// include
// tthis is used to check the numbers are available or not
// let result=arr.includes(5)
// console.log(result);

//joint
// this  will add between numbers given in oo
// const ooo = ["A","B","C","D","Rainbow","WOracle"]
// console.log(ooo.join("-"));
// console.log(ooo.join(" "));
// console.log(ooo.join("+"));
// console.log(ooo.join("@"));
// console.log(ooo.join("gg"));
// console.log(ooo.join("1"));
// console.log(ooo.join("%"));

// splice
// it will remove from 0123..
// let arr = [2,3,4,5, 6,7,8,9,10,11];
// arr.splice(2,4);
// console.log(arr);

// slice
// let arr = [2,3,4,5,3,7,3,9,10,11];
// let result = arr.slice(2,3);
// console.log(result);

// let output = arr.indexOf(3);
// let aaa = arr.lastIndexOf(3);
// console.log(output);
// console.log(aaa);

// let arr = []
// let sum = 0

// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }

// for (let i = 0; i<arr.length; i++) {
//     sum += arr[i];
// }
// let result = sum * 2;

// console.log("The sum of arr is " + sum);
// console.log("The multiply of sum is " + result);
// console.log(arr);

//---------------------------IMP-------------------------------------
// Object
// //collection of properties is obj
// const person = {
//   //properties: variables inside{}
//   name: "Rainbow",
//   age: 20,
//   job: "Web Developer",
//   education: "Information Technology",
//   isMarried: false,
//   address: {
//     street: "Kennel",
//     city: "Dhaka",
//     country: "Bangladesh",
//   },
//   // if this comma , is not written error will occur

//   gree: function () {
//     console.log("Good Morning " + this.name + "Age" + this.age);
//   },
// };
// const {name, age, job, education, occupation, isMarried, address:{
//     street,
//     city,
//     country,
//   },} = person;
//   person.gree();
//   console.log(name);
//   console.log(age);
//   console.log(job);
//   console.log(education);
//   console.log(occupation);
//   console.log(isMarried);
//   console.log(street);
//   console.log(city);
//   console.log(country);


// }}= person
// console.log(person.address.city);
// person.gree();
//alt shift  p to start prettier

// ----------------------------FUNCTION------------------------------------
//function is reusable code
// way of wrtiing fn
// function fnname() {
//     console.log("Hello World");
// }
// fnname();


// function fnname(a,b,C) {
//     return a+b; 
// }

// let ans = fnname(8,9);
// console.log("the sum of the" + ans);


// function myfn(radius){
//     return Math.PI * radius *radius;
// }
// let ans = myfn(7);
// console.log("the sum of the" + ans);


// // calculator
// function calculate(cartItems, taxRate){
//     let total = 0;
//     for (let i = 0; i <cartItems.length; i++) {
//         total += cartItem[i].price * cartItems[i].quantity;
//     }
//     total +=total * taxRate;
//     return total;
// }
// let cart=[
//     {name: "Rainbow", price: 777, quantity: 4},
//     {name: "hfsdhf", price:777, quantity:9}
// ];
// const result = calculateTotal(cart, 0.02);
// console.log(result);

// function myFunc(){
//     let a = prompt("Enter first number");
//     let b = prompt("Enter second number");
//     let result = Number(a) + Number(b);
//     if (result){
//         alert("The sum of two number is :",$result);
//     }
// }
// myFunc();


// ----------------------------scoping :-------------------------------
// global scope->declare variables globally 
//  function scope 
// and block scope block scope is very very important

// var x= 90;
// var y= 40;
// const z= 70;
// function myFunc(){
//     console.log(x, y, z);
// }
// myFunc();

// function scope ->declared inside function
// function myFunc(){
// var x= 90;
// var y= 40;
// const z= 70;
//     console.log(x, y, z);
// }
// myFunc();


// function myFunc(){
//     if(true){
//         var x= 90;
//         let y= 40;
//         const z= 70;
//         console.log(y);  //cannot print outside function is known as function scope(let and const use vko vayara inside function ma hunxa)
//         console.log(z);
//     }
//     console.log(x); //can print outside function is known as block scope(var use vako xa )
// }
// myFunc();


// DOM (DOCUMENT OBJECT MODEL)
// in short dom is browser display page styling html 
//         document-> obj which help to access body contents
// console.log(document.body); //console ma body element access garna milxa
// let result=document.getElementById("hello");
// console.log(result); 
// change garne 
// let result=document.getElementById("hello");
// result.innerHTML="I have Rainbow";
// result.style.backgroundColor="skyblue"; //to add background color
// result.style.color="white";
// result.style.textAlign="center";
// new


// let result=document.getElementById("hello");
// result.innerHTML="I have Rainbow";
// result.style.backgroundColor="skyblue"; //to add background color
// result.style.color="white";
// result.style.textAlign="center";
// let output = document.getElementsByClassName("helo")[0]; //to access firrst index
// console.log(output);
// output.innerHTML="MY laptop";
// output.style.backgroundColor="peru"; //to add background color
// output.style.color="smoke";
// output.style.textAlign="center";

// let ans = document.getElementsByClassName("helo");
// ans[1].innerHTML="MY screen";
// ans[1].style.backgroundColor="pink";
// ans[1].style.color="white";
// ans[1].style.textAlign="center";

// let show = document.getElementsByTagName("span");
// console.log(show[0]); //
// show[0].style.backgroundColor="pink";
// show[0].style.color="white";
// show[0].style.textAlign="center";

// let shows = document.getElementsByTagName("span");
// console.log(shows[1]); //
// shows[1].style.backgroundColor="yellow";
// // shows[1].style.color="green";
// // shows[1].style.textAlign="center";

// // let z=document.getElementsByName("password");
// // console.log(z); 

// let y = document.querySelector("#btnAdd");
// y.style.backgroundColor="black";
// // alert();
// y.style.color="green";
// y.style.textAlign="center";
// y.style.padding="2vmax 4vmax";
// y.style.border="none";
// y.style.cursor="pointer";

// let o = document.querySelector(".btndelete");
// o.style.backgroundColor="blue";
// o.style.color="black";
// o.style.textAlign="center";
// o.style.padding="2vmax 4vmax";
// o.style.cursor="pointer";
// o.style.border="none";

// function addTask(){
// let display = document.createElement("h1");
// display.innerText = "this is a test";
// document.body.prepend(display);
// }
// y.onclick =addTask;

// function deleteTask(){
//     let h1 = document.querySelector("h1");
//     h1.remove();
// }

//     y.onclick=addTask;
//     o.onclick=deleteTask;

// // ---------------------hover garda ra click garda diff aauxa-------------------------------------------
// let heading = document.getElementById("heading");
// let box = document.getElementById("box");
// let btnClick = document.getElementById("btnClick");
// let input = document.querySelector("input");

// btnClick.style.color = "green";
// btnClick.style.backgroundColor = "black";
// btnClick.style.cursor = "pointer";
// btnClick.style.border = "none"; 

// btnClick.addEventListener("click",()=>{
//     console.log("Button is clicked");
//     // box.style.backgroundColor="red";        //this will change after clicking on click me without linking on css 
//     // box.style.border = "none";
//     // box.style.color = "blue";
//     // box.style.margin = "10px";
//     // box.style.fontSize = "20px";
//     box.classList.add("classBox");           //this is used to link css style 

// });
// btnClick.addEventListener("contextmenu",()=>{
//     e.preventDefault();                         //form ko data loss huna didaina until you form is submitted
//     btnClick.style.backgroundColor="black";
// });
// // ---------------------This will click option when u right click where you cant inspect---------------------------
// // window.addEventListener("contextmenu",(e)=>{
// //     e.preventDefault(); //form ko data loss huna didaina until you form
// // });
// btnClick.addEventListener("dblclick",()=>{
//     document.body.style.backgroundColor = "red";
// });
// btnClick.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "";
// });
// addEventListener("click",(e)=>{
//     console.log(e.clientX);
//     console.log(e.clientY);
// });

// box.addEventListener("mouseover",()=>{
//     btnClick.style.transform = "scale(1.1)";
//     heading.innerText="Do your own business!";
//     box.style.backgroundColor="yellow";
//     box.style.border = "2px solid black";
//     box.style.color = "red";
//     box.style.margin = "20px";
//     box.style.fontSize = "25px";
// });
// box.addEventListener("mouseout",()=>{           //while pointing on the cursor,it will do animation
//     btnClick.style.transform = "";
//     heading.innerText="Welcome!";
//     heading.style.backgroundColor="";
//     heading.style.border = "";
// });
// input.addEventListener("change",()=>{
//     console.log("e.target.value");
//     console.log("changing");                            //box ma j lekhda ne change print hunxa
// });

// // ---------------------------Math Object-------------------------------------
// let num=4.5;
// let ans=Math.round(num);
// console.log(ans);

// let output = Math.random();
// console.log(output);

// let ans= 9;
// // let result = Math.sqrt(ans);
// let result = Math.floor(ans);
// console.log(result);
// let ans= 4.3;
// // let result = Math.sqrt(ans);
// let result = Math.ceil(ans);
// console.log(result);

// let base=2;
// let extonent= 3;
// // let output = Math.pow(base,extonent);
// console.log(output);

// function Subtract(a,b) {
//     return a - b;
//     return Math.abs(result)
// }
// let output= Subtract(5,6)
// console.log(output);

// function GeneratorOTP(){
//     let otp = Math.floor(10000 + Math.random()*900000);
//     return otp;
// }
// let ans=GeneratorOTP();
// console.log(ans);
// let num= Math.max(1,2,34,4,5,6)
// console.log(num);
// let result= Math.min(1,6,4,2);
// console.log(result);
// ---------------------to see present date and time-------------------------------------------
// // let now = new Date().getFullYear();
// // console.log(now);
// let now = new Date().getMonth();
// console.log(now);


// // ---------------------------GETITEM AND SETITEM-------------------------------------
// // local and server storge very important
// let input = document.getElementById("myInput");
// let btnAdd =document.getElementById("btnAdd");
// let btnRemove =document.getElementById("btnRemove");
// const myFunc =() => {
//     localStorage.setItem("key1", input.value);  //single string
//     // localStorage.setItem("key1", JSON.stringify(name:"SARBANI", age: 14 ));  
//     // setItem to store value 
//     alert(input.value);
// };
// btnAdd.addEventListener("click",myFunc);
// //wont exist in next tab it will show null coz of sessionStorage
// alert(localStorage.getItem("key1"));
// btnAdd.addEventListener("click",myFunc);
// btnRemove.addEventListener("click",() =>{
//     localStorage.removeItem("key1");  ////it will remove key 1
//     // sessionStorage.clear();     //it will remove all     
// });
// if(localStorage.getItem("key1")){
//     console.log(JSON.parse(localStorage.getItem("key1"))); 
//     // alert(localStorage.getItem,"key1 is present");
// }

//SetTimeOut and SetTimeInterval
//to delay the task 1000 ->1 seconds 2000->2 seconds

// // SetTime
// setTimeout(()=>{
//     console.log("This is delayed by 1 second");
//     },1000);            // 1 second delayed

// setInterval(()=>{
//     console.log("This is interval");
//     },1000);            // 1 seconds interval    

// const Intervalid = setInterval(() => {
//     console.log("This is  1 seconds");
//     }, 1000);   
//              // 5 seconds interval
// setTimeout(() => {
//    clearInterval(Intervalid);
//     }, 5000);            // 5 seconds interval

// //clock
// function UpdateClock(){
//     const clock = document.querySelector(".clock");
//     const now = new Date()
//     const hours= now.getHours().toString().padStart(2,"0");
//     // const hours= now.getHours().toString().padStart(2,"2"); to make two digit 1 lai 13
//     const minutes= now.getMinutes().toString().padStart(2,"0");
//     const seconds = now.getSeconds().toString().padStart(2,"0");
//     clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
// }
// setInterval(UpdateClock, 1000);

// // OOP(JS):         important in interview
// function person(name, age, address){        //constructor function
//     this.name = name;
//     this.age = age;
//     this.address = address;
// } const person1 = new person("Rainbow", 3, "Satungal");  //variable
//  const person2 = new person("Sky", 2, "Kalimati");  //variable
//  const person3 = new person("Kittu", 5, "Kalanki");  //variable
// console.log(person1, person2, person3);


// // OOP(JS):      very very important in interview
// function person(name, age, address){        //constructor function
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.greeting= function(){ 
//         let greet= `Hello my name is ${this.name}. I am ${this.age} yo old. My address is ${this.address}`; //it contain white space
//         return greet;
//     }
// } const person1 = new person("Rainbow", 3, "Satungal");  //variable
//  const person2 = new person("Sky", 2, "Kalimati");  //variable
//  const person3 = new person("Kittu", 5, "Kalanki");  //variable
// console.log(person1, person2, person3);
// console.log(person1.greeting());

//creating bank account of customer deposit and withdraw
// function BankAccount(customerName, balance=0){          //default 0
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();
//     this.deposit = function(amount){
//         this.balance +=amount;
// }
// this.withdraw = function(amount){
//     this.balance -= amount;
// };
// }
// const RainbowAccount = new BankAccount("Rainbow", 20000000000)
// const SkyAccount = new BankAccount("Sky", 5000000000)

// RainbowAccount.deposit(5000);
// SkyAccount.withdraw(1000);

//     console.log(RainbowAccount, SkyAccount);


// //linking form html
// function BankAccount(customerName, balance=0){          //default 0
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();
//     this.deposit = function(amount){
//         this.balance +=amount;
// }
// this.withdraw = function(amount){
//     this.balance -= amount;
// };
// }
// const addForm = document.querySelector("#customer");
// const customerName = document.getElementById("customerName");
// const balance = document.querySelector("#balance");

// const depositForm= document.querySelector("#depositForm");
// const accountNumber= document.querySelector("#accountNumber");
// const amount= document.querySelector("#amount");

// const withdrawForm= document.querySelector("#withdrawForm");            //to access withdraw form
// const withdrawAccountNumber= document.querySelector("#withdrawAccountNumber");
// const withdrawamount= document.querySelector("#withdrawamount");

// console.log(depositForm);
// let accounts= [];
// addForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let account = new BankAccount(customerName.value, +balance.value)
//     accounts.push(account);
// console.log(accounts);
// });
// depositForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//    let account = accounts.find(
//    (account) => account.accountNumber  === +accountNumber.value);
//    account.deposit(+amount.value);
//    console.log(accounts);
// });
// withdrawForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//      let account = accounts.find(
//         (account) => account.accountNumber === +withdrawAccountNumber.value);
//         account.withdraw(+amount.value) 
//      console.log(accounts);
// });


// using prototype and hiding deposit
// function BankAccount(customerName, balance=0) {
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();

//     // this.deposit = function(amount) {
//     //     this.balance += amount;
//     // };
// }
// // BankAccount.prototype.add="Citizens";
// BankAccount.prototype.add="Citizens";
// console.log(BankAccount.prototype);         //prototype is an empty object
// // deposit is added inside prototype so can hide the deposited amt

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount;
// };
// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// };
// const RainbowAccount= new BankAccount("Rainbow", 70000000);
// const SkyAccount= new BankAccount("Sky", 70000000);
// RainbowAccount.deposit(9000);
// SkyAccount.withdraw(6000);
// console.log(RainbowAccount, SkyAccount);


// //simple way of putting deposit into prototype using class
// // class-> templete of creating obj
// class BankAccount{
//     constructor(customerName, balance=0){      // constructor holds parameters
//         this.customerName= customerName;
//         this.balance= balance;
//         this.accountNumber= Math.floor(Math.random() * 1000000000);
//     }
//     // we can directly write the method here
//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }
// }
// const RainbowAccount= new BankAccount("Rainbow", 700);
// const SkyAccount= new BankAccount("Sky", 900);
// RainbowAccount.deposit(9000);
// SkyAccount.withdraw(60);

// console.log(RainbowAccount,SkyAccount);

//repeating code to use parents and child class-inheritance
// class BankAccount{
//     constructor(customerName, balance=0){      // constructor holds parameters
//         this.customerName= customerName;
//         this.balance= balance;
//         this.accountNumber= Math.floor(Math.random() * 1000000000);
//     }
//     // we can directly write the method here
//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }
// }
// class CurrentAccount extends BankAccount{
//     constructor(customerName, balance=0){      // constructor holds parameters
//        super(customerName,balance)
//     }   
//    // // separate 
//     // takeBusinessLoan(amount,taxRate){
//         // console.log(`your business loan is :$(amount)`)

//         takeBusinessLoan(amount,taxRate){
//             let ans = amount + (amount * taxRate )/100;
//             console.log(`your tax rate includes:${ans}`)
//     }

// }
// class SavingAccount extends BankAccount{
//     constructor(customerName, balance=0){      // constructor holds parameters
//        super(customerName,balance)
//     }   
//         takePersonalLoan(amount,taxRate){
//             let ans = amount + (amount * taxRate)/100;
//             console.log(`your tax rate includes :${ans}`)
//     }
// }
// // const RainbowAccount= new CurrentAccount("Rainbow", 700);
// const RainbowAccount= new CurrentAccount("Rainbow", 700);
// // const SkyAccount= new BusinessAccount("Sky", 900);
// const SkyAccount= new SavingAccount("Sky", 900);
// RainbowAccount.deposit(9000);
// SkyAccount.withdraw(60);
// // SkyAccount.takeBusinessLoan(60000);
// SkyAccount.takePersonalLoan(6000, 20);
// console.log(RainbowAccount,SkyAccount);


// ---------------Encaptulation Methods --------------------------------
//making private so that other cannot access using #
// class BankAccount {
//     customerName;
//     // using # to make balance private
//     #balance=0;
//     accountNumber;
//     constructor(customerName, balance=0){      // constructor holds parameters
//         this.customerName= customerName;
//         this.#balance= balance;
//         this.accountNumber= Date.now();
//     }
//     deposit(amount){
//     this.#balance += amount;
// }
//     withdraw(amount){
//     this.#balance -= amount;
// }
// getBalance(){
//     return this.#balance;
// }
// //making public methos to access leoaccount
// setBalance(amount){
//     this.#balance = amount;
// }
// }
// const FedrikAccount = new BankAccount("Fedrik",500);
// const LeoAccount = new BankAccount("Leo",50);
// LeoAccount.setBalance(900);
// console.log(LeoAccount.getBalance());
// console.log(FedrikAccount,LeoAccount);

// -----------------------------Static Property and Mehtod--------------------------
// ----instance is known as obj so no need to make obj-----
class Configure{
    static username="Rainbow ";
    static email="rain@gmail.com";
}
console.log(Configure.email);










































// git branch
// git branch branchname -- to create branch
// git checkout branchname
// git branch
// to add git 
// git add .
// git commit -m "abc"
// git push origin abc"
    //  git checkout master
    // git merge day3
    // git push origin master
// to check git branch 
// git branch
// to create new branch
// git branch branch_name












