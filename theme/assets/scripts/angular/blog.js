var storefrontApp = angular.module('storefrontApp');

storefrontApp.service('blogService', ['$http', function ($http) {
    return {
        getArticles: function (blogName, criteria) {
            return $http.post('storefrontapi/blog/' + blogName + '/search', criteria);
        }
    };
}]);

storefrontApp.controller('blogController', ['$scope', '$window', 'blogService', 'dialogService', function ($scope, $window, blogService, dialogService) {
    $scope.pageNumber = 2;
    $scope.articles = [];
    $scope.emailPattern = new RegExp(/((^|((?!^)([,;]|\r|\r\n|\n)))([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*))+$/);

    $scope.getArticles = function (pageNumber) {
        var blogSearchCriteria = {
            category: $window.currentBlogCategory,
            tag: $window.currentBlogTag,
            pageNumber: pageNumber,
            pageSize: $window.pageSize,
            excludedArticleHandles: $window.excludedArticleHandles
        };
        $scope.isLoading = true;
        blogService.getArticles($window.blogName, blogSearchCriteria).then(function (response) {
            _.each(response.data, function (article) {
                article.imageUrl = article.imageUrl || 'themes/assets/blue-abstract-background.jpg';
                article.authorImageUrl = BASE_URL + 'themes/assets/logo-mini.png';
                $scope.articles.push(article);
            });
            if (!response.data.length || response.data.length < $window.pageSize) {
                $scope.isLastPage = true;
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
}]);
