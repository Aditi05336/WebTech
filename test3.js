/*const user = {
    name: "Abhishek",
    age:40,
    welcome:function(){
        console.log("$(this.name) , welcome to ES6")
        console.log(this)
}
};
user.welcome()
user.name ="Test"
user.welcome()


// inner function
function outer(){
    let x = 10;
    function inner(){
        console.log(x);
    }
    inner();
}
outer();

let a =5;
function outer(){
    let b=10;
    function inner(){
        let c= 15;
        console.log(a,b,c);
    }
    inner();
}
outer();
*/

let abc = {
    name: "Abhishek",
    outer: function () {
        console.log("Here in log", this.name);

        const inner = () => {
            console.log("in inner", this.name);
        };

        inner();
    }
};

abc.outer();
