define(["jquery"], function( $ ) {

    var descriptions={};
    descriptions.entries=[];

    descriptions.getNameOfEntry = function(entry)
    {
    console.log(entry, descriptions.entries[entry]);
        return descriptions.entries[entry].name;
    }

    descriptions.getTextOfEntry = function(entry)
    {
        return descriptions.entries[entry].text;
    }
    descriptions.getImageOfEntry = function(entry)
    {
        return descriptions.entries[entry].image;
    }


       descriptions.entries =
        {
           "Rot" :
          {
            "name" : "Roter Clan",
            "text" : "Der rote Clan steht für Temperament und Leidenschaft. Nicht umsonst wird dieser Clan durch eine Flamme repräsentiert. Nur wer mit Verstand und Herz bei der Sache ist, wird Erfolg haben. ",
            "image" : "red-clan"
          },
           "Gelb" :
          {
            "name" : "Gelber Clan",
            "text" : "Wissen ist der Schlüssel zum Erfolg. Bildung und Forschung sind die Kraft des Fortschritts. ",
            "image" : "yellow-clan"
         },
           "Orange" :
          {
            "name" : "Oranger Clan",
            "text" : "Mitglieder des orangen Clans zeichnen sich durch ihre Willenskraft, Ausdauer und Geduld aus. So erreichen sie jedes Ziel, welches sie sich setzen. ",
            "image" : "orange-clan"
         },
           "Abenteurer" :
          {
            "name" : "Abenteurer ",
            "text" : "Abenteuerer sind Freigeister. Freiheit schafft Raum zur Entfaltung. Wenn es gemeinsame Wege gibt, dann müssen sie allen nützen.  ",
            "image" : "adventurer-clan"
         },
           "Grün" :
          {
            "name" : "Grüner Clan",
            "text" : "Der grüne Clan ist sehr naturverbunden, nicht umsonst befindet sich das Heim dieses Clans unter der Erde. Hier beschützt man das, womit man sich verbunden fühlt - um jeden Preis.",
            "image" : "green-clan"
         },
           "Lila" :
          {
            "name" : "Lila Clan",
            "text" : "Mitglieder des lila Clans sind offen für alles. Sie sind kreativ und vielfältig. Menschen mögen zwar alle einzigartig sein, aber doch sind sie auch gleich.",
            "image" : "purple-clan"
         },
           "Blau" :
          {
            "name" : "Blauer Clan",
            "text" : "Beim blauen Clan folgen alle festen Strukturen und Regeln und bilden so die Basis für harmonisches Zusammenleben.",
            "image" : "blue-clan"
          }
         };

    // Herausfinden, wie man das zum Funktionieren kriegt
    descriptions.ladeDescriptions = async function(url)
    {
/*         await $.getJSON( url).done( (data) => {
            data.forEach( item => fragen.frageliste.push(item));
            });
*/
    return;
  }
    return descriptions;
});
