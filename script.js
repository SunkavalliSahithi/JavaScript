//console.log("Hello Riya");
//var a = 10
//var b = 123.123
//var c = "Riya"
//var d = false
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
var a = 10
var b = "10"
if (a == b) {
    console.log("hello");
} else {
    console.log("hiiiiii");
}
//strict
if (a === b) {
    console.log("hello");
} else {
    console.log("hiiiiii");
}
//====
//!==
console.log(2 * 3);
console.log(2 ** 3);
for (let index = 1; index < 10; index++) {
    console.log(index);
}

var year = 2004;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("leap year");
} else {
    console.log("not a leap year");
}

let n = 10;
let e = false;
for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i == 0) {
        e = true;
        break;
    }
}

if(e) {
        console.log("prime");
    } else {
        console.log("Not a prime");
    }

