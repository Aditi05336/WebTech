 let number =[10,20,30];
let [a,b,c]=number;
console.log("a= ",a);
console.log("b =",b);

let values = [1,2,3];
let [x,y,z,u]=values;
console.log("x= ",x);
console.log("y=",y);
console.log("y=",z);
console.log("y=",u);

const arr=[10,20,30,"Abhishek"]
const[a1,b1,c1,d1]=arr
const[x1,...y1]=arr
console.log(a1,b1,c1,d1)
console.log("y1=",y1)

//object clone == to learen about the chnging values in object
let myK = {
    name: "Abhishek",
    age:"23",
    key:"XYZ"


}
let duplicate = {...myK,key:"ABC"}// default values


duplicate ['Add']="GZB"
console.log("myobj: ",myK)
console.log(duplicate)
console.log("name: ",myK.name)

let myobj1={
    name:"Abhi",
    age:"23",
    key:"XYZ"
}

myobj1.name="Krish";
let{name,age:CurrentAge}=myobj1;
console.log(name);
console.log(CurrentAge)


let employee={
    name:"Aditi",
    age:"24",
    id:"GOOGLE23456",
    designation :"product Manager"

}

let newEmployee= {...employee,designation:"CEO"}
console.log("employee: ",employee)
console.log("newEmployee: ",newEmployee)

 const [first , second ,...rest] = [ 1, 2, 3, 4, 5]
console.log(first)
console.log(second)
console.log(rest)

function sum(...numbers){
    return numbers.reduce((a,b) => a+b, 0);
}
console.log(sum(1,2,3,4,5))
//spread means expand combining 2 arrays
const arr2 = [10, 20 , 30]
const arr1 = [40 , 50 ,60 ]
const finalarr = [...arr2 , ...arr1]
console.log(finalarr) 

console.log("Helo 1")
setTimeout(() =>{
    console.log("Hello 2")
},2000)
console.log("Hello 3")


console.log("1. start ")
setTimeout(() =>{
    console.log("2. Cake is in the oven ")
},2000)
console.log("3 Cake is ready ")


function bakeCake(myCallBack){
    console.log("1.Cake is in Oven ");
    setTimeout(()=>{
        console.log("2. Cake is baked");
        myCallBack();
    },2000)
}
bakeCake(()=>{
    console.log("3. Now i can eat the cake")
})

function bakeCake(){
    return new Promise((myResolve, myReject) => {
        console.log("1. Baking a cake")
        setTimeout(()=>{
            let flag = true;
            if(flag){
                myResolve("2. Cake is ready ")
            }
            else{
                myReject("2. Cake is burnt");

            }
            },2000)
    });
}

bakeCake().then((msg)=>){
    console.log("")
}


 