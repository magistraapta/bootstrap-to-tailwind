$(function() {
    $('[data-toggle="tooltip"]').tooltip()
    $("#toggle-collapse").click(function() {
        $(this).toggleClass("is-active")
        $(this).parents("aside").toggleClass("collapsed")
        $(this).parents("aside").find("ul").toggle()
    })
});