$(function() {
    // slider
    $('.slider').slick({
        arrows: true,
        fade: true,
        autoplay: true,
        infinite: false,
        autoplaySpeed: 3000,
        prevArrow: $('.slider__arrow-prev'),
        nextArrow: $('.slider__arrow-next'),
    })

    // slider arrows-color logic
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

    // popup
    const popupLinks = document.querySelectorAll('.popup-link')
    const popup = document.querySelector('.popup')

    if(popupLinks.length > 0) {
        for(let i = 0; i < popupLinks.length; i++) {
            const popupLink = popupLinks[i]
            popupLink.addEventListener('click', () => {
                popupOpen()
            })
        }
    }

    const popupCloseIcon = document.querySelectorAll('.close-popup')
    if(popupCloseIcon.length > 0) {
        for(let i = 0; i < popupCloseIcon.length; i++) {
            const element = popupCloseIcon[i]
            element.addEventListener('click', () => {
                popupClose()
            })
        }
    }

    const popupOpen = () => {
        popup.classList.add('open')
        popup.addEventListener('click', (e) => {
            if(!e.target.closest('.popup__content')) {
                popupClose()
            }
        }) 
    }

    const popupClose = () => {
        popup.classList.remove('open')
    }

    // header position fixed

    $(window).scroll(function() {                  // assign scroll event listener

        var currentScroll = $(window).scrollTop(); // get current position

        if (currentScroll >= 200) {           // apply position: fixed if you
            $('.header__top').css({                      // scroll to that element or below it
                position: 'fixed',
                top: '0',
                left: '0',
                justifyContent: 'space-around',
                width: '100%',
                backgroundColor: '#FFFFFF',
                height: '100px'
            });
            $('.header__content').css({
                paddingTop: '224px'
            })
        } else {                                   // apply position: static
            $('.header__top').css({                      // if you scroll above it
                position: 'static',
                height: '224px'
            });
            $('.header__content').css({
                paddingTop: '0'
            })
        }

    });

})