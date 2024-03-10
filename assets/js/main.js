$(".lightbox, .gallery-item").each(function() {
    $(this).on("click", function() {
        $("#lightbox").modal("toggle");
        $("#lightboxTitle").text($(this).attr("alt"));
        $("#lightboxImage").attr("src", $(this).attr("src"));
    });
    $(this).css('cursor', 'pointer');
});

if ($("#jump-top").length) {
    $(document).on("scroll", function() {
        if ($(document).scrollTop() >= 500) {
            $("#jump-top").removeClass("hidden");
        }
        else {
            $("#jump-top").addClass("hidden");
        }
    });
    
    $("#jump-top").on("click", function() {
        $(document).scrollTop(0);
    });
}

$(".border-hover").hover(
    function() {
        $(this).addClass("selected");
    }, 
    function() {
        $(this).removeClass("selected");
    }
);
