define(["jquery"], function( $ ) {

 var score={};
 score.scores={};

 score.getScores = function() {
    return score.scores;
 }

 score.getScoreOf = function (key)
 {
    return score.scores[key];
 }

 score.setScoreOf = function (key, value)
 {
    score.scores[key] = value;
 }

 score.addScoreValue = function (key, value)
 {
    v = score.scores[key] || 0;
    v += value;
    score.scores[key] = v;
 }

 score.addScoresFromHash = function (scoreMap)
 {
    for ( key in scoreMap)
       {
            score.addScoreValue(key, scoreMap[key]);
       }
 }

score.getDescendingRanks = function ()
{
    var entryList=Object.entries(score.scores);
    entryList.sort(([,v1], [,v2]) => +v2 - +v1);
    return entryList;
}

score.getRank = function(rankNumber)
{
    return score.getDescendingRanks()[rankNumber];
}

score.getFactionOfRank=function(rankNumber)
{
    return score.getRank(rankNumber)[0];
}

score.getScoreOfRank=function(rankNumber)
{
    return score.getRank(rankNumber)[1];
}


 return score;
});
