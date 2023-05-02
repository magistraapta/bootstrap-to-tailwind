$(function () {
    // scroll list video in sidebar to scrolled class
    var $container = $("aside, .sidebar-content");
    var $scrollTo = $('.scrolled');

    $container.animate({
        scrollTop: $scrollTo.offset().top - $container.offset().top - 250,
        scrollLeft: 0
    }, 500);
})