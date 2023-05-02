function getPopupIncoming(item) {
    var id = $(item).data("id");
    var url = window.location.origin + "/course/ajax-detail" + "/" + id;

    $.get(url, function (data) {
        // Get Course Name
        $("#course-name").html(data.nama_kelas);

        // Get Course Price
        if (data.is_promo == 1) {
            $("#course-price").html(
                '<span class="disc-price blink_me">Rp. ' +
                    numberFormat(data.origin_price) +
                    "</span>Rp. " +
                    numberFormat(data.harga_kelas)
            );
        } else {
            $("#course-price").html(
                'Rp. <span class="">' +
                    numberFormat(data.origin_price) +
                    "</span>"
            );
        }

        // Get Course Img
        if (data.thumbnails[0]) {
            $(".ground .img-coming-course").attr(
                "src",
                data.thumbnails[0].thumbnail
            );
        }

        $(".btn-wishlist").html("Add to Wishlist");
        $(".btn-wishlist").attr("data-id", id);
        $(".txt-wishlist").text("");

        // If Already Add To Wishlist
        if (data.add_to_wishlist > 0) {
            $(".btn-wishlist").html(
                `<img src="${appUrl}/themes/front/images/ic_check_black.svg" class="icon me-2" alt="check"> Added to Wishlist`
            );
            $(".btn-wishlist")
                .removeClass("btn-primary")
                .addClass("btn-secondary");
            $(".txt-wishlist").text(
                "We will inform you when the course is ready"
            );
        }

        // Add Attribute Data ID
        $(".btn-wishlist").attr("data-id", id);

        $(".ground").delay(100).fadeIn();
    });
}

function numberFormat(nStr) {
    nStr += "";
    x = nStr.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
}
