$(document).ready(function(){

    // 
    $('#cover').owlCarousel(
        {
            loop: true,
            nav: false,
            dots:true,
            items: 1,
            autoplay: true
        }
    );

    $(".visible").click(function(){
        var img_src = $(this).attr("src");
        $(".display_img img").attr("src", img_src);
    });

});