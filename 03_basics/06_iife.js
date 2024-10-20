/* Immediately Invoked Function Expression (IIFE)

Ques: Why needed? 
Ans: Sometimes we write files which only contain database connection and we want that as soon our application
starts, the database connection inside that file should also start

Sometimes when we do not want global scope variable to create any problem in function. When we do not want 
pollution from global scope, then we create our seperate scope using IIFE and want to immediately execute it.

https://stackoverflow.com/questions/63607664/variables-from-iife-accessible-in-global-scope
*/


// using parentheses it creates a seperate scope
// first () is for function definition and second () for its execution
(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();
// iife is invoked but it does not know where to stop the context so ';' is necessary to end it 
// otherwise we get error "TypeError: (intermediate value)(...) is not a function" in other IIFEs

(() => {
    console.log(`DB CONNECTED TWO`);
})();


((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("arjun");


