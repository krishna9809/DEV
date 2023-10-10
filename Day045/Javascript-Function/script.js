// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }

// Syntax

function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}



let multiply = function(a,b){
    return a+b;
}

let y = multiply(7);

console.log(y);
let result = multiply(8,8);
console.log(result);

let divde = function(a,b){
    return a/b;
}
let result1 = divde(54,9);
console.log(result1);

let sume = function Sum(a,b){
    let total = 0;
    for(let value of arguments){
        total = total + value;
    }
    return total;
}

let result_Of_Sum = sume(2,3,4,5,6,7,4,34,2,1,3);

console.log(result_Of_Sum);

// Rest Operator

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let u = sum(4, 9, 16, 25, 29, 100, 66, 77);

  console.log (u);


function fix(...args){
    let sum = 1;
    for(let j of args){
        sum *= j;
    }
    return sum;
}

let m = fix(4, 9, 16, 25, 29, 100, 66, 77);

console.log(m);

// Default Parameter

function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // Expected output: 10
  
  console.log(multiply(5));
  // Expected output: 5
  
// Getter

const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      return this.log[this.log.length - 1];
    },
  };
  
  console.log(obj.latest);
  // Expected output: "c"

  
// Setter

const language = {
    set current(name) {
      this.log.push(name);
    },
    log: [],
  };
  
  language.current = 'EN';
  language.current = 'FA';
  
  console.log(language.log);
  // Expected output: Array ["EN", "FA"]
  