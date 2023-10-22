

for(let i = 1 ; i <=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;

    document.body.appendChild(newElement);
}




// optimising a bit
const t1 = performance.now();

let myDiv = document.createElement('div');

for(let i = 1 ; i <=100 ; i++){
    let element = document.createElement('p')
    element.textContent = 'This is Para ' + i;
   
    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);

const t2 = performance.now();

console.log("this took " + (t2-t1) + " ms");

// Document Fragment Concept

let Fragment = document.createDocumentFragment();

for(let i = 1 ; i <=100 ; i++){
    let element = document.createElement('p')
    element.textContent = 'This is Para ' + i;
   
    Fragment.appendChild(element);
}

document.body.appendChild(Fragment);

