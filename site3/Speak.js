(function (window) {
    var helloSpeaker = {};
        helloSpeaker.Speak = function (names){
            console.log(speakWord + " "+ names);
    }
    var speakWord = "Hello";
    window.helloSpeaker = helloSpeaker;
})(window);