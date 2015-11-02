'use strict';

/* Services */

angular.module('myApp.services', [])
    .value('version', '0.1')
    .service('SoundService', [function () {
        var SoundService = {};

        SoundService.setSoundData = function (data) {
            this.data = data;
        };

        SoundService.getRandomRecording = function () {
            var rand = Math.floor(Math.random() * this.data.recordings.length);
            var recording;
            while (!this.isValidRecording(recording)) {
                recording = this.data.recordings[rand];
            }
            return recording;
        };

        SoundService.isValidRecording = function (recording) {
            if (_.isUndefined(recording)) {
                return false;
            }

            return !_.isUndefined(recording.file);
        };

        return SoundService;

    }]);
