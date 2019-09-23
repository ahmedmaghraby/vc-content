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

    $(':not(.nav__content) .nav__item').on('click', function() {
        var self = $(this);
        self.addClass('nav__item--active').siblings().removeClass('nav__item--active').addClass('nav__item--animated');
        self.removeClass('nav__item--animated');
        $('.nav__content').removeClass('nav__content--opened').eq(self.index()).addClass('nav__content--opened');

        $('.swipe__nav-item').removeClass('swipe__nav-item--show');
        $('.swipe__nav-item:nth-child(2)').addClass('swipe__nav-item--show');
    });

    $('.swipe__back').on('click', function() {
        $('.swipe__nav-item').removeClass('swipe__nav-item--show');
        $('.swipe__nav-item:nth-child(1)').addClass('swipe__nav-item--show');
        $('.nav__content').removeClass('nav__content--opened');
        $('.nav__item').removeClass('nav__item--animated nav__item--active');
    });

    $('body').delegate('.dropdown-overlay', 'click', function() {
        $('.header .nav__item').removeClass('nav__item--active');
        $('.dropdown-menu').removeClass('opened');
        $('.dropdown-overlay').remove();
    });

    $('.footer__nav').click(function () {
        var nav = $(this).children('.footer__t');
        if (nav.hasClass('footer__t--opened')) {
            nav.removeClass('footer__t--opened');
        } else {
            nav.addClass('footer__t--opened');
        }
    });

    var links = $('.list--team .list__descr a');

    for (var i = 0; i < links.length; i++)
        links[i].dataset.num = i;

    var members = $('.member');

    links.on('click', function () {
        var name = $(this).parent().siblings('.list__t').text();
        $('.modal-header text').text(name);
        members.hide();
        members.eq(this.dataset.num).show();
        $('body').addClass('modal-open');
        $('.modal').css('display', 'block');
    });

    $('.modal-close').click(function () {
        $('.modal').css('display', 'none');
        $('body').removeClass('modal-open');
    });
	
	$(document).on("submit", ".section--request form", function() {
		$(this).hide();
		$(".section--request .thanks-wrapper").show();
	});
	
	$(".section--request .send-again").on("click", function() {
		var form = $(".section--request form");
		$("input[type='text']", form).val("");
		form.show();
		$(".section--request .thanks-wrapper").hide();
	});
});