/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Person = __webpack_require__(1); // require is a Node command, not a runtime browser command

console.log(Person.exampleProperty);
Person.exampleFunction();
/*
var john = new Person("John Doe", "blue"); // a new instance of the Person object based on its constructor function
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();
*/

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

//export/expose parts of this file, make them accessable or callable from within the main App.js file. It can be whole objects or just object properties or functions
exports.exampleProperty = "Example property value";
exports.exampleFunction = function() {
    alert("Example");
}
//module.exports = Person; 

/***/ })
/******/ ]);