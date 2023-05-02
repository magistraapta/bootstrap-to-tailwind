$(() => {
    $("#search-input").on("keyup", function (e) {
        var value = $(this).val().toLowerCase();
        if (!value) {
            onFilter(value);
        }
        // $(this).preventDefault();
        if (e.key === "Enter" || e.keyCode === 13) {
            var value = $(this).val().toLowerCase();
            onFilter(value);
        }
    });
});

function submitSearch() {
    var value = $("#search-input").val().toLowerCase();
    onFilter(value);
}

function onFilter(value) {
    var hasResult = false;
    $(".item-roadmap-master .item-roadmap .item-pricing .title").filter(
        function () {
            var toggle = $(this).text().toLowerCase().indexOf(value) > -1;
            if (toggle) {
                $(this).parent().parent().removeClass("d-none");
                hasResult = true;
                if ($("#empty-state")) {
                    $("#empty-state").remove();
                }
            } else {
                $(this).parent().parent().addClass("d-none");
            }
        }
    );

    if (!hasResult) {
        if (Object.keys($("#empty-state")).length === 0) {
            $("#handbook").append(
                '<div id="empty-state">' +
                    '<p class="text-center subtitle-primary">Your result is not found.</p>' +
                    "</div>"
            );
        }
    }
}
