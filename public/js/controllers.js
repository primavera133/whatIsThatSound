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

    if ($scope.sound) {
        $scope.sound.stop();
    }

    bgService.setBg('choose');

}]).
controller('PlayController', ['$scope', '$http', '$route', 'ngAudio', 'BgService', function ($scope, $http, $route, ngAudio, bgService) {
    if ($scope.sound) {
        $scope.sound.stop();
    }
    $scope.haveSound = false;
    $scope.loadingSound = true;
    $scope.guessCorrect = false;

    
    var listId = $route.current.params.listId;

    bgService.setBg(listId);

    $scope.getSound = function () {
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


    var hasBeenTrieds = [];


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
        }
    }

}]);
