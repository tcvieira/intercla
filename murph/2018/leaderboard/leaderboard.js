angular
  .module("leaderboardModule", [])
  .config($locationProvider => {
    $locationProvider.html5Mode(true);
  })
  .controller("leaderboardCtrl", [
    "$scope",
    "$http",
    "$location",
    ($scope, $http, $location) => {
      var param = $location.search().cat;

      if (
        param &&
        (param == "0" || param == "1")
      ) {
        $scope.categoria = parseInt(param);
      } else {
        $scope.categoria = 0;
      }

      $scope.leaderboard = {};

      loadLeaderboard($scope.categoria);

      $scope.nomes = ["Individual", "Duplas"];

      $scope.toggleCategoria = function(idx) {
        $scope.categoria = idx;
        loadLeaderboard(idx);
      };

      function loadLeaderboard(idx) {
        $scope.carregando = true;
        $scope.leaderboard = {};
        $http
          .get("https://intercla.herokuapp.com/api/leaderboard/murph2018/" + idx)
          .then(response => {
            $scope.carregando = false;
            $scope.leaderboard = response.data;
          })
          .catch(err => {
            console.error("Error:", err.status, err.data);
            ngNotify.set(
              "Falha ao carregar leaderboard, tente novamente",
              "error"
            );
          });
      }
    }
  ]);
