// Fetch API


// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     //let output = await content.json();
//     console.log(content);
// }
// utility();

// async function helper() {

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Babbar',
//           body: 'Tagdi Body ',
//           userId: 1998,
//           weight: 90,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }


// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();

function init() {
  let name = "Mozilla"; 
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  return displayName;
}
let a = init();
a();

