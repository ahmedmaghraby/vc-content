var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('feedbackController', ['$scope', '$uibModalInstance', 'feedbackService', 'dialogService', function ($scope, $uibModalInstance, feedbackService, dialogService) {
    $scope.setContactUsForm = function (form) {
        $scope.formContactUs = form;
    };

    $scope.submit = function () {
        $scope.formContactUs.$setSubmitted();
        if ($scope.formContactUs.$invalid) {
            return;
        }
        $scope.model.isProcessing = true;
        feedbackService.postFeedback($scope.model).then(function (response) {
            $scope.model.isProcessing = false;
            $scope.model.isProcessed = true;
            $scope.model.isSubmittedSuccessfully = true;
            $scope.closeModal();
            dialogService.showDialog(null, 'feedbackController', 'storefront.form-thank-you.tpl');
        }, function (response) {
            $scope.model.isProcessing = false;
            $scope.model.isProcessed = true;
        });
    };

    $scope.closeModal = function () {
        $uibModalInstance.close();
    };

    initialize();

    function initialize() {
        $scope.model = {
            isProcessing: false,
            isProcessed: false,
            isSubmittedSuccessfully: false,
            contact: {}
        };
    }
}]);
