var $ = require('jquery');
//var Person = require('./modules/Person'); // require is a Node command, not a runtime browser command (ES5)
import Person from './modules/Person'; // javascript command (ES6)

class Adult extends Person {//inherits everything form Person, and adds something else (ES6)
    payTaxes() {
        console.log(this.name + " pays 10$ taxes");
    }
}

//access or call exported/exposed parts of the Person file. It can be whole object constructor function or just object properties or functions
/*
console.log(Person.exampleProperty);
Person.exampleFunction();
*/
var john = new Person("John Doe", "blue"); // a new instance of the Person object based on its constructor function
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

$('h1').remove();
