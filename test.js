var x= 10;
console.log(x);
let y = 12;
{
    let y = 13;
}
console.log("y=",y);
const PI= 3.14;
//PI= 2345;
console.log(PI);
const arr= [10,20,30];
arr.push(60);
arr[4]=80;
console.log(arr);
let user1= "Guest";
function showUser(){
    console.log("Hello I am an ",user1);
}
showUser();
(function tabhi(){
    console.log("test IITS");
})();
//anonymous function 
let show1 = function(){
    console.log("Anonoymous function")
}
//console.log(show1);
show1();
let show2= ()=>console.log("Arrow ...")
let add= (a,b)=>a+b;
show2();
let y2= add(3,4);
console.log(y2);

let sum = (a,b)=>{
    let result= a+b;
    return result;
}
console.log(sum(9,10));

let abhi = ()=>({
    Name:"Test"
})
console.log(abhi()); 

class student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }

}

const s1= new student("Ayaan", 85);
const s2= new student("Ayush", 95);
const s3= new student("Ritiks", 90);
console.log(s1);
console.log(s2);
console.log(s3);

let a= [12,34,56,78,90,67];
a.sort((a,b)=>a-b);
let highestMarks= a[3];
console.log(highestMarks);

function oddeven(c){
    if(c%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
let a2=[2,3,45,6,78,9];
for(let i=0;i<a2.length;i++){
    let result=oddeven(a2[i]);
    console.log(a2[i] + " is " + result);
}

let c1= (c)=>{
    if(c%2==0){
        return "even";
    }
    else{
        return  "odd";
    }
}

for(let i=0;i<a2.length;i++){
    let b2= c1(a2[i]);
     console.log(a2[i] + " is " + b2);

}

let greaterNum = (a,b)=>{
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
let c= 10;
let d=20;
console.log(greaterNum(c,d)); 

let ans= function(a,b){
    return a>b?a:b;
}
console.log(ans(c,d));

function calculator(a, b, operator) {
    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;

        case '-':
            result = a - b;
            break;

        case '*':
            result = a * b;
            break;

        case '/':
            if (b === 0) {
                return "Division by zero not allowed";
            }
            result = a / b;
            break;

        default:
            return "Invalid operator";
    }

    return result;
}
console.log(calculator(10, 5, '+')); // 15
console.log(calculator(10, 5, '-')); // 5
console.log(calculator(10, 5, '*')); // 50
console.log(calculator(10, 5, '/')); // 2
