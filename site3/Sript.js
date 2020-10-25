(function () {
var names = ["Yaakov", "Jhon", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];
for(i=0; i< names.length; i++){
    var firstletter = names[i].charAt(0).toLocaleLowerCase();
    if (firstletter == 'j') {
        speakGoodbye.Speak(names[i]);
    } else {
        helloSpeaker.Speak(names[i]);
    }
}
})();