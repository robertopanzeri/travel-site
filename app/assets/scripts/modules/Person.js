/*
console.log("Hello, my name is John Doe and my favorite color is blue.");
console.log("Hello, my name is Jane Smith and my favorite color is green.");

function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
}

person("John Doe", "blue");
person("Jane Smith", "green");
*/

/*
var john = {
    name: "John Doe",
    favoriteColor: "blue",
    greet: function (name, favColor) {
        console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + ".");
    }
}

john.greet();
*/

function Person(fullName, favColor) { // Constructor function: defines the Person object
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () { // this refers to the current object
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

//export/expose parts of this file, make them accessable or callable from within the main App.js file. It can be whole object constructor function or just object properties or functions
/*
exports.exampleProperty = "Example property value";
exports.exampleFunction = function() {
    alert("Example");
}
*/
module.exports = Person; 