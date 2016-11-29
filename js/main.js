$(document).ready(function () {
    $('<button class="toggle1">More</button>').appendTo('h4');
    $('<button class="toggle2">Less</button>').appendTo('h4');

    $('.description').hide();

    $('button.toggle1').on('click', function () {
        $(this).closest('article').find('.description').slideDown('slow', function () {
            $(this).closest('article').addClass('italic');
        });
    });

    $('button.toggle2').on('click', function () {
        $(this).closest('article').find('.description').slideUp('slow', function () {
            $(this).closest('article').removeClass('italic');
        });
    });

    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });

// <!-- Responsive Tabs JS -->
    $(document).ready(function () {
        var $tabs = $('#horizontalTab');
        $tabs.responsiveTabs({
            rotate: false,
            startCollapsed: 'accordion',
            collapsible: 'accordion',
            setHash: true,
            disabled: [3, 4],
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
    });

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
});
