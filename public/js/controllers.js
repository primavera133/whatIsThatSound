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
    if($scope.sound){
        $scope.sound.stop();
    }
    
    bgService.setBg('choose');

}]).
controller('PlayController', ['$scope', '$http', '$route', 'ngAudio', 'SoundService', 'BgService', function ($scope, $http, $route, ngAudio, soundService, bgService) {
    if($scope.sound){
        $scope.sound.stop();
    }

    var listId = $route.current.params.listId;
    
    bgService.setBg(listId);

    $scope.haveSound = false;
    $scope.showData = false;
    $scope.loadingSound = true;

    $http({
        method: 'GET',
        url: '/api/getSound',
        params: {
            listId: listId
        }
    }).
    success(function (data, status, headers, config) {

        soundService.setSoundData(data);

        $scope.recording = soundService.getRandomRecording();

        $scope.sound = ngAudio.load($scope.recording.file);

        $scope.loadingSound = false;

        $scope.haveSound = true;

    }).
    error(function (data, status, headers, config) {
        console.log('bad', data, status, headers, config);
    });

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

    $scope.showDataFn = function () {
        $scope.showData = true;
    };

    $scope.isLoading = function () {

    }

}]);
