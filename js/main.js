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
});
