angular.module('storefrontApp')
    .controller('replatformController', ['$scope', function ($scope) {

        $scope.emailPattern = new RegExp(/((^|((?!^)([,;]|\r|\r\n|\n)))([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*))+$/);

        $scope.submit = function () {
            var redirectUrl = '/thank-you-replatfroming-whitepaper';
            if ($scope.replatformForm.$valid)
                window.location.href = redirectUrl;
            else
                event.preventDefault();
        };

        $scope.setReplatformForm = function (form) {
            $scope.replatformForm = form;
        };
    }]);
