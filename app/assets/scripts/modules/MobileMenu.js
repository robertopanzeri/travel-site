import $ from 'jquery';

class MobileMenu {
    constructor() {
        /* spaghetti Js: everything together (selecting from the DOM + event handling + defining functionality)
        $('.site-header__menu-icon').click(function() {
            console.log("Clicked menu icon");
        });
        */
       // selecting from the DOM
       this.siteHeader = $('.site-header');
       this.menuIcon = $('.site-header__menu-icon');
       this.menuContent = $('.site-header__menu-content');
       // activating events handler
       this.events();
    }

    events() { //events handling
        //this.menuIcon.click(this.toggleMenu); // method toggleMenu is not called directly, in it the 'this' will refer to the object that the method was called on (menuIcon)
        this.menuIcon.click(this.toggleMenu.bind(this)); // passing to method toggleMenu the same 'this' reference used in the events method
    }

    toggleMenu () { // defining functionality
        // 'this' refers to the same object as in events
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }
}

export default MobileMenu;