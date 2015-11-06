'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('AppCtrl', function ($scope, $http) {

    $http({
        method: 'GET',
        url: '/api/name'
    }).
    success(function (data, status, headers, config) {
        $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
        $scope.name = 'Error!';
    });

}).
controller('ChooseController', ['$scope', 'BgService', function ($scope, bgService) {
    //$scope.lang_en = true;
    //$scope.lang_sc = true;

    bgService.setBg('choose');

}]).
controller('PlayController', ['$scope', '$http', '$route', 'ngAudio', 'BgService', 'GameService', function ($scope, $http, $route, ngAudio, bgService, gameService) {
    var hasBeenTrieds = [];
    var listId = $route.current.params.listId;

    $scope.haveSound = false;
    $scope.loadingSound = true;
    $scope.guessCorrect = false;

    bgService.setBg(listId);
    
    $scope.gameService = gameService;

    $scope.getSound = function () {

        if ($scope.sound) {
            $scope.sound.stop();
        }

        $scope.haveSound = false;
        $scope.loadingSound = true;
        $scope.guessCorrect = false;


        $http({
            method: 'GET',
            url: '/api/getSound',
            params: {
                listId: listId
            }
        }).
        success(function (data, status, headers, config) {

            $scope.recording = data.recording;

            $scope.sound = ngAudio.load(data.recording.file);
            $scope.sound.play();

            $scope.loadingSound = false;

            $scope.haveSound = true;

            $scope.buttons = data.samples;

        }).
        error(function (data, status, headers, config) {
            console.log('bad', data, status, headers, config);
        });

    };

    $scope.getSound();

    $scope.getRemaining = function () {
        if (!$scope.sound) {
            return;
        }
        if ($scope.sound.remaining) {
            return $scope.sound.remaining.toFixed(2);
        }
        return 0;
    };

    $scope.playSound = function () {
        $scope.sound.play()
    };

    $scope.pauseSound = function () {
        $scope.sound.pause();
    };

    $scope.stopSound = function () {
        $scope.sound.stop();
    };


    $scope.isFalseAndTried = function (id) {
        return _.includes(hasBeenTrieds, id) && $scope.isCorrect(id) === false;
    };

    $scope.isCorrect = function (id) {
        return _.includes(hasBeenTrieds, id) && id === $scope.correctId;
    };

    $scope.guess = function (sample) {
        hasBeenTrieds.push(sample.id);

        if (sample.selected) {
            $scope.guessCorrect = true;
            $scope.correctId = sample.id;
            $scope.gameService.addCorrect();
        } else {
            $scope.gameService.addIncorrect();
        }
    };

    //Kill sounds before leaving page]
    $scope.$on('$locationChangeStart', function (event) {
        if ($scope.sound) {
            $scope.sound.stop();
        }
    });

}]);
