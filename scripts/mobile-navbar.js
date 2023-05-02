// Mobile Navbar
function toggleMobileMenu($action) {
    // document.querySelector('.mobile-screen-cover').classList.toggle('d-none')

    if ($action === "close") {
        document
            .querySelector(".mobile-navbar-offcanvas")
            .classList.remove("extended");
    }

    document
        .querySelector(".mobile-navbar-offcanvas")
        .classList.toggle("is-open");
}

function scrollTop(step) {
    var start = document.querySelector(".mobile-menu").pageYOffset;
    var count = 0;
    var intervalRef = setInterval(
        (function (interval, curOffset) {
            return function () {
                curOffset -= interval * step;
                console.info("offset = " + curOffset);
                document.querySelector(".mobile-menu").scrollTo(0, curOffset);
                console.info(
                    "pageYoffset = " +
                    document.querySelector(".mobile-menu").pageYOffset
                );
                count++;
                if (count > 150 || curOffset < 0) clearInterval(intervalRef);
            };
        })(step, start--),
        50
    );
}

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return (
        evt.touches || // browser API
        evt.originalEvent.touches
    ); // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
            /* right swipe */
        } else {
            /* left swipe */
        }
    } else {
        if (yDiff > 0) {
            /* down swipe */
            // console.log('down')
            document
                .querySelector(".mobile-navbar-offcanvas")
                .classList.add("extended");
        } else {
            /* up swipe */
            // console.log('up')
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}

const myOffcanvasAuth = document.getElementById("authMobileNavbar");
if (myOffcanvasAuth !== null) {
    myOffcanvasAuth.addEventListener("hidden.bs.offcanvas", (event) => {
        checkScroll(false);
    });
}

const myOffcanvasGuest = document.getElementById("navbarMobileGuest");
if (myOffcanvasGuest !== null) {
    myOffcanvasGuest.addEventListener("hidden.bs.offcanvas", (event) => {
        checkScroll(false);
    });
}

$(".offcanvas-form-control.tt-input").keyup(function (event) {
    if (event.keyCode === 13) {
        $(this).closest(".offcanvas-form-group").submit();
    }
});

$('.navbar-search-btn').css({
    backgroundImage: `url(${appUrl}/themes/front/images/ic_search.svg)`,
    backgroundSize: '20px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
})
