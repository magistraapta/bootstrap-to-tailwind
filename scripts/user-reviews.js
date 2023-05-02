$(function () {
    // Load More Reviews
    $(".see-more").on("click", function () {
        $div = $($(this).attr("data-div")); //div to append
        $link = $(this).attr("data-link"); //current URL
        $targetPage = $(this).attr("data-page"); //get the next page #
        $lastPage = $(this).attr("data-lastpage"); // pagination last page
        $loaderElement = $(".mobileReviewLoader"); //Loader
        $reviewAmount = "&review_amount=" + $(this).attr("data-rating");
        $btnLoadMoreReviews = $(".see-more");

        if ($(this).attr("data-rating")) {
            $href = $link + $targetPage + $reviewAmount;
        } else {
            $href = $link + $targetPage; //complete URL
        }

        $btnLoadMoreReviews.addClass("d-none");

        // Show Loader by selecting the previous element of the current button .see-more
        $loaderElement.removeClass("d-none");

        $.get($href, function (response) {
            // console.log(response)
            //append data
            if ($(window).width() > 575) {
                $html = $(response).find("#reviewsContentData").html();
            } else {
                $html = $(response).find("#reviewsMobileContainer").html();
            }
            $div.append($html);
        }).done(function (response) {
            // Hide Loader by selecting the previous element of the current button .see-more
            $loaderElement.addClass("d-none");

            showReadMoreButton()

            $btnLoadMoreReviews.attr("data-page", parseInt($targetPage) + 1); //update page #

            if ($(response).find("#reviewsContentData").html() != 'undefined' && $(response).find("#reviewsContentData").length > 0) {
                if ($targetPage == $lastPage) {
                    $btnLoadMoreReviews.addClass("d-none");
                } else {
                    $btnLoadMoreReviews.removeClass("d-none");
                }
            } else {
                $btnLoadMoreReviews.addClass('d-none')
            }
        });
    });

    // Filter reviews by rating
    $(".filterReviewsTrigger").on("click", function () {
        $url = $(this).attr("data-link");
        $ratingAmount = $(this).attr("data-rating");
        $btnLoadMoreReviews = $(".see-more");
        $loaderElement = $(".mobileReviewLoader"); //Loader
        $reviewContainer = $("#reviewsContentData");
        $textNoReview = $('#textNoReview')

        if ($ratingAmount) {
            $href = $url + '?review_amount=' + $ratingAmount;
            // Add attribute data-rating to load more button
            $btnLoadMoreReviews.attr("data-rating", $ratingAmount);
        } else {
            $href = $url + '?review_amount=';
            // Remove attribute data-rating from load more button
            if ($btnLoadMoreReviews.attr("data-rating")) {
                $btnLoadMoreReviews.removeAttr("data-rating");
            }
        }

        // Clear all review cards reviewContainer
        $reviewContainer.empty();
        $reviewContainer.addClass('d-none')

        // Reset pagination data
        $btnLoadMoreReviews.attr("data-page", "2");

        // Hide button load more reviews
        $btnLoadMoreReviews.addClass("d-none");

        $textNoReview.addClass('d-none')

        // Show loader
        $loaderElement.removeClass("d-none");

        // Remove active class from rating buttons
        $("#filterReviews").children().removeClass("active");
        // Add active class to clicked rating button
        $(this).addClass("active");

        var starsIcon = [`<img src="${appUrl}/themes/front/images/ic_star.svg" alt="ic-star"/>`, `<img src="${appUrl}/themes/front/images/ic_star.svg" alt="ic-star"/>`, `<img src="${appUrl}/themes/front/images/ic_star.svg" alt="ic-star"/>`, `<img src="${appUrl}/themes/front/images/ic_star.svg" alt="ic-star"/>`, `<img src="${appUrl}/themes/front/images/ic_star.svg" alt="ic-star"/>`]

        $.get($href, function (response) {
            var result = response.response.data;
            // console.log(response);

            // update data-lastpage with new pagination data
            $btnLoadMoreReviews.attr("data-lastpage", response.response.last_page);
            if (result.length) {
                var filteredData = result.map((data) => {
                    var loopStar = (() => { totalStars = ''; for (let i = 0; i < data.amount; i++) { totalStars += starsIcon[i]; } return totalStars })();

                    return (
                        `<div class="card-review h-100 d-flex flex-column">
                            <div class="d-flex flex-row align-items-center gap-3 mb-30">
                                <a href="${appUrl}/talent/${data.user.username}">
                                    <img src="${data.user.avatar}" class="user-avatar" alt="${data.user.name} at BuildWith Angga">
                                </a>
                                <div>
                                    <div class="username">
                                        ${data.user.name}
                                    </div>
                                    <p class="role">
                                        ${data.user.level_user}
                                    </p>
                                </div>
                            </div>

                            <div class="position-relative mb-30">
                                <p class="review" id="${data.id}">
                                    ${data.description}
                                    <span class="readMoreReview cursor-pointer d-none" id="buttonMore-${data.id}">read more</span>
                                </p>
                            </div>
                            <div class="rating mt-auto">
                                ${loopStar}
                            </div>
                        </div>`
                    );
                });
                $reviewContainer.prepend(filteredData);
            }
            // else {
            //     $reviewContainer.prepend('<div class="text-center">Belum ada review</div>');
            // }
        }).done((response) => {
            var result = response.response.data;
            // Hide loader
            $loaderElement.addClass("d-none");

            $reviewContainer.removeClass('d-none')
            // Run this fn after reviewContainer d-none removed
            showReadMoreButton()
            if (result.length > 5) {
                // Show button load more reviews
                $btnLoadMoreReviews.removeClass("d-none");
            }

            if (!result.length) {
                $reviewContainer.addClass('d-none')
                $textNoReview.removeClass('d-none')
            }
        });
    });

});

showReadMoreButton()

function showReadMoreButton() {
    // collapse review text
    $(".card-review p.review").map(function () {
        if ($(this).height() > 84 && !$(this).hasClass('collapsed')) {
            $(this).css({ maxHeight: '84px' })
            $(this).children('.readMoreReview').removeClass('d-none')
        }
    }).get();

    $('.readMoreReview').on('click', function (e) {
        var targetId = '#' + e.currentTarget.id
        $(targetId).addClass('d-none')
        $(targetId).parent('p.review').removeAttr('style')
        // add class to prevent clicked 'read-more' review hidden again
        $(targetId).parent('p.review').addClass('collapsed')
    })
}
