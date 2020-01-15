var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('communityController', ['$scope', '$q', '$window', '$location', '$localStorage', 'communityService', 'customerService', function ($scope, $q, $window, $location, $localStorage, communityService, customerService) {
    $scope.loaded = false;
    $scope.githubUser = {};

    customerService.getCurrentCustomer().then(function (user) {
        $scope.user = user.data;
        if (!_.isEmpty($scope.user.addresses)) {
            if (!angular.isUndefined(_.first($scope.user.addresses).organization))
                $scope.user.organization = _.first($scope.user.addresses).organization;
        }

        var githubAccount = _.find(user.data.externalLogins, { loginProvider: 'GitHub' });

        var stackExchangeAccount = _.find(user.data.externalLogins, { loginProvider: 'StackExchange' });

        if (!angular.isUndefined(githubAccount)) {
            communityService.getGithubProfile(githubAccount.providerKey).then(function (response) {
                var profile = response.data;
                $scope.user.firstName = profile.name || profile.login;
                $scope.user.organization = profile.company;

                communityService.getGithubStatistic(profile.login).then(function (statistic) {
                    $scope.github = { poolRequest: statistic.data.total_count };
                    $scope.githubUser = profile;
                    if (!profile.name) {
                        $scope.github.userName = profile.login;
                    }
                    else
                        $scope.github.userName = profile.name;

                    communityService.checkUserPersonalData($scope.user, $scope.github.poolRequest).then(function(resp) {
                        $scope.percentage = resp.percentage;
                        $scope.points = resp.points;
                        $scope.rating = resp.rating;
                        $scope.loaded = true;
                    });
                });
            });
        }

        if (!angular.isUndefined(stackExchangeAccount)) {
            $q.all(
                    [
                        //get info
                        communityService.getStackExchangeProfile(stackExchangeAccount.providerKey),
                        communityService.getStackExchangeQuestions(stackExchangeAccount.providerKey),
                        communityService.getStackExchangeAnswers(stackExchangeAccount.providerKey)
                    ])
                .then(function(results) {
                    $scope.stackExchange = {
                        userName: results[0].data.items[0].display_name,
                        raiting: results[0].data.items[0].reputation,
                        questions: results[1].data.total,
                        answers: results[2].data.total
                    };
                });
        }
        $scope.loaded = true;
    });
}]);
