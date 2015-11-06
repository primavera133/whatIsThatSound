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
                    bg = 'url(/images/common-starling.jpg)';
                    break;
                case 'owls':
                    bg = 'url(/images/stars.jpg)';
                    break;
                case 'all':
                    bg = 'url(/images/bofink.jpg)';
                    break;
                case 'larks':
                    bg = 'url(/images/treepipit.jpg)';
                    break;
                default:
                    bg = 'url(/images/stjartmes.jpg)';
            }
            document.querySelector('body').style.backgroundImage = bg;
        };

        return bgService;

    }]).service('GameService', [function () {
    var gameService = {},
        correct = 0,
        incorrect = 0;

    gameService.addCorrect = function () {
        correct++;
    };
    gameService.addIncorrect = function () {
        incorrect++;
    };

    gameService.getCorrect = function () {
        return correct;
    };
    gameService.getIncorrect = function () {
        return incorrect;
    };

    return gameService;

}]);
