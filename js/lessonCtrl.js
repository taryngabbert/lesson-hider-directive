angular.module('directivePractice')
.controller("lessonCtrl", function($scope) {

  $scope.lessons= ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test= "Two way data binding is so much fun! -A"

  $scope.announceDay = function (lesson, day) {
    if (day) {
    alert (lesson + " is active on " + day + ".");
  } else {
    alert ("The "+ lesson.toLowerCase() + " lesson date is TBD. Thank you for your patience.")
  }
  }

  $scope.addLesson = "";
  $scope.add= function(x) {
    $scope.lessons.push(x);
  }

  $scope.delete= function(y) {
    $scope.lessons.splice($scope.lessons.indexOf(y), 1);
  }
})
