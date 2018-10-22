import $ from 'jquery';

class MobileMenu {
    constructor() {
        /* spaghetti Js
        $('.site-header__menu-icon').click(function() { // selecting from the DOM + event handling
            console.log("Clicked menu icon"); // defining functionality
        });
        */
       this.menuIcon = $('.site-header__menu-icon'); // selecting from the DOM
       this.menuContent = $('.site-header__menu-content'); // selecting from the DOM
       this.events();
    }

    events() { //event handling
        //this.menuIcon.click(this.toggleMenu); // method toggleMenu is not called directly, in it the 'this' will refer to the object that the method was called on (menuIcon)
        this.menuIcon.click(this.toggleMenu.bind(this)); // passing to method toggleMenu the same 'this' reference used in the events method
    }

    toggleMenu () { // defining functionality
        this.menuContent.toggleClass('site-header__menu-content--is-visible'); // 'this' refers to the same object as in events
    }
}

export default MobileMenu;