// Object Cloning

// 1. Iteration

let src = {value:10,
name:"krishna"};
let dest = {};

for(let key in src){
    dest[key] = src[key];
}

console.log(dest);

// 2.Assign

let method = {
    a:1,
    b:2,
    c:3
};

let clon_assign = {};

clon_assign = Object.assign({},method);

console.log(clon_assign)


// 3. Spread
const food = {lunch:'Roti',
            dinner:'Chawal'};
const cloneFood = {...food};

console.log(cloneFood);