$(document).ready(function () {
    $("#placePhoto").on("click", function () {
        $("#avatar").trigger("click");
        console.log("asa");
    });
    $("#frame").on("click", function () {
        $("#avatar").trigger("click");
        console.log("asa");
    });

    if ($("input[type=file]").val() == "") {
        $(".btn-submit").attr("disabled", true);
    } else {
        $(".btn-submit").attr("disabled", false);
    }

    $("input[type=file]").on("change", function () {
        if ($("input[type=file]").val() == "") {
            $(".btn-submit").attr("disabled", true);
        } else {
            $(".btn-submit").attr("disabled", false);
        }
    });

    $(".avatar-image").change(validateFile);
});

function baseAvatar() {
    $("#placePhoto").show();
    $("#frame").hide();
}

function loadImg() {
    $("#frame").attr("src", URL.createObjectURL(event.target.files[0]));
    $("#frame").css("object-fit", "cover");
    $("#frame").show();
    $("#placePhoto").hide();
}

function validateFile() {
    const allowedExtensions = ["jpg", "png", "jpeg", "JPG", "PNG", "JPEG"],
        sizeLimit = 1_000_000; // 1 megabyte

    const { name: fileName, size: fileSize } = this.files[0];

    const fileExtension = fileName.split(".").pop();

    if (!allowedExtensions.includes(fileExtension)) {
        toastr.error("format file tidak sesuai");
        this.value = null;
        baseAvatar();
    } else if (fileSize > sizeLimit) {
        toastr.error("ukuran file maksimal 1MB");
        this.value = null;
        baseAvatar();
    } else {
        loadImg();
    }
}
