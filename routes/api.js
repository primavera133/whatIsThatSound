'use strict';
/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {

    res.json({
        name: 'Bobby'
    });
};

var getRandomSpecie = function (species) {
    var rand = Math.floor(Math.random() * species.length);
    console.log(species[rand], species);
    return species[rand];
};

var getRandomRecording = function (recordings) {
    var rand = Math.floor(Math.random() * recordings.length);
    return recordings[rand];
};


var baseUrl = 'http://www.xeno-canto.org/api/2/recordings?query=';

var getUrl = function (specie) {
    var url = baseUrl + encodeURIComponent(specie.sc);
    console.log(url);
    return url;
};

var getSamples = function (species, selectedSpecie) {
    var _ = require('lodash');

    var speciesNotSelected = _.filter(species, function (sample) {
       return  sample.sc != selectedSpecie.sc;
    });
    
    var samples = _.sample(speciesNotSelected, 3);


    selectedSpecie.selected = true;
    var rand = Math.floor(Math.random() * samples.length);
    samples.splice(rand, 1, selectedSpecie);

    samples = _.map(samples, function (sample) {
        sample.id = _.uniqueId();
        return sample;
    });

    return samples;
};


exports.getSound = function (req, res) {
    var request = require('request'),
        _ = require('lodash'),
        listId = req.query.listId,
        species = require('../lists/' + listId + '.js').getSpecies(),
        specie = getRandomSpecie(species),

        url = getUrl(specie);

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);

            var recording = getRandomRecording(data.recordings);

            var samples = getSamples(species, specie);

            res.json({
                recording: recording,
                samples: samples
            });
        }
    });
};