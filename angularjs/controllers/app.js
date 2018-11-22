// Controllers - use to separate logic from view.
angular
    //[Hint] create module. In parameters - name, dependencies
    .module("app", [])
    //[Hint] create controller - pass $scope as dependency to use variables in view
    .controller("UsersController", function ($scope) {
        $scope.firstName = "John";
        $scope.secondName = "Doe";
    })
    .controller("OrdersController", [function () {
        // [Hint] with "controller as syntax" it is no need to inject $scope to controller, you can refer to variables
        // using `this`.
        this.order = "First order";
    }]);