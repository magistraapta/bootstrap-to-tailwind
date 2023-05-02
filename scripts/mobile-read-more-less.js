$(function () {
    $(".read_more_less").each(function (index) {
        $(this).on("click", function () {
            $(".paragraph_about").toggleClass("height-104");
            $(".paragraph_about").toggleClass("line-clamp-4");
            if ($(this).text() == "read more") {
                $(this).text("read less");
            } else {
                $(this).text("read more");
            }
        });
    });
});
