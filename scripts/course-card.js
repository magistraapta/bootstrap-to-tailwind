// {{-- Remove course link when hover in icon patungan --}}
$(".icon-info-patungan").hover(
    function () {
        $('.link-course-title').addClass('pointer-events-none')
        $('.link-course-stretched').removeClass('stretched-link').addClass('pointer-events-none')
    },
    function () {
        setTimeout(function () {
            $('.link-course-title').removeClass('pointer-events-none')
            $('.link-course-stretched').addClass('stretched-link').removeClass('pointer-events-none')
        }, 1);
    }
);

// {{-- Setting TippyJS untuk icon promo patungan di course card --}}
var isMobile = $(window).width() < 576
tippy(".tippyTriggerId", {
    interactive: isMobile ? true : false,
    allowHTML: true,
    arrow: false,
    maxWidth: 300,
    placement: "bottom",
    touch: ["hold"],
    hideOnClick: false,
    trigger: 'mouseenter',
    theme: "bwa_patungan",
    animation: "shift-away",
});

tippy(".tippyInfoMobile", {
    interactive: true,
    allowHTML: true,
    arrow: false,
    maxWidth: 300,
    placement: "right",
    touch: ["hold"],
    theme: "bwa_patungan",
    animation: "shift-away",
});

