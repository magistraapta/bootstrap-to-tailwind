var currentUrl = window.location.host;
var listener = new window.keypress.Listener();
const myModalEl = document.getElementById("quickSearchModal");
var inputField = document.getElementById("inputSearchModule3");
var btnClear = document.getElementById("clear_field");
// var mostSearchedCourses = document.getElementById("mostSearchedCourses");

// Keypress Trigger
listener.simple_combo("ctrl p", function (e) {
    $("#quickSearchModal").modal("show");
});
// ./end

// Submit quick search by press Enter
document.getElementById("inputSearchModule3").onkeydown = function (e) {
    if (e.keyCode == 13) {
        document.getElementById("quickSearchForm").submit();
    }
};

myModalEl.addEventListener("shown.bs.modal", (event) => {
    inputField.focus();

    // if input not empty, remove mostSearchedCourses when modal show
    // if (inputField.value != "") {
    //     btnClear.classList.remove("d-none");
    //     document
    //         .querySelector(".quick-search-modal .tt-menu")
    //         .classList.remove("d-none");
    //     mostSearchedCourses.classList.add("d-none");
    // }

    // Remove class 'sticky-top' in member.blade.php
    if (currentUrl.includes("class.") && !window.location.href.includes('course_playing')) {
        document.querySelector(".bg-nav").classList.remove("sticky-top");
    }
});

myModalEl.addEventListener("hide.bs.modal", (event) => {
    // add class 'sticky-top' in member.blade.php
    if (currentUrl.includes("class.") && !window.location.href.includes('course_playing')) {
        document.querySelector(".bg-nav").classList.add("sticky-top");
    }
});

inputField.addEventListener("input", function () {
    if (inputField.value != "") {
        btnClear.classList.remove("d-none");
        document
            .querySelector(".quick-search-modal .tt-menu")
            .classList.remove("d-none");
        // mostSearchedCourses.classList.add("d-none");
    } else {
        btnClear.classList.add("d-none");
        // mostSearchedCourses.classList.remove("d-none");
    }
});

btnClear.addEventListener("click", function () {
    inputField.value = "";
    document.querySelector(".tt-hint").value = "";
    btnClear.classList.add("d-none");
    document
        .querySelector(".quick-search-modal .tt-menu")
        .classList.add("d-none");
    // mostSearchedCourses.classList.remove("d-none");
});

// New loaded courses data
// Change input value base on tt-cursor > course title
inputField.addEventListener("keyup", (e) => {
    const key = e.key;

    if (key == "ArrowUp" || key == "ArrowDown") {
        var courseContent = document.querySelector(".course-content.tt-cursor");
        var isCourseElement = document.contains(courseContent);
        var ttInput = document.querySelector(".tt-input");
        var ttHint = document.querySelector(".tt-hint");

        if (isCourseElement) {
            if (courseContent.children.length >= 3) {
                var courseUrl = courseContent.children[2].getAttribute("href");
                var courseTitle = document.querySelector(
                    ".course-content.tt-cursor .course-title"
                );
                ttHint.classList.add("d-none");
                e.currentTarget.value = courseTitle.textContent;

                enterUrl(courseUrl);
            } else {
                ttHint.classList.remove("d-none");
            }
        }
    }
});

function enterUrl(url) {
    document.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            window.location.href = url;
        }
    });
}
