//console.log("Hello Riya");
//var a = 10
//var b = 123.123
//var c = "Riya"
//var d = false
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
// var a = 10
// var b = "10"
// if (a == b) {
//     console.log("hello");
// } else {
//     console.log("hiiiiii");
// }
// //strict
// if (a === b) {
//     console.log("hello");
// } else {
//     console.log("hiiiiii");
// }
// //====
// //!==
// console.log(2 * 3);
// console.log(2 ** 3);
// for (let index = 1; index < 10; index++) {
//     console.log(index);
// }

// var year = 2004;
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log("leap year");
// } else {
//     console.log("not a leap year");
// }

// let n = 10;
// let e = false;
// for(let i = 2; i <= Math.sqrt(n); i++) {
//     if(n % i == 0) {
//         e = true;
//         break;
//     }
// }

// if(e) {
//         console.log("prime");
//     } else {
//         console.log("Not a prime");
//     }

//Arrays
    
// var data = [10,34,242,'HELLO',true]


// for(let index = 0; index < data.length; index++) {
//     console.log(data[index]);
// }
// data.push(40)
// console.log(data)
// data.pop(34)
// data.unshift(12)
// console.log(data)

// //data.forEach()
// //data.map()
// //data.filter()
// //data.reduce
// //data.some()
// //data.every()


// var data1 = [10,20,30]
// var data2 = [40,50,60]
// var newData = [100, ...data1, ...data2]
// console.log(newData);


// var myObj = {
//     id: 1,
//     name: "riya",
//     age: 21
// }
// console.log(myObj.name);
// console.log(myObj.age);
// console.log(myObj.id);

// //JSON
// var userData = [
//     {
//         id: 1,
//         name: "riya",
//         age: 21,
//         techstack: ["devops","cloud","java fullstack"]
//     },
//     {
//         id: 2,
//         name: "sita",
//         age: 24,
//         techstack: ["html","css"]
//     }
// ]

// console.log(userData[1].name);

//Functions
// add(8,5)

// function add(a, b) {
//     console.log(a + b);
// }
// add(8, 5)

// function add(a, b) {
//     console.log(a - b);
// }

// add(8, 5)


//Function declaration
function add(a,b) {
    console.log(a - b);
}
//function expression and anonymous function
// const myFun = function (a, b){
//     console.log(a + b);

// }

// //arrow function
// const myFun1= (a, b) => {
//     return a + b;
// }

// const myFun2 = (a, b) => a + b
// add(3,5)

// console.log(myFun2(22,22));

// console.log(myFun1(1,22));

// console.log(myFun(2,22));


// let heading = document.getElementsByTagName("h1")
// heading[2].innerText = "bye bye"
// //console.log(heading[0].innerText);
// let para = document.getElementById("para")
// //para.textContent
// //para.innerText = "<b>adios</b>"
// para.innerHTML = "<b>adios</b>"
// let hola = document.getElementsByClassName('hola')
// hola[1].innerHTML = "buchi boo"
const change = () => {
    let display = document.getElementById('display')
    display.innerHTML = "ByeBye"
    display.style.backgroundColor = "pink"
    display.style.color = 'green'

 }


