$(".anim-title").hover(function () {
    console.log('test');
    $('.anim-polygon', this).toggleClass("anim-polygon-active");
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:3.5
        },
        1000:{
            items:4.5
        }
    }
})