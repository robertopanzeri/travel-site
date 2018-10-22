/* no functions/parameters: a fixed instruction for each person (code repeating, no flexibility)
console.log("Hello, my name is John Doe and my favorite color is blue.");
console.log("Hello, my name is Jane Smith and my favorite color is green.");
*/

/* a unique function (with parameters) that does only one thing: a call specifying parameters for each person
function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
}
person("John Doe", "blue");
person("Jane Smith", "green");
*/

/* variables with properties and methods (code repeating): a call with no parameters for each person
var john = {
    name: "John Doe",
    favoriteColor: "blue",
    greet: function (name, favColor) {
        console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + ".");
    }
}
var jane = {
    name: "Jane Smith",
    favoriteColor: "green",
    greet: function (name, favColor) {
        console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + ".");
    }
}
john.greet();
jane.greet();
*/

/* a constructor function that defines the Person object with properties and methods, can be instanced and initialized as needed (ES5)
function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () { // this refers to the current object
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    };
}
*/

/* export/expose parts of this file, make them accessable or callable from within the main App.js file. (ES5)
// it can be just object properties or functions
exports.exampleProperty = "Example property value";
exports.exampleFunction = function() {
    alert("Example");
}
// or the whole object constructor function
module.exports = Person;
*/

/* a class that defines the Person object with a constructor function and methods, can be instanced and initialized as needed (ES6)*/
class Person {
    constructor(fullName, favColor) { // constructor function is run as soon as an object is created
        this.name = fullName;
        this.favoriteColor = favColor;
    }
    greet() {
        console.log("Hi, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    };
}
/* export/expose the whole object constructor function to make it accessable or callable from within the main App.js file. (ES6) */
export default Person;
