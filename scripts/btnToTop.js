var btnTop = $(".btn-to-top");
btnTop.fadeOut();
$(document).on('scroll', function () {
    var y = $(this).scrollTop();
    if (y > 1700) {
        btnTop.fadeIn();
    } else {
        btnTop.fadeOut();
    }
});

document.querySelector(".btn-to-top").addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
