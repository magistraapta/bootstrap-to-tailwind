var buttonDark = document.querySelectorAll("#toggle-color-mode");
function checkTheme() {
  const wrapper = document.querySelector("body");

  for (let i = 0; i < buttonDark.length; i++) {
    if (localStorage.theme === "light") {
      buttonDark[i].checked = false;
      wrapper.classList.add("light");
      wrapper.classList.remove("dark");
    } else if (localStorage.theme === "dark") {
      buttonDark[i].checked = true;
      wrapper.classList.add("dark");
      wrapper.classList.remove("light");
    } else {
      buttonDark[i].checked = false;
      wrapper.classList.add("light");
      wrapper.classList.remove("dark");
      localStorage.theme = "light";
    }
  }
}

for (let j = 0; j < buttonDark.length; j++) {
  buttonDark[j].addEventListener("click", () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    checkTheme();
  });
}

window.addEventListener("load", checkTheme);