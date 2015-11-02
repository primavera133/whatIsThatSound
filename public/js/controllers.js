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
controller('MyCtrl1', ['$scope', '$http', 'SoundService', 'ngAudio', function ($scope, $http, soundService, ngAudio) {

    $scope.loadingSound = false;
    $scope.haveSound = false;


    $scope.getSound = function () {

        if ($scope.sound) {
            $scope.sound.stop();
        }
        $scope.showData = false;
        $scope.loadingSound = true;

        $http({
            method: 'GET',
            url: '/api/getSound'
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
    };

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

}]).
controller('MyCtrl2', function ($scope) {
    // write Ctrl here

});
