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
        var commitsEndpoint = "/repos/virtocommerce/vc-content/commits?path=";
        var githubAPI = "https://api.github.com";
        $http.get(githubAPI + commitsEndpoint + '/pages/' + articleUrl + '.md').then(function (resp) {
            var article = [];
            _.each(resp.data, function (z) {
                article.push(z.author);
            });
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
        });
    };

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
            compileElement(newDoc, 'page-content');
            compileElement(newDoc, 'menu');
            var bodyElement = window.document.getElementsByTagName('body')[0];
            angular.element(bodyElement).removeClass('__opened');
            compileElement(newDoc, 'menu-mobile');
            compileElement(newDoc, 'breadcrumbs');
            compileElement(newDoc, 'topics');
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
    };

    $scope.timeSpan = function (input) {
        var m = moment(input);
        var valid = m.isValid();

        if (valid)
            return m.fromNow();
        else
            return input;
    };

    function compileElement(doc, elementId) {
        var element = doc.getElementById(elementId);
        if (element && element.childNodes) {
            var content = $compile(element.childNodes)($scope);
            angular.element(window.document.getElementById(elementId)).html(content);
        }
    }
}]);
