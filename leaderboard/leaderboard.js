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
        (param == "0" || param == "1" || param == "2" || param == "3")
      ) {
        $scope.categoria = parseInt(param);
      } else {
        $scope.categoria = 0;
      }

      $scope.leaderboard = {};

      loadLeaderboard($scope.categoria);

      $scope.nomes = ["Iniciante", "Scale", "RX", "Super Atletas"];

      $scope.toggleCategoria = function(idx) {
        $scope.categoria = idx;
        loadLeaderboard(idx);
      };

      //TODO: GET FROM SERVER
      function loadLeaderboard(idx) {
        $scope.carregando = false;
        //$http.get();
        var leaderboard = [
          //INICIANTE
          {
            masc: [
              {
                nome: "De 3 é melhor",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Guerrilheiros do Cross",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Titãs",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Nóis no Bar",
                box: "Crossfit Matriz",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Os Brows",
                box: "Crossfit Matriz",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              }
            ],
            fem: [
              {
                nome: "CLÃdestinas",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Rosas do Cerrado",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Joaninhas",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Pelo Menos",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Insanas",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "As Sousas",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Parceiras do Cross",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Canelas de Grilo",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Só Brutas JK",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Trio General",
                box: "Vessel CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "4.0 Turbo",
                box: "Vessel CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Trinity VR3",
                box: "VR3 CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Matrizetes",
                box: "Crossfit Matriz",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Oh my WOD",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              }
            ]
          },
          //SCALE
          {
            masc: [
              {
                nome: "O rei, o principe e o bobo",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "O coach tá vindo",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Os Lesionados",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Pokemons",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Penatras Bom de Bico",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Spartacus",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Mosqueteiros",
                box: "VR3 CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Tipo C",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Zero Cardio",
                box: "PW CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Valhalla",
                box: "Vessel CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Dazarabias",
                box: "Crossfit Matriz",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              }
            ],
            fem: [
              {
                nome: "Missão Impossível",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Magnificas",
                box: "Box não afiliado",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Liga da Justiça",
                box: "Lakeview Crossfit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "BKR",
                box: "VR3 CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Ai meu Cardio",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              }
            ]
          },
          //RX
          {
            masc: [
              {
                nome: "Ivanildo",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Maycon",
                box: "Nação Crossfit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Meliga",
                box: "Crossfit Gladius",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Fernando",
                box: "Nação Crossfit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Matheus Souto",
                box: "Nação Crossfit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Sandro",
                box: "CrossFit Clã",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Pepedro",
                box: "Selva CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Marcus",
                box: "Selva CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Johnatan",
                box: "Gama CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Lucas",
                box: "CrossFit PW",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Markin",
                box: "TAI CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Tulio",
                box: "Crossfit Matriz",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Rafael",
                box: "CrossFit Selva",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              }
            ],
            fem: [
              {
                nome: "Marina",
                box: "VR3 CrossFit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Anne",
                box: "CrossFit Selva",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Layanna",
                box: "CrossFit Selva",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              },
              {
                nome: "Carla",
                box: "Crossfit 1000 / Crossfit PMDF",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              }
            ]
          },
          //SUPER
          {
            masc: [
              {
                nome: "Uilian",
                box: "Carrasco Crossfit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              }
            ],
            fem: [
              {
                nome: "Maria Clara",
                box: "VR3 Crossfit",
                pos: 0,
                score: 0,
                wod1: { pos: 0, resultado: "" },
                wod2: { pos: 0, resultado: "" },
                wod3: { pos: 0, resultado: "" },
                wod4: { pos: 0, resultado: "" }
              }
            ]
          }
        ];

        $scope.leaderboard = leaderboard[idx];
      }
    }
  ]);
