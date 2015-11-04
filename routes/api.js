'use strict';
/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {

    res.json({
        name: 'Bobby'
    });
};

var getRandomSpecie = function (listId) {

    var species = require('../lists/' + listId + '.js');

    var rand = Math.floor(Math.random() * species.getSpecies().length);
    var specie = species.getSpecies()[rand];
    console.log(rand, species.getSpecies()[rand]);
    return specie;
};


var baseUrl = 'http://www.xeno-canto.org/api/2/recordings?query=';
var getUrl = function (specie) {
    var url = baseUrl + encodeURIComponent(specie.sc);
    console.log(url);
    return url;
};


exports.getSound = function (req, res) {
    var request = require('request');
    var listId = req.query.listId;

    var specie = getRandomSpecie(listId);
    //console.log(specie.sc, encodeURIComponent);
    var url = getUrl(specie);

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.json(data);
        }
    });
};