// Spread Operator

let first = [1,2,3];
let second = [4,5,6];

let combin = [...first,...second];

console.log(combin);

// Iterating on Array

let arr = [10,20,30,40,50,60,70];
// For of Loop
for(let i of arr){
   console.log(i);
}
// For Each

arr.forEach(function(num){
    console.log(num);
});

// ForEach using Arrow Function 

arr.forEach(num=> console.log(num));

// Joining Array

let alpha = ['a','b','c','d','e'];

let joined = alpha.join(',');

console.log(joined);

// Split Method 

let message = 'This is my first message';
let parts = message.split(' ');
console.log(parts);

// Sorting Arrays:

let Numi = [9,0,4,3,2,5,6];
Numi.sort(); // Sort Method
console.log(Numi);

// Filtering Array:

let posAndneg = [1,2,3,-4,5,-2,-6];

let filtered = posAndneg.filter(function(posi) {
    return posi>=0;
})

console.log(filtered);

// Filtering Array using Arrow Function

let arrow_filtered = posAndneg.filter(posi => posi>=0);

console.log(filtered);

// Mapping Arrays

let num = [7,8,9,10];

let items = num.map(value=> 'Student_Id = '+value);
console.log(items);


// Mapping with Objects

let number = [1,2,3,4,5,-5,6,-4];

let post = number.filter(function(value){
    return value >= 0;
});

let num_item = post.map(function(num){
    return {value: num};
});

console.log(num_item)