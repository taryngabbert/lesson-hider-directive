angular.module('directivePractice')
.directive("lessonHider", function(){
  return {
    templateUrl: "js/lessonHider.html",
    restrict: "E",
    scope: {
      lesson: "=",
      dayAlert: "&",
      deleteLesson: "&"
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
      // $scope.checkDone();
    },
    link: function (scope, element, attributes) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleDay) {
          if (scheduleDay.lesson === scope.lesson) {
            scope.lessonDay= scheduleDay.weekday;
            element.find("li").css("text-decoration", "line-through");
            scope.checked= true;
            return;
          }

        });

        scope.checkLesson = function() {
          if (scope.checked) {
            element.toggleClass("checked");
            element.find("li").css("text-decoration", "line-through");
          } else {
            element.toggleClass("checked");
            element.find("li").css("text-decoration", "none");
          }
        }

      });
    }

  }
});
