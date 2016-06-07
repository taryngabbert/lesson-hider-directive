angular.module('directivePractice')
.service("lessonService", function($http) {

  this.getSchedule = function () {
    return $http.get("schedule.json");
  };

  // var data= [
  //   {
  //     "weekday": "Monday",
  //     "lesson": "Routing"
  //   },
  //   {
  //     "weekday": "Tuesday",
  //     "lesson": "Directives"
  //   },
  //   {
  //     "weekday": "Wednesday",
  //     "lesson": "Review"
  //   },
  //   {
  //     "weekday": "Thursday",
  //     "lesson": "Firebase"
  //   },
  //   {
  //     "weekday": "Friday",
  //     "lesson": "No server project"
  //   }
  // ];
})
