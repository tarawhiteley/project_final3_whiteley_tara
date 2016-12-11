$(document).ready(function () {

    // Custom jQuery -- Toggle button for menu section - more, less
    // First two lines create the buttons
    $('<button class="toggle1">More</button>').appendTo('h4');
    $('<button class="toggle2">Less</button>').appendTo('h4');
    // Description initially hidden and will toggle on/off with the more/less button
    $('.description').hide();
    // Upon clicking more, this slides the description and price down to show
    $('button.toggle1').on('click', function () {
        $(this).closest('article').find('.description').slideDown('slow', function () {
            $(this).closest('article').addClass('italic');
        });
    });
    // Upon clicking less, this slides the description and price up to hide
    $('button.toggle2').on('click', function () {
        $(this).closest('article').find('.description').slideUp('slow', function () {
            $(this).closest('article').removeClass('italic');
        });
    });

    // Responsive Tabs JS - menu section allows only one section to be shown at a time
    // Starts in collapsed accordion position on scmaller screens
    // Responds to horizontal tabs on larger screens
    var $tabs = $('#horizontalTab');
    $tabs.responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
    });

    //Responsive hamburger nav Bar, upon click of the hamburger icon, enlarges to show menu, closes when the x is clicked

    //this locates the hamburgler element and listens for a click on that. once clicked, it runs checkNav function
    document.getElementById('hamburgler').addEventListener('click', checkNav);
    // keyup eventListener refers to when a key is released, it will run the function (e). e.keycode implies if the keycode is 27, then run the function closeNav. keycode 27 is equivalent to the escape key, so if escape is pressed, the closeNav function will run. See below. If 27/escape is not released, then “false” means to skip this section.
    window.addEventListener('keyup', function (e) {
        if (e.keyCode === 27) closeNav();
    }, false);
    //this runs checkNav function -- if the hamburglar menu is active, calls the function closeNav, else if its inactive, call the function openNav
    function checkNav() {
        if (document.body.classList.contains('hamburgler-active')) {
            closeNav();
        } else {
            openNav();
        }
    }
    //stemming from above, if closeNav is called, it will remove the class hamburgler-active, closing the active menu.
    function closeNav() {
        document.body.classList.remove('hamburgler-active');
    }
    //stemming from above, if openNav is called, it will add the class hamburgler-active, opening the active menu.
    function openNav() {
        document.body.classList.add('hamburgler-active');
    }

    // Custom JavaScript - Popup RSVP form
    // Reservation form starts hidden
    var rsvpForm = document.getElementById('rsvpform');
    rsvpForm.classList.add('hide');
    // Upon clicking the button, form toggles visibility for completion
    var reserve = document.getElementById('rsvpButton');
    reserve.addEventListener('click', function () {
        var myElement = document.getElementById('rsvpform');
        myElement.classList.toggle('show');
    });
});
