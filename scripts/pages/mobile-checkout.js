$(() => {
    $("#navMidtransPaymentTab").on("click", function () {
        $("#bankDetailsCard").addClass("d-none");
        $("#btnMidtransPayment").removeClass("d-none");
        $("#btnManualPayment").addClass("d-none");
        $(".price_details_title").html("Details");
    });

    $("#navManualPaymentTab").on("click", function () {
        $("#bankDetailsCard").removeClass("d-none");
        $("#btnManualPayment").removeClass("d-none");
        $("#btnMidtransPayment").addClass("d-none");
        $(".price_details_title").html("Details (Manual)");
    });
});
