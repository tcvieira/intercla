angular.module("adminModule", ["ui.bootstrap"]).controller("adminCtrl", [
  "$scope",
  "$uibModal",
  "$http",
  ($scope, $uibModal, $http) => {
    $scope.nomes = ["Iniciante", "Scale", "RX"];

    $scope.categoria = 0;

    $scope.leaderboard = {};

    loadLeaderboard($scope.categoria);

    $scope.toggleCategoria = function(idx) {
      $scope.categoria = idx;
      loadLeaderboard(idx);
    };

    $scope.edit = function(atleta, wod) {
      $scope.atleta = atleta;
      $scope.wod = wod;
      $scope.modal = $uibModal.open({
        templateUrl: "modal.html",
        controller: "adminCtrl",
        keyboard: false,
        size: "lg",
        windowClass: "center-modal",
        scope: $scope
      });
    };

    //TODO: GET FROM SERVER
    function loadLeaderboard(idx) {
      $scope.carregando = false;
      //$http.get();
      $scope.leaderboard = {
        masc: [
          {
            id: 1,
            nome: "Atleta 1",
            box: "Box 1",
            pos: 1,
            score: 5,
            wod1: { id: 1, pos: 1, resultado: "440 reps", wo: false },
            wod2: { id: 2, pos: 2, resultado: "440 reps", wo: false },
            wod3: { id: 3, pos: 3, resultado: 600, wo: false },
            wod4: { id: 4, pos: 4, resultado: 360, wo: false }
          },
          {
            id: 2,
            nome: "Atleta 2",
            box: "Box 2",
            pos: 2,
            score: 6,
            wod1: { id: 1, pos: 1, resultado: "440 reps", wo: false },
            wod2: { id: 2, pos: 2, resultado: "440 reps", wo: false },
            wod3: { id: 3, pos: 3, resultado: 600, wo: false },
            wod4: { id: 4, pos: 4, resultado: 360, wo: false }
          },
          {
            id: 3,
            nome: "Atleta 3",
            box: "Box 3",
            pos: 3,
            score: 7,
            wod1: { id: 1, pos: 1, resultado: "440 reps", wo: false },
            wod2: { id: 2, pos: 2, resultado: "440 reps", wo: false },
            wod3: { id: 3, pos: 3, resultado: 600, wo: false },
            wod4: { id: 4, pos: 4, resultado: 360, wo: false }
          }
        ],
        fem: [
          {
            id: 4,
            nome: "Atleta 4",
            box: "Box 1",
            pos: 1,
            score: 8,
            wod1: { id: 1, pos: 1, resultado: "440 reps", wo: false },
            wod2: { id: 2, pos: 2, resultado: "440 reps", wo: false },
            wod3: { id: 3, pos: 3, resultado: 600, wo: false },
            wod4: { id: 4, pos: 4, resultado: 360, wo: false }
          },
          {
            id: 5,
            nome: "Atleta 5",
            box: "Box 2",
            pos: 2,
            score: 9,
            wod1: { id: 1, pos: 1, resultado: "440 reps", wo: false },
            wod2: { id: 2, pos: 2, resultado: "440 reps", wo: false },
            wod3: { id: 3, pos: 3, resultado: 600, wo: false },
            wod4: { id: 4, pos: 4, resultado: 360, wo: false }
          },
          {
            id: 6,
            nome: "Atleta 6",
            box: "Box 3",
            pos: 3,
            score: 10,
            wod1: { id: 1, pos: 1, resultado: "440 reps", wo: false },
            wod2: { id: 2, pos: 2, resultado: "440 reps", wo: false },
            wod3: { id: 3, pos: 3, resultado: 600, wo: false },
            wod4: { id: 4, pos: 4, resultado: 360, wo: false }
          }
        ]
      };
    }
  }
]);
