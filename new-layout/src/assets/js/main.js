$(function (){

    $('.header .nav__item').on('click', function() {
        var self = $(this);

        $('.dropdown-overlay').remove();
        $('body').prepend('<div class="dropdown-overlay"></div>');

        $('.header .nav__item').removeClass('nav__item--active');
        $('.dropdown-menu').removeClass('opened');

        if(self.hasClass('nav__item--active')) {
            self.removeClass('nav__item--active');
            $('.dropdown-menu', self).removeClass('opened');
            $('.dropdown-overlay').remove();
        }
        else {
            self.addClass('nav__item--active');
            $('.dropdown-menu', self).addClass('opened');
        }
    });

    $('.header-toggle').on('click', function() {
        $('body').addClass('swipe-open').prepend('<div class="overlay"></div>');
        $('.swipe').addClass('opened');
    });

    $('.swipe__close').on('click', function() {
        $('body').removeClass('swipe-open');
        $('.swipe').removeClass('opened');
        $('.overlay').remove();
    });

    $('.nav__label').on('click', function() {
        $('.swipe__nav-item').removeClass('swipe__nav-item--show');
        $('.swipe__nav-item:nth-child(2)').addClass('swipe__nav-item--show');
    });

    $('.swipe__back').on('click', function() {
        $('.swipe__nav-item').removeClass('swipe__nav-item--show');
        $('.swipe__nav-item:nth-child(1)').addClass('swipe__nav-item--show');
        $('.swipe .nav__input').prop('checked', false);
    });

    $('body').delegate('.dropdown-overlay', 'click', function() {
        $('.header .nav__item').removeClass('nav__item--active');
        $('.dropdown-menu').removeClass('opened');
        $('.dropdown-overlay').remove();
    });

});
