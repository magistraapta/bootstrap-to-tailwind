//object is the target content (ex: card, sidebar, etc) that will apply the follow scroll effect
//sectionContainer is the parent element of the 'object'
//topMargin make a space between the 'object' and top of the window when follow scroll effect applied
//stopOn is an element that makes sectionContainer 'object' stop

function elementFollowScroll(
    object,
    sectionContainer,
    topMargin,
    stopOn = false
) {
    $(window).on("scroll", function (event) {
        if ($(window).width() > 991) {
            let originalY = sectionContainer.offset().top;
            let scrollTop = $(window).scrollTop();

            if (stopOn === false) {
                object.stop(false, false).animate(
                    {
                        top:
                            scrollTop < originalY
                                ? 0
                                : scrollTop - originalY + topMargin,
                    },
                    50
                );
            } else {
                object.stop(true, true).animate(
                    {
                        top:
                            scrollTop < originalY
                                ? 0
                                : scrollTop + originalY > stopOn.height()
                                ? Math.min(
                                      sectionContainer.height() -
                                          object.height() -
                                          52,
                                      scrollTop - originalY + topMargin
                                  )
                                : scrollTop - originalY + topMargin,
                    },
                    50
                );
            }
        } else {
            object.stop(false, false).css({ top: 0 });
        }
    });
}
