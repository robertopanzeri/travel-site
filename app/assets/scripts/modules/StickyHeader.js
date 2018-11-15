import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyLoaded = $('.lazyload');
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('.large-hero__title');
        this.createHeaderWaypoint();

        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createPageSectionWaypoints();

        this.addSmoothScrolling();

        this.refreshWaypoints();

    }

    refreshWaypoints() {// When lazy loaded items are loaded, waypoints have to be recalculated
        this.lazyLoaded.on('load', function() {
            Waypoint.refreshAll();// It refreshes ALL waypoints of the window, even if declared in other modules, so no need to repeat this code anywhere else
        });
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0], //first item in a jQuery array is a pointer to the native DOM element
            handler: function () {
                that.siteHeader.toggleClass('site-header--dark');
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function () {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;