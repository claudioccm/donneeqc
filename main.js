$(function() {
    function debounce(fn, wait) {
        var timer = null;

        return function () {
            var args = arguments,
                context = this;

            clearTimeout(timer);

            timer = setTimeout(function () { fn.apply(context, args); }, wait);
        };
    }

    $('ul.nav.nav-pills li').mouseenter(debounce(function() {
        $(this).find('ul').fadeIn();
    }, 250));

    $('ul.nav.nav-pills li').mouseenter(function() {
        $(this).siblings().find('ul').hide();
    });

    $('ul.nav.nav-pills li').mouseleave(function() {
        $(this).find('ul').fadeOut();
    });

    $('.module-heading.media .media-content').each(function() {
        if ($(this).closest('.span6').index() == 0) {
            $(this).append('<i class="md md-unfold-less"></i>');

        } else {
            $(this).append('<i class="md md-unfold-more"></i>');
        }
    });

    $('.row .span6').eq(0).addClass('open');

    $('.row .span6').click(function() {
        $(this).siblings().find('.unstyled.dataset-list').slideUp();
        $(this).siblings().find('i.md').removeClass('md-unfold-less');
        $(this).siblings().find('i.md').addClass('md-unfold-more');
        $(this).find('.unstyled.dataset-list').slideDown();
        $(this).find('i.md').removeClass('md-unfold-more');
        $(this).find('i.md').addClass('md-unfold-less');
        $(this).addClass('open');
        $(this).siblings().removeClass('open');

        return false;
    });
});
