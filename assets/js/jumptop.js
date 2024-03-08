$(document).on("scroll", function() {
    if ($(document).scrollTop() >= 500) {
        $(".jumptop").removeClass("hidden");
    }
    else {
        $(".jumptop").addClass("hidden");
    }
});

$(".jumptop").on("click", function() {
    $(document).scrollTop(0);
});