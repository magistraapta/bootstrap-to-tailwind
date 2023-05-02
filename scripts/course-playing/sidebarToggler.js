const sidebarAside = document.getElementById("sbar-toggle");
const hamburgerIcon = document.getElementById("hamburgerOpenSidebar");
const mainWrapper = document.getElementById("mainWrapper");
// OpenIcon
hamburgerIcon.addEventListener("click", function (e) {
    sidebarAside.setAttribute("style",
        "left: 0; opacity: 1; visibility: visible;")
    mainWrapper.style.marginLeft = "340px"
    e.currentTarget.removeAttribute("style")
    e.currentTarget.classList.add('d-none')
    e.currentTarget.classList.add('position-fixed')
});

// close icon
function closeSidebar() {
    sidebarAside.setAttribute("style", "left: -350px; opacity: 0; visibility: hidden;")
    mainWrapper.style.marginLeft = "0"
    hamburgerIcon.setAttribute("style", "opacity: 1; height: 50px; visibility: visible;")
    hamburgerIcon.classList.remove('d-none')
    hamburgerIcon.classList.remove('position-fixed')
}
