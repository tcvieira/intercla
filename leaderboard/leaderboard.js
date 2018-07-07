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

      if (param && (param == "0" || param == "1" || param == "2")) {
        $scope.categoria = parseInt(param);
      } else {
        $scope.categoria = 0;
      }

      $scope.leaderboard = {};

      loadLeaderboard($scope.categoria);

      $scope.nomes = ["Iniciante", "Scale", "RX"];

      $scope.toggleCategoria = function(idx) {
        $scope.categoria = idx;
        loadLeaderboard(idx);
      };

      //TODO: GET FROM SERVER
      function loadLeaderboard(idx) {
        $scope.carregando = false;
        //$http.get();
        $scope.leaderboard = {
          masc: [
            {
              nome: "Atleta 1",
              box: "Box 1",
              pos: 1,
              score: 5,
              wod1: { pos: 1, resultado: "440 reps", wo:false},
              wod2: { pos: 2, resultado: "440 reps", wo:false},
              wod3: { pos: 3, resultado: 600, wo:false},
              wod4: { pos: 4, resultado: 360, wo:false}
            },
            {
              nome: "Atleta 2",
              box: "Box 2",
              pos: 2,
              score: 6,
              wod1: { pos: 1, resultado: "440 reps", wo:false},
              wod2: { pos: 2, resultado: "440 reps", wo:false},
              wod3: { pos: 3, resultado: 600, wo:false},
              wod4: { pos: 4, resultado: 360, wo:false}
            },
            {
              nome: "Atleta 3",
              box: "Box 3",
              pos: 3,
              score: 7,
              wod1: { pos: 1, resultado: "440 reps", wo:false},
              wod2: { pos: 2, resultado: "440 reps", wo:false},
              wod3: { pos: 3, resultado: 600, wo:false},
              wod4: { pos: 4, resultado: 360, wo:false}
            }
          ],
          fem: [
            {
              nome: "Atleta 4",
              box: "Box 1",
              pos: 1,
              score: 8,
              wod1: { pos: 1, resultado: "440 reps", wo:false},
              wod2: { pos: 2, resultado: "440 reps", wo:false},
              wod3: { pos: 3, resultado: 600, wo:false},
              wod4: { pos: 4, resultado: 360, wo:false}
            },
            {
              nome: "Atleta 5",
              box: "Box 2",
              pos: 2,
              score: 9,
              wod1: { pos: 1, resultado: "440 reps", wo:false},
              wod2: { pos: 2, resultado: "440 reps", wo:false},
              wod3: { pos: 3, resultado: 600, wo:false},
              wod4: { pos: 4, resultado: 360, wo:false}
            },
            {
              nome: "Atleta 6",
              box: "Box 3",
              pos: 3,
              score: 10,
              wod1: { pos: 1, resultado: "440 reps", wo:false},
              wod2: { pos: 2, resultado: "440 reps", wo:false},
              wod3: { pos: 3, resultado: 600, wo:false},
              wod4: { pos: 4, resultado: 360, wo:false}
            }
          ]
        };
      }
    }
  ]);
