// Load More Courses
$(() => {
    $(document).on("click", "#loadMoreCourses button", function (e) {
        e.preventDefault();

        var searchQuery = $("#inputSearchModule3").val();
        var skipData = $(this).attr("data-skip"); //get next data skip
        var link = `/autocomplete/?search=${searchQuery}&skip=${skipData}`;
        var loaderAnimation = $(this).next();
        var totalCourses = $(".tt-dataset-courses").children().length - 1;

        // hide button, show loader
        $(this).toggleClass("d-none");
        loaderAnimation.toggleClass("d-none");

        // remove mobile search-canvas input focus
        if ($(window).width() < 576) {
            $(".offcanvas-form-control").blur();
        }

        $.get(link, function (response) {
            var fetchedData = response.map((data) => {
                var discPriceOri = data.origin_price_formatted
                    ? '<div class="disc-price blink_me">' +
                      data.origin_price_formatted +
                      "</div>"
                    : '<div class="disc-price blink_me"> Rp 0</div>';
                var priceOri = data.origin_price_formatted
                    ? '<div class="promo-price">' +
                      data.origin_price_formatted +
                      "</div>"
                    : '<div class="promo-price"> Rp 0</div>';
                var discPrice = data.harga_kelas_formatted
                    ? '<div class="promo-price">' +
                      data.harga_kelas_formatted +
                      "</div>"
                    : '<div class="promo-price"> Rp 0</div>';
                var price =
                    data.origin_price_formatted != data.harga_kelas_formatted
                        ? discPriceOri + discPrice
                        : priceOri;

                if (data.is_plus == 1) {
                    var priceDeal = '<div class="promo-price"> Rp 0</div>';
                } else {
                    if (
                        typeof data.origin_price_formatted !== "undefined" &&
                        data.origin_price_formatted
                    ) {
                        var priceDeal = price;
                    } else {
                        var priceDeal = '<div class="promo-price"> Rp 0</div>';
                    }
                }

                var isJoinedLabel = `<div class="labelJoinedCourse ms-0">
                    <img src="${appUrl}/themes/front/images/ic_check_fill.svg" alt="">
                    <p class="__text">
                        JOINED
                    </p>
                </div>`;

                var rowPricing = data.is_joined
                    ? isJoinedLabel
                    : `<div class="price">${priceDeal}</div>`;

                return `<div class="course-content tt-suggestion tt-selectable">
                        <div class="thumbnail">
                            <img src="${
                                appUrl + data.thumbnails[0].thumbnail
                            }" alt="Kelas ${data.nama_kelas}"/>
                        </div>
                        <div>
                            <div class="course-title">${data.nama_kelas}</div>
                            ${rowPricing}
                        </div>
                        <a href="${appUrl}/kelas/${
                    data.slug_kelas
                }?main_leads=searchsuggestion" class="stretched-link"></a>
                    </div>`;
            });

            // insert result
            $("#loadMoreCourses").before(fetchedData);
        }).done((response) => {
            // update data-skip
            var newSkip = parseInt(skipData) + 1;
            $(this).attr({ "data-skip": newSkip });

            if (response != "") {
                //show button, hide loader
                $(this).toggleClass("d-none");
                loaderAnimation.toggleClass("d-none");
            } else {
                // hide loader when response == []
                loaderAnimation.toggleClass("d-none");
                $("#loadMoreCourses").append(
                    `<p class="text-center text-xs text-grey m-0">
                        End of result <br> ${totalCourses} courses
                    </p>`
                );
            }
        });
    });
});
