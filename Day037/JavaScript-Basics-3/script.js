let marks = 98;

if (marks >= 90) {
    console.log('A');
}

else if (marks >= 80) {
    console.log('B');
}

else if (marks >= 70) {
    console.log('C')
}

else {
    console.log('D');
}

// Switch Statement

let num = 3;

switch (num) {
    case 1: console.log('A');
        break;
    case 2: console.log('B');
        break;
    case 3: console.log('C');
        break;
    default: console.log('D');
}


// L O O P 

// for loop 

for(let i = 0; i < 6; i = i + 1){
    console.log(i);
}

// while loop

let i = 11;
while(i<=15){
    console.log(i);
    i++;
}

// do-while loop
let s = 21;
do{
  console.log(s);
  s++;
}while(s <= 25);


// for-in loop

let n = 0;

var numbers = [45, 4, 9, 16, 25];

for(n in numbers){
    console.log(numbers[n]);
}


// for-Of loop

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
