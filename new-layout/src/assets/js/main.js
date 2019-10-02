(function ($) {
	if (!!$.validator) {
		$.validator.unobtrusive.adapters.addBool("mandatory", "required");
	}
} (jQuery));

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
	
	var requestDemoForm = $(".section--request form");
	if (requestDemoForm.length) {
		var requestDemoSegmentName = requestDemoForm.data("segment-name");
		$.validator.unobtrusive.parseElement($(".section--request form #agree"), true);
		
		$(document).on("change", ".section--request form input[name='access']", function() {
			if (this.id === "access1" && this.checked) {
				requestDemoForm.attr("data-segment-name", requestDemoSegmentName);
			} else {
				requestDemoForm.attr("data-segment-name", null);
			}
		});
		/*
		$(document).on("change", ".section--request #agree", function() {
			$(this).val(this.checked);
		});
		*/
		
		$(document).on("change", ".section--request form input[name='fullname']", function() {
			var value = $(this).val().trim();
			var firstName = value;
			var lastName = '';
			var index = value.indexOf(' ');
			if (index !== -1) {
				firstName = value.substring(0, index);
				lastName = value.substring(index + 1);
			}
			var form = $(this).closest('form').get(0);
			form.firstName.value = firstName;
			form.lastName.value = lastName;
		});
	}
	
	$(document).on("submit", "[data-animated-submit]", function(event) {
		var form = $(this);
		if (form.valid()) {
			var section = form.closest('.section--animated');
			$('.section__animate-item:nth-child(1)', section).addClass('animated');

			setTimeout(function() {
				$('.form', section).addClass('animated');
			}, 500);
			
			setTimeout(function() {
				$('.section__animate-item:nth-child(2)', section).addClass('completed');
			}, 650);

			setTimeout(function() {
				$('.thank-you', section).addClass('animated');
			}, 750);
		}
	});

	
	// ?utm_source=asset_downloads&
	//  utm_medium=email&
	//  utm_term=--Asset Type--&
	//  utm_content=--Asset Name--&
	//  utm_campaign=--Campaign--

	if (false) {
		var files = {};
		files['lavazza'] = '/assets/files/lavazza-case-study.pdf';
		var params = parseUrl();
		var attachUrl = files[params.utm_content];
		if (attachUrl) {
			window.location.assign(attachUrl);
		}
		
		function parseUrl() {
			var result = {};
			var vars = document.location.search.substring(1).split('&');
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split('=');
				result[pair[0]] = decodeURIComponent(pair[1]);
			}
			return result;
		}
	}
});


