//вызов мобильного меню
(function(){
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.mobile-burger-menu');
    burgerMenu.addEventListener('click', function () {
        mobileMenu.classList.add('mobile-menu--active')
    });   
    closeMenu.addEventListener('click', function(){
        mobileMenu.classList.remove('mobile-menu--active')
    })
}());

//переключение цифр в блоке Hero
(function(){
    const heroNumber = document.querySelector('.hero-number')
    const heroBtnPrev = document.querySelector('.hero-btn-prev')
    const heroBtnNext = document.querySelector('.hero-btn-next')
    heroBtnPrev.addEventListener('click',function() {
        heroNumber.innerHTML--;
    });
    heroBtnNext.addEventListener('click',function() {
        heroNumber.innerHTML++;
    })
}());

//слайдер SLICK
$(document).ready(function(){
    $('.news-cards').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        appendArrows: $('.news-wrap-btn')
    });
})