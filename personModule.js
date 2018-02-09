app.controller("Mycontroller", function($scope, $http) {
    $scope.f = "Adarsh";
    $scope.l = "Batham";


    $scope.users = [{
        id: 101,
        name: "Adarsh Batham",
        emailid: "adarshbatham@gmail.com"
    }, {
        id: 102,
        name: "Abhishek Joshi",
        emailid: "abhishekjoshi@gmail.com"
    }, {
        id: 103,
        name: "Aditi Maheshwari",
        emailid: "aditi@gmail.com"
    }, {
        id: 104,
        name: "Adhitya",
        emailid: "adhitya@gmail.com"
    }];

    // method and service for deleting the data
    $scope.deleteData = function(x) {
        console.log(".............In deletion operation..........");
        console.log("Name => " + x.name + ", Emailid =>" + x.emailid);
        console.log(".............................................");

        // $http.delete('/name_of_any_api/name_of_the_resource?' + x.name + '&' + x.emailid)
        //     .success(function(response) {
        //         $scope.status = response.status;
        //     })
        //     .error(function(response) {
        //         $scope.status = response.status;
        //     });
    };





    // method and service for inserting the data using POST method
    $scope.insertDataUsingPOSTMethod = function(id1, name1, emailid1) {
        console.log(".............In insertion operation..........");
        console.log("Id=>" + id1 + ", Name=>" + name1 + ", Email id=>" + emailid1);
        console.log(".............................................");
        // let postRequest = {
        //     method: "POST",
        //     url: "/demo/submitdata",
        //     data: {
        //         id: id1,
        //         name: name1,
        //         emailid: emailid1
        //     }
        // }
        // $http.post(postRequest).then(
        //     function(response) {
        //         $scope.status = response.status;
        //     },
        //     function(response) {
        //         $scope.status = response.status;
        //     }
        // );
    }



    $scope.name = null;
    $scope.id = null;
    $scope.emailid = null;

    // method and service for inserting the data using PUT method if data is not exists
    $scope.insertDataUsingPUTMethod = function(id, name, emailid) {
        console.log(".............In second insertion operation..........");
        console.log("Id=>" + id + ", Name=>" + name + ", Email id=>" + emailid);
        console.log(".............................................");
        var data = {
            id: id,
            name: name,
            emailid: emailid
        };

        // $http.put('/api/users/putmethod', data).then(function(response) {
        //     $scope.status = response.status;
        // }, function(response) {

        //     $scope.status = response.status;
        //     $scope.statustext = response.statusText;

        // });
    };
});