function Rectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing');
    }
}

// object creation using function
let rectangleObject = new Rectangle(4,6);


rectangleObject.color = 'yellow';
console.log(rectangleObject);

// deletion

delete rectangleObject.color;
console.log(rectangleObject);

console.log(rectangleObject.constructor);


let ret = new Rectangle(2,3);
 

// Types in JS

// 1. Primitive Datatypes

// String
let String1 = "Stringss";

//boolean
let bool = true;

// Number
let num = 2;


// 2. Reference Datatypes

// object
const person = {firstName:"john",
                lastName: "Doe"};

// Array Object 
const Cars = ["Volvo" , "BMW", "Maruti"];

//Date Object
const date = new Date("2022-03-25");
