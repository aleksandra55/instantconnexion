app.controller("mainController", function($scope, profileService){


$scope.profile = profileService.profileService. allProfile  ;
$scope.addProfile = function() {
  var profile = {
  name :  $scope.name,
  Job : $scope.job,
  Description: $scope.Description,
  image : $scope.image,

};

profileService.addProfile(profile);
};

$scope.removeProfile = profileService.removeProfile;



profileService.getProfile();



});