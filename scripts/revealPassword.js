$(document).ready(function () {
  // REQUIRING "appUrl" VARIABLE
  var inputPassword = $(".revealPassword input");

  var inputPasswordIcon = $(".revealPassword div .icon");
  var openEye = "../../images/svgs/ic_eye.svg";
  var closeEye = "../../images/svgs/ic_eye-off.svg";

  var inputPasswordIcon1 = $(".revealPassword div .icon1");
  var openEye1 = "images/svgs/ic_eye.svg";
  var closeEye1 = "images/svgs/ic_eye-off.svg";

  inputPasswordIcon.hide();
  inputPasswordIcon1.hide();

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

    inputPasswordIcon1.on("click", (e) => {
      var currentElementIcon = e.currentTarget;
      var currentPasswordField = currentElementIcon.parentElement.previousElementSibling;
      if (currentPasswordField.getAttribute("type") == "password") {
        currentPasswordField.setAttribute("type", "text");
        currentElementIcon.setAttribute("src", closeEye1);
        // console.log(currentPasswordField)
      } else {
        currentPasswordField.setAttribute("type", "password");
        currentElementIcon.setAttribute("src", openEye1);
      }
    });
  });
});
