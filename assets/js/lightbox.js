$(".lightbox").each(function() {
    $(this).on("click", function() {
        $("#lightbox").modal("toggle");
        $("#lightboxTitle").text($(this).attr("alt"));
        $("#lightboxImage").attr("src", $(this).attr("src"));
    });
});
