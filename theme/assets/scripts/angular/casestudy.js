var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('caseStudyController', ['$scope', function ($scope) {

    $scope.emailPattern = new RegExp(/((^|((?!^)([,;]|\r|\r\n|\n)))([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*))+$/);

    $scope.caseStudy = {};

    $scope.submit = function (fileUrl) {
        if ($scope.caseStudyForm.$valid)
            window.location.href = fileUrl;
        else
            event.preventDefault();
    };

    $scope.setCaseStudyForm = function (form) {
        $scope.caseStudyForm = form;
    };
}
]);
