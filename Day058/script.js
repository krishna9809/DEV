// the call stack

function greeting() {
    // [1] Some code here
    sayHi();
    // [2] Some code here
  }
  function sayHi() {
    return "Hi!";
  }
  
  // Invoke the `greeting` function
  greeting();
  
  // [3] Some code here

  
// The Event Loop

function foo(b) {
    const a = 10;
    return a + b + 11;
  }
  
  function bar(x) {
    const y = 3;
    return foo(x * y);
  }
  
  const baz = bar(7); // assigns 42 to baz

// setTimeout

setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
