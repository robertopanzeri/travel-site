var Person = require('./modules/Person'); // require is a Node command, not a runtime browser command

//access or call exported/exposed parts of the Person file. It can be whole object constructor function or just object properties or functions
/*
console.log(Person.exampleProperty);
Person.exampleFunction();
*/
var john = new Person("John Doe", "blue"); // a new instance of the Person object based on its constructor function
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
