define(["jquery", "fragen", "score"], function( $, fragen, score ) {

    var game={};
    game.position=-1;

    game.initPosition = function()
    {
        game.position=0;
    }

    game.nextPosition = function()
    {
        game.position+=1;
        return game.position;
    }

    game.getPosition = function()
    {
        return game.position;
    }
    game.erhoeheScore = function( antwort )
    {
        aktuelleFrage=game.getPosition();
        antwortliste= fragen.antwortenDerFrage( aktuelleFrage );
        gewaehlteAntwort = antwortliste[antwort -1];
        antwortScores= fragen.scoresZurAntwortXDerFrage( gewaehlteAntwort, aktuelleFrage);
        score.addScoresFromHash(antwortScores);
        console.log("Antwort = " + gewaehlteAntwort);
        console.log("Zugehörige Score = " + Object.values(antwortScores));
        console.log("Punktestand = " + Object.values(score.getScores()));
        console.log("Top Faction = " + score.getFactionOfRank(0));
        console.log("Top Score = " + + score.getScoreOfRank(0));
    }

    game.auswahl = function ( antwort )
    {
        console.log("Button " + antwort + " Gedrückt");
        game.erhoeheScore(antwort);

        game.nextPosition();

    }

    game.allQuestionsAsked = function()
    {
        return (game.position >= fragen.frageliste.length) ;
    }



    return game;
});
