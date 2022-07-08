$(function() {
    $('.slider').slick({
        arrows: true,
        fade: true,
        autoplay: true,
        infinite: false,
        autoplaySpeed: 3000,
        prevArrow: $('.slider__arrow-prev'),
        nextArrow: $('.slider__arrow-next'),
    })

    const arrowItems = document.querySelectorAll('.slider__arrow')
    for(let i = 0; i < arrowItems.length; i++) {
        if(i > 1 && i < arrowItems.length - 2) {
            arrowItems[i].classList.add('slider__arrow--blue')
            arrowItems[i].children[0].classList.add('slider__arrow--white')
        }
        if(i == 1 || i == arrowItems.length - 2) {
            arrowItems[i].classList.add('slider__arrow--blue')
            arrowItems[i].children[0].classList.add('slider__arrow--white')
        }
    }
})