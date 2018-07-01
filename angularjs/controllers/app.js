// Controllers - use to separate logic from view.
angular
    .module("app", []) //[3] create module - name, dependencies
    .controller("UsersController", function ($scope) {  //[4] create controller - $scope as dep. to use variables in view
        $scope.firstName = "John";
        $scope.secondName = "Doe";
    })
    .controller("OrdersController", function () {
        // [5] with "controller as syntax" it is no need to inject $scope to controller, you can refer to variables
        // using `this`.
        this.order = "First order";
    });