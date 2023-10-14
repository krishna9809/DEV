// querySelector

let get = document.querySelector('p') 

get.innerHTML = "Everything matlb hai"

// querySelectorAll

document.querySelectorAll('p');


// let content = document.querySelector('p')
// content.textContent;
// 'Everything matlb hai'

// let con = document.querySelector('p');
// con.innerText;
// 'Everything matlb hai'
// con.outerHTML
// '<p class="para">Everything matlb hai</p>'

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}


