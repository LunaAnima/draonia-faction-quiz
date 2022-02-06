require(["/draonia-faction-quiz/scripts/require-init.js"], function (config) {
    require(['fragen', 'darstellung', 'game', 'descriptions'],
                  function( fragen, darstellung, game, descriptions) {

                  fragen.ladeFragen("/data/fragen.json");
                  game.initPosition();
                  darstellung.neueFrage();
                });
});



