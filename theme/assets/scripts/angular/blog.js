var storefrontApp = angular.module('storefrontApp');

storefrontApp.service('blogService', ['$http', function ($http) {
    return {
        getArticles: function (blogName, criteria) {
            return $http.post('storefrontapi/blog/' + blogName + '/search', criteria);
        }
    };
}]);

storefrontApp.controller('blogController', ['$scope', '$window', '$cookies', 'blogService', 'dialogService', function ($scope, $window, $cookies, blogService, dialogService) {
    $scope.pageNumber = 1;
    $scope.articles = [];
    $scope.emailPattern = new RegExp(/((^|((?!^)([,;]|\r|\r\n|\n)))([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*))+$/);

    var articleCategory = $cookies.get('currentCategory');

    $scope.getArticles = function () {
        if (articleCategory) {
            $scope.currentCategory = articleCategory;
            $cookies.remove('currentCategory');
            articleCategory = undefined;
        }

        var blogSearchCriteria = {
            category: $scope.currentCategory,
            pageNumber: $scope.pageNumber,
            pageSize: $window.pageSize,
            tag: $scope.currentTag,
            excludedArticleHandles: $window.excludedArticleHandles
        };
        $scope.isLastPage = true;
        $scope.isLoading = true;
        blogService.getArticles($window.blogName, blogSearchCriteria).then(function (response) {
            _.each(response.data, function (article) {
                article.imageUrl = article.imageUrl || 'themes/assets/blue-abstract-background.jpg';
                article.authorImageUrl = BASE_URL + 'themes/assets/logo-mini.png';
                $scope.articles.push(article);
            });
            if (!response.data.length || response.data.length < $window.pageSize) {
                $scope.isLastPage = true;
            } else {
                $scope.isLastPage = false;
            }
            $scope.pageNumber++;
            $scope.isLoading = false;
        });
    };

    $scope.displayResult = function () {
        if ($scope.blogSubscribeForm.$valid) {
            dialogService.showDialog(null, 'feedbackController', 'storefront.form-thank-you.tpl');
            $scope.email = null;
        } else {
            event.preventDefault();
        }
    };

    $scope.setCurrentCategoryFromArticle = function (category) {
        $cookies.put('currentCategory', category);
        $window.location.href = '/blog';
    }

    $scope.setCurrentCategory = function (category) {
        $scope.currentCategory = category;
        $scope.articles = [];
        $scope.pageNumber = 1;
        $scope.getArticles();
    };
}]);
