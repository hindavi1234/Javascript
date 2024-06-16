// Immediately Invoked Function Expression
// ->we face Problems due to global scope polution and for removing the pollution we used IIFE

(function chai(){
    // named IIFE
    console.log('DB connected');
})();

(
    (name) => {
        console.log(`DB CONnected to ${name}`)
    }
)("Sachin");

(
    (num1, num2) => {
        console.log(`The sumation is ${num1+num2}`);
        
    }
)(12,23);