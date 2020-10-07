$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".header_center").toggleClass("open");
    $(".header_right").toggleClass("header_right_show");
    $("body").toggleClass("body_overflow");
});

$(".header_center a").click(function () {
    $("#navToggle").toggleClass("active");
    $(".header_center").toggleClass("open");
    $(".header_right").toggleClass("header_right_show");
    $("body").toggleClass("body_overflow");
});