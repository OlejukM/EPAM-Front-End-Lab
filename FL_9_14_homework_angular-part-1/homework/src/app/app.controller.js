const postsWall = angular.module("postsWall", []);

postsWall.controller("feedsListController", function feedsListController($scope) {
  $scope.newFeed = {};
  $scope.feeds = info;
  $scope.newPostForm = false;
  $scope.showFunc = function() {
    $scope.newPostForm = !$scope.newPostForm;
  };
  $scope.addPost = function() {
    if ($scope.newFeed !== null) {
      $scope.feeds.push($scope.newFeed);
      $scope.newFeed = {};
    }
  }
});
