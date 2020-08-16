
$(function () {


    /* Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight() - 200;
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed")
        }

    });


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let elementID = $(this).data("scroll")
        let elementoffset = $(elementID).offset().top

        nav.removeClass("show")

        if (elementoffset > 700) {
        $("html, body").animate({
            scrollTop: elementoffset - 200
        }, 900)
        } else if (elementoffset < 700) {
            $("html, body").animate({
            scrollTop: elementoffset
        }, 900)
        }
    });


        /* Burger menu */
    let nav = $("#nav")
    let navtoggle = $("navtoggle")
    $("#navtoggle").on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show")
    })
        /* reviews */
    let slider = $("#reviewsSlider");

    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    fade: true,
    arrows: false,
        dots: true,
    });
});
