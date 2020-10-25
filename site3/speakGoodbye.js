(function (window){
var speakGoodbye = {};
    speakGoodbye.Speak = function (names){
            console.log(speakWord + " "+ names);
    }
    var speakWord = "Goodbye";
    window.speakGoodbye = speakGoodbye;
})(window);