$(function () {
    $(".ground-login").css("display", "none");

    $("button.btn-daftar, button.btn-event").click(function () {
        var redirect = $(this).attr("data-redirect") ?? "";

        $(".ground-login").find("#simple-signup-redirect").val(redirect);
        $(".ground-login").fadeIn();
        $(".ground-login #email").trigger("focus");
    });

    $(".sign-up-form").fadeOut();
    $(".show-signup").on("click", function () {
        $(".sign-in-form").fadeOut("fast");
        $(".sign-up-form").fadeIn("fast");
    });

    $(".show-signin").on("click", function () {
        $(".sign-up-form").fadeOut("fast");
        $(".sign-in-form").fadeIn("fast");
    });

    $(".ic-close").on("click", function () {
        $(".ground-login").fadeOut(300);
        $(".revealPassword input").attr("type", "password");
        $(".revealPassword div img").attr("src", icEye);
    });

    $("#buttonCheckoutCourse").on("click", (e) => {
        $("#ajaxLogin").attr("data-code", "redirectNext");
    });

    // handle submit event of form
    $(document).on("submit", "#ajaxLogin", function (event) {
        event.preventDefault();
        var e = this;
        // change login button text before ajax
        $(this).find("[type='submit']").html("Sign In...");

        var loginData = $(this).serializeArray();
        loginData.push({ name: "from_route", value: url });

        if (event.target.getAttribute("data-code") == "redirectNext") {
            if (url === "front.courses.play") {
                loginData.push(
                    { name: "slug_kelas", value: slug },
                    { name: "main_leads", value: main_leads }
                );
            }
        }

        $.post($(this).attr("action"), loginData, function (data) {
            $(e).find("[type='submit']").html("Sign In");

            if (data.status) {
                if (path !== homePageUrl) {
                    if (progressBelajarPage !== data.redirect_location) {
                        if (data.custom == true) {
                            window
                                .open(data.redirect_location, "_blank")
                                .focus();
                        } else {
                            window.location = data.redirect_location;
                        }
                    } else {
                        // window.location = data.redirect_location;
                        setTimeout(() => {
                            window.location.reload();
                        }, 700);
                    }
                } else {
                    if (data.custom == true) {
                        window.open(data.redirect_location, "_blank").focus();
                    } else {
                        window.location = data.redirect_location;
                    }
                }
            }
        }).fail(function (response) {
            // handle error and show in html
            $(e).find("[type='submit']").html("Sign In");
            $(".alert").remove();

            const errorMessageEmail = document.getElementsByClassName(
                "error-message-email"
            );
            const errorMessagepassword = document.getElementsByClassName(
                "error-message-password"
            );

            // check old message error
            if (errorMessageEmail.length > 0) {
                errorMessageEmail[0].parentNode.removeChild(
                    errorMessageEmail[0]
                );
            }
            if (errorMessagepassword.length > 0) {
                errorMessagepassword[0].parentNode.removeChild(
                    errorMessagepassword[0]
                );
            }

            var erroJson = JSON.parse(response.responseText);
            for (var err in erroJson) {
                for (var errstr of erroJson[err]) {
                    const errorMessage = document.getElementsByClassName(
                        "error-message-" + err
                    );
                    while (errorMessage.length > 0) {
                        errorMessage[0].parentNode.removeChild(errorMessage[0]);
                    }

                    var errorElement =
                        '<small class="form-text text-muted text-red error-message-' +
                        err +
                        '">' +
                        errstr +
                        "</small>";
                    if (!errorMessage.length > 0) {
                        if (err == "password") {
                            $(".revealPassword").after(errorElement);
                        } else {
                            $("[name='" + err + "']").after(errorElement);
                        }
                    }
                }
            }

            // renewal token when user failed login
            grecaptcha.ready(function () {
                grecaptcha
                    .execute(configRecaptcha, {
                        action: "ajaxLogin",
                    })
                    .then(function (token) {
                        $("#g-recaptcha-response").val(token);
                    });
            });
        });
        return false;
    });
});

var simpleSignup = function (e) {
    e.preventDefault();
    var form = $(e.currentTarget);
    var url = form.attr("action");
    var formData = form.serialize();

    $(".simple-signup-error").addClass("d-none").text("");

    $.ajax({
        url: url,
        type: "POST",
        cache: false,
        data: formData,
        dataType: "json",
        success: function (response) {
            var redirect = form.find("#simple-signup-redirect").val();

            if (redirect != "") {
                window.location.href = redirect;
            } else {
                location.reload();
            }
        },
        error: function (response) {
            if (response.status == 422) {
                var errors = response.responseJSON.errors;
                $.each(errors, function (key, values) {
                    form.find("#simple-signup-error-" + key)
                        .text(values[0])
                        .removeClass("d-none");
                });
            }
        },
    });

    return false;
};

// set token captcha
grecaptcha.ready(function () {
    grecaptcha
        .execute(configRecaptcha, {
            action: "ajaxLogin",
        })
        .then(function (token) {
            $("#g-recaptcha-response").val(token);
        });
});

// automatic update token after 90 seconds
setInterval(function () {
    // grecaptcha.ready(function() {
    grecaptcha
        .execute(configRecaptcha, {
            action: "ajaxLogin",
        })
        .then(function (token) {
            $("#g-recaptcha-response").val(token);
        });
    // });
}, 90 * 1000);
