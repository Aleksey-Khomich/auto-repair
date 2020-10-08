$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.arrow_up').fadeIn();
        } else {
            $('.arrow_up').fadeOut();
        }
    });
    $('.arrow_up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 700);
    });
});