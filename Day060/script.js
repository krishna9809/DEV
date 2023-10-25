new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      }),
    );
  });

  let meraPromise = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('I am inside Promise');
    }, 5000);
    resolve(2233);
  });

  console.log('Pehle');


// then() function

const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "Success!"
});


let promise5 = new Promise(function(resolve, reject){
  setTimeout( ()=> {
    console.log('settimeout1 started');
  },2000);
} )

promise5.then(() => {
  let wadaa2 = new Promise(function(resolve, reject){
    resolve("wadaa 2 resolved");
  })
  return wadaa2;
}).then((value)=> console.log(val) );