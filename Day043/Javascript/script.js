// Array

const fruit = ['mango','e', 9, true];

console.log(fruit);
console.log(fruit[0]);
console.log(fruit.length);

// Insertion

let num = [1,2,3,4];
// 1.in the End

num.push(5);

console.log(num);

// 2. in the Begin

num.unshift(0);

console.log(num);

// 3. in the middle;

num.splice(2,0,'a','b','c');

console.log(num);


// S e a r c h i n g

let alpha = ['q','j','f','h'];

console.log(alpha.indexOf('h'));

// if element not present

console.log(alpha.indexOf(7));

// we want to check elemnt exist or not 

console.log(num.includes(4));

// Array of Object

let courses = [
    {no:1,name:'B-tech'},
    {no:2,name:'B-pharma'}
];

console.log(courses.indexOf({no:1,name:'B-tech'}));


let nume = courses.find(function(nume){
    return nume.name == 'B-tech';
})

console.log(nume);

// More readable with Arrow function

let nume1 = courses.find( nume1 => nume1.name == 'B-pharma');

console.log(nume1);

// Emptying an Array

let house_no = [1,2,3,4,5,6,7];

house_no.length = 0;

console.log(house_no);

// Combining and Slicing 

let number = [1,2,3];
let number1 = [4,5,6];

let combin = number.concat(number1);

console.log(combin);

//Slicing

console.log(combin.slice(3,5));