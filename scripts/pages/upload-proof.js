function validateFile(that) {
    const allowedExtensions = ["jpg", "png", "jpeg", "JPG", "JPEG", "PNG"],
        sizeLimit = 10_240_000; // 10 megabyte
    const { name: fileName, size: fileSize } = that.files[0];
    const fileExtension = fileName.split(".").pop();
    if (!allowedExtensions.includes(fileExtension)) {
        Swal.fire(
            "Foto Bukti Transfer tidak valid!",
            "Format file yang kamu upload tidak sesuai ketentuan.",
            "error"
        );
        $("#proof").val("");
        $("#proof-mobile").val("");
        $(".custom-file-input").text("Add new attachment..");
        return false;
    } else if (fileSize > sizeLimit) {
        Swal.fire(
            "Foto Bukti Transfer tidak valid!",
            "Ukuran file yang kamu upload tidak sesuai ketentuan maksimal 10MB.",
            "error"
        );
        $("#proof").val("");
        $("#proof-mobile").val("");
        $(".custom-file-input").text("Add new attachment..");
        return false;
    }
    return true;
}

$(document).on("change", ".payment-details input[type='file']", function (ev) {
    let that = this;
    if ($(this).val()) {
        let result = validateFile(ev.target);
        if (result == true) {
            var filename = $(this).val().split("\\");
            filename = filename[filename.length - 1];
            $(".custom-file-input").text(filename);
        }
    }
});

$(".btn-upload").click(() => {
    let proof_inp = $("#form-upload #proof").val();

    if (proof_inp == "") {
        $("#form-upload .proof-wrapper small.text-danger").removeClass(
            "d-none"
        );
        return false;
    } else {
        $("#form-upload .proof-wrapper small.text-danger").addClass("d-none");
        $("#form-upload").submit();
    }
});
$(".btn-upload-mobile").click(() => {
    let proof_inp = $("#form-upload-mobile #proof-mobile").val();

    if (proof_inp == "") {
        $("#form-upload-mobile .proof-wrapper small.text-danger").removeClass(
            "d-none"
        );
        return false;
    } else {
        $("#form-upload-mobile .proof-wrapper small.text-danger").addClass(
            "d-none"
        );
        $("#form-upload-mobile").submit();
    }
});

$(".payment-input.mobile").focus(function () {
    $(this).closest(".custom-file-wrapper").addClass("active");
});
$(".payment-input.mobile").focusout(function () {
    $(this).closest(".custom-file-wrapper").removeClass("active");
});
