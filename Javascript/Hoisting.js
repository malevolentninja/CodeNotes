// Hoisting 
// variable and functions can be used before being declared 

// console.log(notDeclared); // if used won't work as not been declared ie. not declared anywhere in the programme

console.log(definedLater);
var definedLater; //hoisted up but declared until later, to the programme still hoisted to the top
definedLater ='I am defined!' // defined here
console.log(definedLater) //will say I am defined

console.log(definedSimultaneously); 
var definedSimultanesiouly = ' I am defined!' // declaring and defining it bur definition is not hoisted to the top = undefined
console.log(definedSimultaneously) // this uncommented makes it defined

doSomethingElse();
function doSomethingElse(){  //function not delcared until after the funciton call, just like function called to top
  console.log('It worked!');
}

// next similar but different
functionVar(); // TypeError: functionVar is not a function!
var functionVar = function() { // variable be at the top but function is undefined
  console.log('It worked!');
}

// definied var before need to use and functions at the bottom of the scope to keep them tidy and out of the way. 
