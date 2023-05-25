$(document).ready(function () {
  // REQUIRING "appUrl" VARIABLE
  var inputPassword = $(".revealPassword input");
  var inputPasswordIcon = $(".revealPassword div img");
  var openEye = "../../images/svgs/ic_eye.svg";
  var closeEye = "../../images/svgs/ic_eye-off.svg";
  inputPasswordIcon.hide();

  $(() => {
    inputPassword.on("keyup", (e) => {
      var currentElementIcon = e.currentTarget.nextElementSibling.children[0];
      if (e.currentTarget.value != "") {
        currentElementIcon.removeAttribute("style");
      } else {
        currentElementIcon.setAttribute("style", "display: none;");
      }
    });

    inputPasswordIcon.on("click", (e) => {
      var currentElementIcon = e.currentTarget;
      var currentPasswordField = currentElementIcon.parentElement.previousElementSibling;
      if (currentPasswordField.getAttribute("type") == "password") {
        currentPasswordField.setAttribute("type", "text");
        currentElementIcon.setAttribute("src", closeEye);
        // console.log(currentPasswordField)
      } else {
        currentPasswordField.setAttribute("type", "password");
        currentElementIcon.setAttribute("src", openEye);
      }
    });
  });
});
