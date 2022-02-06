define(["jquery"], function( $ ) {

    var fragen={};
    fragen.fragen=[];

    fragen.fragestellungDerFrage = function(id)
    {
        return fragen.frageliste[id].question;
    }

    fragen.antwortenDerFrage = function(id)
    {
        return Object.keys(fragen.frageliste[id].answers);
    }

    fragen.scoresZurAntwortXDerFrage = function(antwort, id)
    {
        return fragen.frageliste[id].answers[antwort];
    }



    // Herausfinden, wie man das zum Funktionieren kriegt
    fragen.ladeFragen =async function(url)
    {
/*         await $.getJSON( url).done( (data) => {
            data.forEach( item => fragen.frageliste.push(item));
            });
*/
        fragen.frageliste=
        [
          {
          "question": "Du stehst vor einem Problem, was du noch nie gesehen hast und weißt nicht, wie du anfangen sollst.",
          "answers": {
            "Einfach ausprobieren!": {
              "Rot": 1,
              "Lila": 1,
              "Abenteurer": 1
            },
            "Ich nähere mich der Lösung Schritt für Schritt, bis ich die Aufgabe perfekt gemeistert habe.": {
              "Orange": 1,
              "Grün": 1
            },
            "Ich recherchiere sämtliche verfügbaren Informationsquellen, bis ich eine Idee habe.": {
              "Gelb": 1
            },
            "Ich frage jemanden, der mir sagen kann, was ich tun kann.": {
              "Blau": 1
            },
          }
        },
          {
            "question": "Du gehst mit ein paar Freunden auf einen Ausflug in der Wildnis. Einer von ihnen verletzt sich schwer und kann nicht aufstehen.",
            "answers": {
              "Nachdem die Wunden versorgt sind, nehme ich ihn Huckepack und trage ihn zurück.": {
                "Rot": 1,
                "Orange": 1
              },
              "Kühlen Kopf bewahren und zuerst einmal das Erste-Hilfe-Buch zu Rate ziehen.": {
                "Gelb": 1,
                "Blau": 1
              },
              "Ich versorge den Freund und bringe ihn so schnell wie möglich in Sicherheit.": {
                "Grün": 1,
                "Lila": 1
              },
              "Der Trottel. Kann der nicht auf sich selbst aufpassen? Jetzt müssen wir erstmal raus aus dem Schlamassel.": {
                "Abenteurer": 1
            },
          }
        },
          {
            "question": "Ihr seid seit Tagen fernab der Zivilisation und der Proviant wird knapp. Ihr findet sehr schmackhaft aussehende Beeren, aber … ihr habt sie noch nie gesehen.",
            "answers": {
              "Wer nicht wagt, der nicht gewinnt. Einfach mal eine Handvoll probieren!": {
                "Rot": 1,
                "Abenteurer": 1
              },
              "Keine unbekannten Früchte anfassen! Es geht auch ein paar Tage ohne Essen.": {
                "Orange": 1,
                "Blau": 1
              },
              "Kann ich irgendwelche Merkmale wiedererkennen, oder gibt es Hinweise darauf, dass Tiere diese Beeren essen?": {
                "Grün": 1,
                "Gelb": 1
              },
              "Mal eine probieren. Wenn das gut geht, essen wir morgen ein paar und sehen dann weiter.": {
                "Lila": 1
            },
          }
        },
{
            "question": "Ihr habt in einer alten Ruine alte Relikte gefunden. Sie sind zwar nicht wertvoll, aber faszinierend.",
            "answers": {
              "Ich mache mir Notizen und Skizzen, um mehr recherchieren zu können.": {
                "Orange": 1,
                "Gelb": 1
              },
              "Die Geschichte muss ich sofort allen Leuten erzählen!": {
                "Lila": 1,
                "Abenteurer": 1
              },
              "Ich nehme mir ein Souvenir mit.": {
                "Rot": 1

              },
              "Bloß nichts anfassen: alte Sachen gehen leicht kaputt!": {
                "Grün": 1,
                "Blau": 1
            },
          }
        },
{
            "question": "Ihr seid auf einem Ausflug und werdet überfallen. An Waffen habt ihr natürlich nicht gedacht.",
            "answers": {
              "Man kann doch über alles reden. Irgendwie kommen wir hier mit heiler Haut raus.": {
                "Lila": 1

              },
              "Ich stelle mich vor die Schwächeren, um denen eine Chance zum Weglaufen zu geben.": {
                "Grün": 1,
                "Blau": 1
              },
              "Die haben sich mit den Falschen angelegt. Ein dicker Knüppel macht auch gut Aua.": {
                "Rot": 1,
                "Orange": 1
              },
              "Wer den Geländevorteil hat, braucht keine Waffen. Ich bin weg, bevor sie mich erwische.": {
                "Gelb": 1,
                "Abenteurer": 1
            },
          }
        },

 {
             "question": "Du bist an einer schweren Krankheit erkrankt. Deine Freunde wollen dich besuchen.",
             "answers": {
               "Ich freue mich über den Besuch, da er mich aufmuntert.": {
                 "Rot": 1,
                 "Lila": 1
               },
               "Ich kann mich viel besser erholen, wenn ich meine Ruhe habe.": {
                 "Orange": 1,
                 "Abenteurer": 1
               },
               "Ich frage den Arzt, ob ich ansteckend bin und Besuch bekommen darf.": {
                 "Blau": 1

               },
               "Ich weise sie ab, damit sie sich nicht anstecken.": {
                 "Gelb": 1,
                 "Grün": 1
             },
           }
         },
 {
             "question": "Einer deiner Freunde hat dir etwas gestohlen. Du weißt genau, wer es war.",
             "answers": {
               "Alles ist ersetzbar, außer Freunde.": {
                 "Gelb": 1
               },
               "Ich werde zukünftig besser auf meine Sachen aufpassen.": {
                 "Orange": 1,
                 "Blau": 1
               },
               "Ich versuche zu verstehen, warum mein Freund so etwas tut. Er muss ein Problem haben, das ich nicht kenne.": {
                 "Grün": 1,
                 "Lila": 1
               },
               "Ich suche die Konfrontation, und wenn ich meinen Kram nicht wiederkriege, dann gibt's Krawall.": {
                 "Rot": 1,
                 "Abenteurer": 1
             },
           }
         },
 {
             "question": "Ein Bettler bittet dich um eine Spende. Er sieht nicht so aus, als ob er schwach oder krank wäre.",
             "answers": {
               "Mir hat auch niemand was geschenkt. Er soll arbeiten, wenn er was will.": {
                 "Rot": 1,
                 "Orange": 1
               },
               "Es ist mir eine Pflicht, mich um die Bedürftigen zu kümmern. Selbstverständlich bekommt er was.": {
                 "Blau": 1,
                 "Grün": 1
               },
               "Ich rede mit ihm, um herauszufinden, wie er in seine Situation gekommen ist.": {
                 "Gelb": 1,
                 "Lila": 1
               },
               "Ich gebe ihm was, um eine tolle Geschichte über meine Großzügigkeit daraus zu machen.": {
                 "Abenteurer": 1

             }
           }
         },
 {
             "question": "Deine Eltern meinen, dass deine schulischen Leistungen schlecht sind, und du Nachhilfe nehmen sollst.",
             "answers": {
               "Na gut, da muss ich durch. Der Weg zum Erfolg ist halt mühsam.": {
                 "Orange": 1,
                 "Blau": 1
               },
               "Das ist ein Missverständnis, weil der Lehrer so blöde Fragen gestellt hat. Eigentlich gehöre ich zu den Besten.": {
                 "Gelb": 1,
                 "Abenteurer": 1
               },
               "Ich weiß ihre Fürsorge zu schätzen und werde mein Bestes geben.": {
                 "Grün": 1

               },
               "Das liegt nur daran, dass die Schule so langweilig ist. Nachhilfe macht es noch schlimmer!": {
                 "Rot": 1,
                 "Lila": 1
             }
           }
         },
 {
             "question": "Du musst für eine schwere Klassenarbeit lernen. Deine Eltern drohen dir mit Hausarrest, wenn du sie versemmelst.",
             "answers": {
               "Hausarrest? Allein der Gedanke daran macht mich wütend, und so kann ich erst recht nicht lernen.": {
                 "Rot": 1

               },
               "Bestrafung ist keine Lösung, und Lernen unter Druck funktioniert auch nicht besser. Ich rede mit ihnen.": {
                 "Gelb": 1,
                 "Grün": 1
               },
               "Für sowas gibt's Spickzettel. Der Lehrer findet den eh nicht.": {
                 "Abenteurer": 1

               },
               "Die Regeln werden halt oft von Anderen gemacht, aber es sind ja nur ein paar Tage, dann bin ich durch.": {
                 "Orange": 1,
                 "Blau": 1
             }
           }
         }];
  }
    return fragen;
});
