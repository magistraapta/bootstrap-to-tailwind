function check(selected) {
    const id = document.getElementById("others");
    const btn = document.getElementById("btn-continue");

    if (selected.value != "default") {
        btn.removeAttribute("disabled");
        btn.style.cursor = "pointer";
        if (selected.value == "Others") {
            console.log("ab");
            id.classList.remove("d-none");
            id.classList.add("d-block");
            id.required = true;
        } else {
            id.classList.remove("d-block");
            id.classList.add("d-none");
            id.required = false;
        }
    } else {
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
    }
}
