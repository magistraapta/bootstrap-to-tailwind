$(() => {
    var nextUrl = $(".navigation.d-none .active.scrolled")
        .parent()
        .next()
        .children("a.btn-secondary")
        .attr("href");
    var btnNext = $("#nextTutorial");

    if (nextUrl) {
        btnNext.removeClass("d-none");
        btnNext.on("click", (e) => {
            window.location.href = nextUrl;
        });
    } else {
        btnNext.parent().remove();
    }

    // auto scroll ebook materi list
    if ($(window).width() > 575) {
        var $container = $("#listMateriDesktop");
        var $scrollTo = $(".scrolled");

        $container.animate(
            {
                scrollTop:
                    $scrollTo.offset().top - $container.offset().top - 250,
                scrollLeft: 0,
            },
            500
        );
    }
});
