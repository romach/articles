angular
    .module("app", []) //[3] create module - name, dependencies
    .controller("UsersController", function ($scope) {  //[4] create controller - $scope as dep. to use vars. in view
        $scope.firstName = "John";
        $scope.secondName = "Doe";
    });