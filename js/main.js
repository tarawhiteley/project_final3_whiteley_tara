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
// Starts in collapsed position on scmaller screens
    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });

    var $tabs = $('#horizontalTab');
    $tabs.responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        click: function (e, tab) {
            $('.info').html('Tab <strong>' + tab.id + '</strong> clicked!');
        },
        activate: function (e, tab) {
            $('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
        },
        activateState: function (e, state) {
            //console.log(state);
            $('.info').html('Switched from <strong>' + state.oldState + '</strong> state to <strong>' + state.newState + '</strong> state!');
        }
    });
    $('#start-rotation').on('click', function () {
        $tabs.responsiveTabs('startRotation', 1000);
    });
    $('#stop-rotation').on('click', function () {
        $tabs.responsiveTabs('stopRotation');
    });
    $('#start-rotation').on('click', function () {
        $tabs.responsiveTabs('active');
    });
    $('#enable-tab').on('click', function () {
        $tabs.responsiveTabs('enable', 3);
    });
    $('#disable-tab').on('click', function () {
        $tabs.responsiveTabs('disable', 3);
    });
    $('.select-tab').on('click', function () {
        $tabs.responsiveTabs('activate', $(this).val());
    });

//Responsive hamburger  Nav Bar
    document.getElementById('hamburgler').addEventListener('click', checkNav);
    window.addEventListener('keyup', function (e) {
        if (e.keyCode === 27) closeNav();
    }, false);

    function checkNav() {
        if (document.body.classList.contains('hamburgler-active')) {
            closeNav();
        } else {
            openNav();
        }
    }

    function closeNav() {
        document.body.classList.remove('hamburgler-active');
    }

    function openNav() {
        document.body.classList.add('hamburgler-active');
    }

//RSVP scroll
    var th = document.getElementById('thumbnails');
    th.addEventListener('click', function (e) {
        var t = e.target, new_src = t.parentNode.href,
            large = document.getElementById('large'),
            cl = large.classList,
            lgwrap = document.getElementById('lg-wrap');
        lgwrap.style.backgroundImage = 'url(' + large.src + ')';
        if (cl) cl.add('hideme');
        window.setTimeout(function () {
            large.src = new_src;
            if(cl) cl.remove('hideme');
        }, 50);
        e.preventDefault();
    }, false);

// Custom JavaScript - Popup RSVP form
// Reservation form starts hidden
    var formHide = document.getElementById('rsvpform');
    formHide.classList.add('hide');
// Upon clicking the button, form toggles visibility for completion
    var reserve = document.getElementById('rsvpButton');
    reserve.addEventListener('click', function () {
        var myElement = document.getElementById('rsvpform');
        myElement.classList.toggle('show');
    });
});
