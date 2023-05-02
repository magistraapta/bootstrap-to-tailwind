$(function () {
    $("div.bagian-bootcamp").slice(0, 3).show();
    $("#loadMoreMateri").on("click", function (e) {
        e.preventDefault();
        $("div.bagian-bootcamp:hidden").slice(0, 3).slideDown();
        if ($("div.bagian-bootcamp:hidden").length == 0) {
            $("#loadMoreMateri").fadeOut("slow");
        }
        $("html,body").animate(
            {
                scrollTop: $(this).offset().top - 350,
            },
            250
        );
    });
});
