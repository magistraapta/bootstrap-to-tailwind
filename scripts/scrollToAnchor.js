document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        if (this.getAttribute("href") != "#" && this.getAttribute("href") != "#!") {
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});

function scrollIntoSection(section_id) {
    document.getElementById(section_id).scrollIntoView();
}
