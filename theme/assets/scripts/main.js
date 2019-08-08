$(function () {

    $('.header .nav__item').on('click', function () {
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

var storefrontApp = angular.module('storefrontApp', ['hljs', 'angularMoment']);

storefrontApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        rewriteLinks: false
    });
}]);

storefrontApp.controller('docsController', ['$scope', '$http', '$location', '$compile', '$window', 'moment', function ($scope, $http, $location, $compile, $window, moment) {
    $scope.showAll = false;
    $scope.loading = true;
    $scope.getCurrentArticleUrl = function (articleUrl) {
        var commitsEndpoint = "/repos/virtocommerce/vc-content/commits?path="
        var githubAPI = "https://api.github.com";
        $http.get(githubAPI + commitsEndpoint + '/pages/' + articleUrl + '.md').then(function (resp) {
            var article = [];
            _.each(resp.data, function (z) {
                article.push(z.author);
            })
            $scope.authors = _.map(_.groupBy(article,
                function (author) {
                    if (author == null) // handle null exception
                        return "";
                    return author.login;
                }),
                function (grouped) {
                    return grouped[0];
                });
            $scope.loading = false;
        })
    }

    $scope.moment = moment;
    $scope.navigateUrl = function (url, event) {
        event.preventDefault();
        event.stopPropagation();
        angular.element($window).scrollTop(0);
        $scope.loading = true;
        $location.path(url);
        $http.get(url, { cache: true }).then(function (response) {
            var parser = new DOMParser();
            var newDoc = parser.parseFromString(response.data, 'text/html');
            var codeBlocks = newDoc.getElementsByTagName('code');
            _.each(codeBlocks, function (codeBlock) {
                hljs.highlightBlock(codeBlock);
            });
            var content = $compile(newDoc.getElementById('page-content').childNodes)($scope);
            angular.element(window.document.getElementById('page-content')).html(content);
            var menu = $compile(newDoc.getElementById('menu'))($scope);
            angular.element(window.document.getElementById('menu')).html(menu);
            var bodyElement = window.document.getElementsByTagName('body')[0];
            angular.element(bodyElement).removeClass('__opened');
            var menuMobile = $compile(newDoc.getElementById('menu-mobile').childNodes)($scope);
            angular.element(window.document.getElementById('menu-mobile')).html(menuMobile);
            var breadcrumbs = $compile(newDoc.getElementById('breadcrumbs').childNodes)($scope);
            angular.element(window.document.getElementById('breadcrumbs')).html(breadcrumbs);
            var topics = $compile(newDoc.getElementById('topics'))($scope);
            angular.element(window.document.getElementById('topics')).html(topics);
            window.document.getElementsByTagName('title')[0].innerText = newDoc.getElementsByTagName('title')[0].innerText;
            $scope.loading = false;
            $scope.disqus = DISQUS;
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = $window.absoluteUrl;
                    this.page.url = $window.absoluteUrl;
                }
            });
        });
    }

    $scope.timeSpan = function (input) {
        var m = moment(input);
        var valid = m.isValid();

        if (valid)
            return m.fromNow();
        else
            return input;
    }
}])
