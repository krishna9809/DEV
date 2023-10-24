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
  