$(function () {
    const searchParams = window.location.search.replace("?", "").split("=");
    const slugTips = searchParams[0];

    if (slugTips) {
        $("#discover-tab").removeClass("active").removeAttr("aria-selected");
        $("#discover-tab-panel").removeClass("active show");
        $(`#${slugTips}-tab`).addClass("active").attr("aria-selected", "true");
        $(`#${slugTips}-tab-panel`).addClass("active show");
    }
});

// {{-- START: Nav Tabs overflow gradient --}}
function setClasses(el) {
    const isScrollable = el.scrollWidth > el.clientWidth;

    // GUARD: If element is not scrollable, remove all classes
    if (!isScrollable) {
        document
            .querySelector("#tips-wrapper")
            .classList.remove("is-right-overflowing", "is-left-overflowing");
        return;
    }

    // Otherwise, the element is overflowing!
    // Now we just need to find out which direction it is overflowing to (can be both)
    const isScrolledToRight =
        el.scrollWidth <= Math.ceil(el.clientWidth + el.scrollLeft);
    const isScroledlToLeft = el.scrollLeft === 0;
    document
        .querySelector("#tips-wrapper")
        .classList.toggle("is-right-overflowing", !isScrolledToRight);
}

document.querySelector("#tipsTab").addEventListener("scroll", (e) => {
    const el = e.currentTarget;
    setClasses(el);
});

setClasses(document.querySelector("#tipsTab"));
// {{-- END: Nav Tabs overflow gradient --}}


// START: Set active nav tabs base on selected menu in tips details page
if (tabParam != "" && targetParam != "") {
    var tabId = $(`#${tabParam}`);
    var tabContent = $(`#${targetParam}`);
    $(tabId).addClass("active").attr("aria-selected", "true");
    $(tabContent).addClass("active show");
} else {
    $("#discover-tab").addClass("active").attr("aria-selected", "true");
    $("#discover-tab-panel").addClass("active show");
}
// END: Set active nav tabs base on selected menu in tips details page


// Tips Category slider config
document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('tipsTab');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});
