function disableScroll() {
    document.querySelector("html").classList.add("disable-scroll");
    document.querySelector("body").classList.add("disable-scroll");
}

function enableScroll() {
    document.querySelector("html").classList.remove("disable-scroll");
    document
        .querySelector(".mobile-navbar-offcanvas")
        .classList.remove("extended");

    document.querySelector("body").classList.remove("disable-scroll");
}

function checkScroll($type) {
    if ($type == true) disableScroll();
    else enableScroll();
}
