define(["jquery","game", "fragen", "score", "descriptions"], function( $, game, fragen, score, descriptions ) {

 var darstellung={};
     darstellung.aktualisiereFrage = function(fragestellung)
     {
          $("#frage").html(fragestellung);
     }

    darstellung.baueAntwortButton = function(text)
    {
        const onclickEvent = "require(['game','darstellung'], (game, darstellung) => {game.auswahl(this.value); darstellung.weitermachen();})";
        var buttonId = $('[id^="antwort-"]').length + 1;
        var button ='<button class="btn btn-outline-secondary" value=' + buttonId + ' id="antwort-'+buttonId +'" onclick="' +onclickEvent + '">' +text+ '</button>';
        return button;
    }

     darstellung.fuegeAntwortEin = function(text)
     {
        var button = darstellung.baueAntwortButton(text);
        $("#antworten").append(button);
     }

     darstellung.aktualisiereAntworten = function(antwortliste)
     {
        $("#antworten").html("");
        antwortliste.forEach( antwort =>
          {
            darstellung.fuegeAntwortEin(antwort);
          }
        );
     }

      darstellung.weitermachen = function()
      {
        if (game.allQuestionsAsked())
            { darstellung.wechseleAnsicht(); }
        else
            { darstellung.neueFrage(); }
      }

      darstellung.neueFrage=function()
      {
          aktuelleFrage = game.getPosition();
          darstellung.aktualisiereFrage(fragen.fragestellungDerFrage(aktuelleFrage));
          darstellung.aktualisiereAntworten(fragen.antwortenDerFrage(aktuelleFrage));
      }

      darstellung.wechseleAnsicht=function()
      {
        $("#quiz").toggleClass("d-none");
        darstellung.schreibeSiegerFraktion();
        $("#results").toggleClass("d-none");
      }

      darstellung.schreibeFraktion=function(rank)
      {
        console.log(descriptions);
        var fraktion = score.getFactionOfRank(rank);
        var fraktionsname = descriptions.getNameOfEntry(fraktion);
        var fraktionstext = descriptions.getTextOfEntry(fraktion);
        var fraktionsbild = descriptions.getImageOfEntry(fraktion);
        $("#rank"+rank+"-faction").text(fraktionsname);
        $("#rank"+rank+"-text").text(fraktionstext);
        $("#rank"+rank+"-img").attr("src", "/draonia-faction-quiz/img/" + fraktionsbild + ".svg");
      }


      darstellung.schreibeSiegerFraktion=function()
      {
        console.log(descriptions);
        for (var i=0; i<3; i++)
        {
            darstellung.schreibeFraktion(i);
        }
      }

 return darstellung;
});



/*
    function vueDemo() {
        new Vue({
            el: '#vue-field',
            data:  {message: 'Hello World'}
        });
    }
*/
