'use strict';

/* Services */

angular.module('myApp.services', [])
    .value('version', '0.1')
    .service('BgService', [function () {
        var bgService = {};

        bgService.setBg = function (listId) {
            var bg;

            switch (listId) {
                case 'choose':
                    bg = 'url(/images/common-starling_18168392615_o.jpg)';
                    break;
                case 'owls':
                    bg = 'url(/images/21004890929_5efc91470d_o.jpg)';
                    break;
                case 'all':
                    bg = 'url(/images/22249616309_578ed6cd46_o.jpg)';
                    break;
                default:
                    bg = 'url(/images/common-starling_18168392615_o.jpg)';
            }
console.log(listId, bg);
            document.querySelector('body').style.backgroundImage = bg;
        };

        return bgService;

    }])
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
