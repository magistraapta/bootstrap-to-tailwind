if (document.body.clientWidth > 1700) {
    $(".main-carousel-recommended").addClass("container-fluid");
}
$(".main-carousel-recommended")
    .removeClass("invisible")
    .removeClass("position-absolute")
    .flickity({
        // options
        cellAlign: "left",
        contain: true,
        groupCells: false,
        wrapAround: document.body.clientWidth > 1700 ? false : true,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
        selectedAttraction: 0.1,
        friction: 1,
        autoPlay: document.body.clientWidth > 1700 ? false : 2000,
    });

$(() => {
    $("#recommendedSkeleton").remove();
});
