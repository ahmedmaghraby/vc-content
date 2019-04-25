//Формируем ссылку с учетом базовой
$.url = function (url) {
    return $("base").attr("href") + url.substr(1);
}

var VC = {
    mobileNav: function () {
        $('body').toggleClass('__opened');
    },

    mobilePhone: function () {
        $('.head-phone_num').toggleClass('opened');
    },

    changeCostumers: function () {
        if (window.innerWidth > 640) {
            $('.your-costumers .planet .satelite').off('mouseenter').on('mouseenter', function () {
                var name = $(this).prop('class').split(' ')[1];

                $('.your-costumers .planet').removeAttr('class').addClass('planet ' + name);
                $('.your-costumers .planet-content').removeClass('opened');
                $('.your-costumers .planet-content.' + name).addClass('opened');
            });
        }
        else {
            $('.your-costumers .planet .satelite').off('mouseenter');
            $('.your-costumers .planet .satelite').off('click').on('click', function () {
                var name = $(this).prop('class').split(' ')[1];

                $('.your-costumers .planet').removeAttr('class').addClass('planet ' + name);
                $('.your-costumers .planet-content').removeClass('opened');
                $('.your-costumers .planet-content.' + name).addClass('opened');

                /* Анимируем скролл экрана к контенту, если разрешение ниже 640 или равно ему */
                $('html, body').animate({ scrollTop: $('.planet-info').offset().top }, 500);
            });
        }
    },

    changeJoined: function () {
        if (window.innerWidth > 800) {
            $('.join-info .joiner').off('mouseenter').on('mouseenter', function () {
                var name = $(this).prop('class').split(' ')[1];

                $('.join-dialog').removeAttr('class').addClass('join-dialog ' + name);
                $('.join-content').removeClass('opened');
                $('.join-content.' + name).addClass('opened');
            });
        }
        else {
            $('.join-info .joiner').off('mouseenter');
            $('.join-info .joiner').off('click').on('click', function () {
                var name = $(this).prop('class').split(' ')[1];

                $('.join-dialog').removeAttr('class').addClass('join-dialog ' + name);
                $('.join-content').removeClass('opened');
                $('.join-content.' + name).addClass('opened');
            });
        }
    },

    getParameterByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    addGoogleSearch: function () {
        if ($('#google-search').length) {
            $('#google-search').html('<gcse:searchresults-only/>');

            var cx = '009379243938517090614:hldteapo-am';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
        }
    }
}

$(function () {
    /*$('[type="submit"]').on('click', function (e) {
        e.preventDefault();
        var $form = $(this).parents('form');
        var form = $(this).parents('form')[0];

        var formData = new FormData();
        var redirectUrl = '';

        // Convert each form key to 'contact[key]'
        new FormData(form).forEach(function (value, key) {
            switch (key) {
                case 'RedirectUrl':
                    redirectUrl = value;
                    break
            }
            key = 'contact[' + key + ']';
            formData.append(key, value);
            //console.info("%s: %s", key, value);
        });

        $form.validate({
            rules: {
                To: {
                    email: true,
                    required: true
                }
            },
            errorPlacement: function (error, element) {
                element.addClass('error');
            }
        });

        if ($form.valid()) {
            $.ajax({
                url: $.url('/storefrontapi/feedback'),
                method: 'POST',
                data: formData,
                async: true,
                cache: false,
                processData: false,
                contentType: false,
                success: function (response) {
                    if (redirectUrl) {
                        window.location = redirectUrl;
                    }
                },
                error: function (a, b, c) {
                    alert('Error');
                }
            });
        }
    });*/

    $('body').delegate('[data-swipe="opened"]', 'click', function (e) {
        var li = $(this).parent('[data-id="swipeli"]');
        if (li.find('.sub-menu').length) {
            e.preventDefault();
            if (li.hasClass('opened')) {
                $('[data-id="swipeli"]').removeClass('opened');
            } else {
                $('[data-id="swipeli"]').removeClass('opened');
                li.addClass('opened');
            }
        }
    });

    $('body').delegate('.mobile-btn', 'click', function () {
        VC.mobileNav();
    });

    $('.head-phone').off('click').on('click', function () {
        VC.mobilePhone();
    });

    /* Меняем описание для текущей планеты и красим ее в соотв. цвет */
    VC.changeCostumers();

    /* Меняем описание для блока Joined */
    VC.changeJoined();

    /* Добавляем Google search */
    VC.addGoogleSearch();

    $(window).resize(function () {
        VC.changeCostumers();
        VC.changeJoined();
    });

    if ($('[name="Contact[PartnerId]"]').length > 0) {
        $('[name="Contact[PartnerId]"]').val(VC.getParameterByName("pid"));
    }

    if ($('[name="Contact[JobId]"]').length > 0) {
        $('[name="Contact[JobId]"]').val(VC.getParameterByName("jid"));
    }

    $('.header .nav__item').on('mousemove', function () {
        var self = $(this);

        $('.dropdown-overlay').remove();
        $('body').prepend('<div class="dropdown-overlay"></div>');

        $('.header .nav__item').removeClass('nav__item--active');
        $('.dropdown-menu').removeClass('opened');

        if (self.hasClass('nav__item--active')) {
            self.removeClass('nav__item--active');
            $('.dropdown-menu', self).removeClass('opened');
            $('.dropdown-overlay').remove();
        }
        else {
            self.addClass('nav__item--active');
            $('.dropdown-menu', self).addClass('opened');
        }
    });

    $('.dropdown-menu').on('mouseleave', function () {
        var self = $(this).parent('.nav__item');

        $('.header .nav__item').removeClass('nav__item--active');
        $('.dropdown-menu').removeClass('opened');

        if (!self.hasClass('nav__item--active')) {
            self.removeClass('nav__item--active');
            $('.dropdown-menu', self).removeClass('opened');
            $('.dropdown-overlay').remove();
        }
        else {
            self.addClass('nav__item--active');
            $('.dropdown-menu', self).addClass('opened');
        }
    });

    var signInContent = $('#signInContent');
    $('#signInLink').click(function (event) {
        event.stopPropagation();
        if (signInContent.is(':hidden'))
            signInContent.show();
        else
            signInContent.hide();
    });

    $(window).click(function (event) {
        if (!$(event.target).closest('#signInContent').length && signInContent.is(':visible'))
            signInContent.hide();
    });

    var carousel = $('.carousel__container');
    var carouselImages = $('.carousel__container img');
    carouselImages.css('height', '100%').css('display', 'none');

    for (var i = 0; i < carouselImages.length; i++)
        if (carouselImages[i].width > carousel.width())
            carouselImages[i].style.width = '99%';

    carouselImages.first().css('display', '');

    var count = carouselImages.length;
    var counter = 0;

    $('a.carousel__control--prev').click(function () {
        carouselImages.eq(counter).hide();
        if (counter == 0)
            counter = count - 1;
        else
            counter--;
        carouselImages.eq(counter).show();

        clearInterval(timerId);
        startInterval();
    });

    var carouselNext = $('a.carousel__control--next');
    carouselNext.click(function () {
        carouselImages.eq(counter).hide();
        if (counter == count - 1)
            counter = 0;
        else
            counter++;
        carouselImages.eq(counter).show();

        clearInterval(timerId);
        startInterval();
    });

    var timerId = '';
    function startInterval() {
        timerId = setInterval(function () { carouselNext.click(); }, 7000);
    };
    startInterval();

    $('.header-toggle').on('click', function () {
        $('body').addClass('swipe-open').prepend('<div class="overlay"></div>');
        $('.swipe').addClass('opened');
    });

    $('.swipe__close').on('click', function () {
        $('body').removeClass('swipe-open');
        $('.swipe').removeClass('opened');
        $('.overlay').remove();
    });

    $(':not(.nav__content) .nav__item').on('click', function () {
        var self = $(this);
        self.addClass('nav__item--active').siblings().removeClass('nav__item--active').addClass('nav__item--animated');
        self.removeClass('nav__item--animated');
        $('.nav__content').removeClass('nav__content--opened').eq(self.index()).addClass('nav__content--opened');

        $('.swipe__nav-item').removeClass('swipe__nav-item--show');
        $('.swipe__nav-item:nth-child(2)').addClass('swipe__nav-item--show');
    });

    $('.swipe__back').on('click', function () {
        $('.swipe__nav-item').removeClass('swipe__nav-item--show');
        $('.swipe__nav-item:nth-child(1)').addClass('swipe__nav-item--show');
        $('.nav__content').removeClass('nav__content--opened');
        $('.nav__item').removeClass('nav__item--animated nav__item--active');
    });

    $('body').delegate('.dropdown-overlay', 'click', function () {
        $('.header .nav__item').removeClass('nav__item--active');
        $('.dropdown-menu').removeClass('opened');
        $('.dropdown-overlay').remove();
    });
});
