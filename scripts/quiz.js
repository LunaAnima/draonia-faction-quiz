require(["/scripts/require-init.js"], function (config) {
    require(['fragen', 'darstellung', 'game', 'descriptions'],
                  function( fragen, darstellung, game, descriptions) {

                  fragen.ladeFragen("/data/dummy.json");

                  var quiz ={};


//                  console.log(game.allQuestionsAsked());

                // Beispiel-Aufruf

                  game.initPosition();
                  darstellung.neueFrage();

                });
});



