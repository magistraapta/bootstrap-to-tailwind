$(function () {
    var ttMenu = ".--bwa-mobile-version .tt-menu";
    var searchInput = ".--bwa-mobile-version #inputSearchModule3";
    var titleSearchRes = ".--bwa-mobile-version #titleSearched";
    $(ttMenu).css("left", "0");
    $(ttMenu).css("top", "100px");
    $(ttMenu).css("max-height", "65vh");

    $(searchInput).keyup(function () {
        if ($(searchInput).val() != "") {
            $(titleSearchRes).text("Results");
        } else {
            $(titleSearchRes).text("");
        }
    });

    $("#offcanvasSearchCourse").on("shown.bs.offcanvas", function () {
        $(this).find("[autofocus]").focus();
    });
});
