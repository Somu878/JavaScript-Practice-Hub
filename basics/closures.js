function outerFunction(outerVariable) {
    // Inner function defined inside outer function
    function innerFunction(innerVariable) {
      // Accessing both outer and inner variables
      console.log(`Outer Variable: ${outerVariable}`);
      console.log(`Inner Variable: ${innerVariable}`);
    }
  
    // Returning the inner function from the outer function
    return innerFunction;
  }
  
  // Creating closures by calling outerFunction
  const closure1 = outerFunction('I am from closure 1');
  const closure2 = outerFunction('I am from closure 2');
  
  // Invoking the closures, they still have access to outerVariable
  closure1('I am from inner function 1');
  closure2('I am from inner function 2');
  