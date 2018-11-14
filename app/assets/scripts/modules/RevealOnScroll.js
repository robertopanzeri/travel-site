import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        //this.itemsToReveal = $('.feature-item'); // itemsToReveal is a collection of elements with class feature-item
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        var that = this; // 'this' is the RevealOnScroll object
        this.itemsToReveal.each(function(){ // 'each' is a jquery method for collections
            var currentItem = this; // 'this' is the single element of the collection
            new Waypoint({
                element: currentItem,
                handler: function() {
                  $(currentItem).toggleClass('reveal-item--is-visible');
                },
                offset: that.offsetPercentage
              });
        });
    }
}

export default RevealOnScroll;